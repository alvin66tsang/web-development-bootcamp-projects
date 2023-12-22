//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000

var valid = false

app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'))

function validate(req, res, next) {
    console.log(req.body['password'])
    if(req.body['password'] == 'ILoveProgramming')
        valid = true
    next()
}

app.use(validate)

app.get('/', (req, res) => {
    valid = false
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/check', (req, res) => {
    if(valid) res.sendFile(__dirname + '/public/secret.html')
    else res.status(404).send('Invalid password.')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})