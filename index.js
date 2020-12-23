var restify = require('restify');
const config = require('./config/config.js');
const mongoose = require('mongoose');
const user = require('./models/user.js');

const server = restify.createServer({
    name: "restapi for customer",
    version: '1.1.0'
})

const db = mongoose.connection;

db.on('error', err => console.log(err));


server.use(restify.plugins.bodyParser())

server.get("/", function(req, res, next){
    res.send('Hello')
})

server.get("/json", function(req, res) {
    res.json({hello: 'world'})
})

server.get("/user", function(req, res) {
    res.setHeader("Content-Type", "application/json")
    const users = user.find({})
    res.send(users)
})

server.listen(config.PORT, () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(
        config.MONGODB_URL,
        {useNewUrlParser: true}
        );
});