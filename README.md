# My HNGx stage 2 backend project

## Running this file locally

To clone this project run the following command in your terminal followed by code . to lauch your vs code

```bash
git clone https://github.com/ChibuzoEkwue/HNGx-backend-stage2.git
```

you will also need to your create your own mongo db connection url and in the config folder create a dev.env file and insert your connection url to the key MONGO_URL

```env
MONGO_URL=your_mongo_url
```

## Project Details

This is a simple node project, using express for routing and mongoose to connect to our mongodb database

## Route Struture

### Home Page

This is the index route you can get it by **GET** request to

```
https://hngx-backend-stage2-k6w2.onrender.com
```

### CRUD operation

### Create

This route can be gotten by making a **POST** request to the route /api This route will return a status code of 201 and 500 when we fail validations such not including a name field to body our if the name field contains anything other a string.

This route will ignore any other payload attached to req.body. An example of the endpoint is

```
https://hngx-backend-stage2-k6w2.onrender.com/api
```

An example of an accepted pay load is below

```json
{
	"name": "Chibuzo Ekwue"
}
```

An example of the response

```json
{
	"name": "Chibuzo Ekwue",
	"id": "650311cae78100c91777d6d5"
}
```

### Read

This route can be gotten by making a **GET** request to the route /api/id This route will return a status code of 200 and 500 when we fail if an invalid or wrong id is used. An example of the endpoint is

```
https://hngx-backend-stage2-k6w2.onrender.com/api/some-user-id
```

Example of a response

```json
{
	"id": "650311cae78100c91777d6d5",
	"name": "Chibuzo Ekwue"
}
```

### Update

This route can be gotten by making a **PUT** request to the route /api/id This route will return a status code of 201 and 500 if a invalid or wrong id is used. An example of the endpoint is

```
https://hngx-backend-stage2-k6w2.onrender.com/api/some-user-id
```

Example of the body

```json
{
	"name": "Dalu Ekwue"
}
```

Example of the response is

```json
{
	"id": "6503116ee78100c91777d6cd",
	"name": "Dalu Ekwue"
}
```

### Delete

This route can be gotten by making a **DELETE** request to the route /api/id . Where id is the users id. This route will return a status code of 200. An example of the endpoint is

```
https://hngx-backend-stage2-k6w2.onrender.com/api/some-user-id
```

Example of the response is

```json
{
	"msg": "User deleted"
}
```

## Status codes

201 - when users is created or updated

200 - for deleting or reading the user information

500 - validation or server error
