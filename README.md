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

#### User Registration

- [POST /registration](#post-registration)
- [POST /login](#post-/login)
- [GET /fetch](#get-/fetch)
- [POST /add-station](#post-/add-station)
- [POST /delete](#post-/delete)

## POST /registration

API for user signup. An access token will be returned for the user to save in the local storage/session storage.

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

## POST /login

API for user login. An access token will be returned for the user to save in the local storage/session storage.

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

## GET /fetch

API to display all the radio stations of the user.

Request Body

```
{
    "email":"user-email",
    "token":"user-token:
}
```

Response Body

```
[
    //list of all the radio stations added by the user
]
```

## POST /add-station

API to add a radio station.

Request Body

```
{
    "email":"user-email",
    "token":"user-token",
    "radio":"example radio"
}
```

## POST /delete

API to delete a specified radio station.

Request Body

```
{
    "email":"user-email",
    "token":"user-token",
    "radio":"example radio"
}
```
