// express
const express = require('express');
const app = express();
const { CreateUser, GetUser, GetUsers, UpdateUser, DeleteUser, Login, Register, test, AuthCheck } = require('./models/userModel');
const UserRouter = require('./routes/userRouter');
const TweetRouter = require('./routes/tweetRouter');
const cors = require('cors')
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const options = {
    definition: {
        swagger: "2.0",
        info: {
            title: "ChatSon API",
            version: "0.5.0",
            description:
                "",
            license: {},
            contact: {
                name: "Arian Rezaei",
                email: "arian8ultra@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('ChatSon API');
});



app.use('/api/user', UserRouter);
app.use('/api/tweet', TweetRouter);
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true, })
  );

app.on('error', (err) => {
    console.log(err);
});

// Swagger




app.listen(3000, () => console.log('Listening on port 3000...'));