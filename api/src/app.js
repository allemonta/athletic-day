const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const db = require('./db/mongoose');

const initialRouter = require('./routers/initialRouter')

const app = express()
const port = process.env.PORT

/* APP CONFIG */
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTER */
app.use('/api', initialRouter)

/* ERROR HANDLER */
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        error: err.message,
        errors: err.errors,
    });
});

/* NOT FOUND */
app.get("*", (req, res) => {
    res.send({ error: "Endpoint not found" })
});

/* START SERVER */
app.listen(port, () => {
    console.log('[App] Server is up on port ' + port);
});