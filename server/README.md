# Radio-Server

A simple radio server where users can maintain their radio stations.

### Features

1. Signup & Sign In.
2. API to fetch, create, update and delete stations

### Technology

Language: Javascript (NodeJS)
Database: MongoDB

### Installation

To run this project,

1. Download the files.
2. Open it on VSCode(or any other editor).
3. In the folder, type the command "npm install". It will install the dependencies.
4. type "npx nodemon" to run the project locally.

### API resources

- [POST /v1/registration](#post-v1registration)
- [POST /v1/login](#post-v1login)
- [GET /v1/oauth](#get-v1oauth)
- [GET /v1/fetch](#get-v1fetch)
- [POST /v1/add-station](#post-v1add-station)
- [POST /v1/delete](#post-v1delete)

### POST /v1/registration

API for user signup. An access token will be returned for the user to save in the local storage/session storage.

example : POST http://localhost:3000/v1/registration

Request Body

```
{
    "email":"lallana@Bing.com",
    "password":"12345678"
}

```

Response Body

```
{
  "accesstoken": "user-access-token"
}
```

### POST /v1/login

API for user login. An access token will be returned for the user to save in the local storage/session storage.

example : POST http://localhost:3000/v1/login

Request Body

```
{
    "email":"lallana@Bing.com",
    "password":"12345678"
}

```

Response Body

```
{
  "accesstoken": "user-access-token"
}
```

### GET /v1/oauth

route for users to sign up with their Google account. An access token will be returned for the user to save in the local storage/session storage.

Response Body

```
{
  "accesstoken": "user-access-token"
}
```

### GET /v1/fetch

API to display all the radio stations of the user.

example : http://localhost:3000/v1/fetch

Request Body

```
{
    "token":"user-token:
}
```

Response Body

```
[
    //list of all the radio stations added by the user
]
```

### POST /v1/add-station

API to add a radio station.

example : http://localhost:3000/v1/add-station

Request Body

```
{
    "token":"user-token",
    "radio":"example radio"
}
```

### POST /v1/delete

API to delete a specified radio station.

example : http://localhost:3000/v1/delete

Request Body

```
{
    "token":"user-token",
    "radio":"example radio"
}
```
