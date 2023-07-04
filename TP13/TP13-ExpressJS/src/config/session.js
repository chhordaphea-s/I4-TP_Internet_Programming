var session = require('express-session');
const redis = require('redis');
var RedisStore = require("connect-redis") (session)
const hour = 1000*60*60;
module.exports = async (app)=>{
    const client = redis.createClient({
        url: "redis://localhost:6379",
        legacyMode: true
    })
    client.connect().then(()=>{
        console.log("Redis Connected");
    }).catch(console.error);
    // let redisStore = new RedisStore({
    //     client: client
    // })
    app.use(session({
        store: new RedisStore({ client: client}),
        secret: "S@cretKey",
        saveUninitialized: true,
        cookie: {maxAge: hour},
        resave: false,
        name: "token"
    }))
}


