| WARNING: this application is in progress |
| --- |

# Ecommerce MERN application (Mongo, Express, React, Node)
This is a fullstack ecommerce application.
It contains APIs associated with ecommerce CRUD activites such as user sign up, sign in.

## APIs
Current list of available APIs.
- /api/signup
- /api/signin

## Database
The database is currently a noSQL mongoDB free tier sandbox hosted at  [https://cloud.mongodb.com](https://cloud.mongodb.com).
In order to get credentials for the database (required in .env file) you must log into the mongoDB site and create a new 'user' under security settings.

## Getting started

Go to .env.example and copy values. Create a new .env file and paste example values in. Change the example values as desired.

Install npm packages.
```sh
npm install
```

Run the server.
```sh
npm run start
```