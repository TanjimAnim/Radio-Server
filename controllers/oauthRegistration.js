const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const url = require("url");
const { User } = require("../models");

let authorizationUrl = null;
let userCredential = null;

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);
const scopes = ["https://www.googleapis.com/auth/userinfo.email"];

authorizationUrl = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "online",
  /** Pass in the scopes array defined above.
   * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
  scope: scopes,
  // Enable incremental authorization. Recommended as a best practice.
  include_granted_scopes: true,
});

const oauthRegistration = async (req, res, next) => {
  try {
    // Example on redirecting user to Google's OAuth 2.0 server.

    if (req.url === "/v1/oauth") {
      res.redirect(authorizationUrl);
    }
    if (req.url.startsWith("/v1/oauth?code")) {
      // Handle the OAuth 2.0 server response
      let q = url.parse(req.url, true).query;

      if (q.error) {
        // An error response e.g. error=access_denied
        throw new Error("Error:" + q.error);
      } else {
        const googleAuth = google.oauth2({
          version: "v2",
          auth: oauth2Client,
        });
        let { tokens } = await oauth2Client.getToken(q.code);
        oauth2Client.setCredentials(tokens);

        //get user email and search through the database
        const googleUserInfo = await googleAuth.userinfo.get();

        const email = googleUserInfo.data.email;
        const existingEmail = await User.findOne({ email: email });

        //checking if the email exists in database
        if (existingEmail === null || existingEmail.length === 0) {
          // Get access and refresh tokens (if access_type is offline)
          userCredential = tokens;

          const user = await User.create({
            email,
            token: userCredential.access_token,
          });
          //saving user into the database
          await user.save(function (err, result) {
            if (err) {
              return res.json("some error occured", err);
            } else {
              return res
                .status(200)
                .json({ accesstoken: `${userCredential.access_token}` });
            }
          });
        } else {
          return res.json("email has already been registered");
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = oauthRegistration;
