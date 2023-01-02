/*  @swagger
 /api/user:
  get:
    summary: Get all users
    description: Get all users
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error
  post:
    summary: Create a user
    description: Create a user
    properties:
      username:
        type: string
      password:
        type: string
      email:
        type: string
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              username:
                type: string
              password:
                type: string
              email:
                type: string
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error
/api/user/login:
  post:
    summary: Login
    description: Login
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              username:
                type: string
              password:
                type: string
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error
/api/user/register:
  post:
    summary: Register
    description: Register
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              username:
                type: string
              password:
                type: string
              email:
                type: string
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error
/api/user/auth:
  get:
    summary: Auth Check
    description: Auth Check
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error
/api/user/{id}:
  get:
    summary: Get a user
    description: Get a user
    parameters:
      - in: path
        name: id
        schema:
          type: string
        required: true
        description: The user id
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error
  put:
    summary: Update a user
    description: Update a user
    parameters:
      - in: path
        name: id
        schema:
          type: string
        required: true
        description: The user id
    requestBody:
      content:
        application/json:
          schema:
            type: object
            properties:
              username:
                type: string
              password:
                type: string
              email:
                type: string
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error
  delete:
    summary: Delete a user
    description: Delete a user
    parameters:
      - in: path
        name: id
        schema:
          type: string
        required: true
        description: The user id
    responses:
      200:
        description: Success
      401:
        description: Unauthorized
      500:
        description: Internal Server Error */
const express = require('express');
const { CreateUser, GetUser, GetUsers, UpdateUser, DeleteUser, Login, Register, AuthCheck, FollowByUsername, UnfollowByUsername,GetCurrentUser,GetUserByUsername } = require('../models/userModel');
const router = express.Router();





router.get('/', GetUsers);
router.get('/:id', GetUser);
router.put('/:id', UpdateUser);
router.delete('/:id', DeleteUser);
router.post('/', CreateUser);
router.post('/login', Login);
router.post('/register', Register);
router.get('/auth', AuthCheck);
router.post('/follow', FollowByUsername);
router.post('/unfollow', UnfollowByUsername);
router.get('/currentuser', GetCurrentUser);
router.get('/username/:username', GetUserByUsername);

module.exports = router;