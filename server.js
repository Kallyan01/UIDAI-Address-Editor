const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const flash = require("express-flash")
const session = require("express-session")
const User = require("./models/User")
const app =express()
app.set('view-emgine','ejs')
app.get('/',(req,res)=>{
    res.render("index.ejs",{name:"user"});
})
app.get('/login',(req,res)=>{
    res.render("user-login.ejs");
})
app.get('/agent-login',(req,res)=>{
    res.render("agent-login.ejs");
})
app.get('/dashboard',(req,res)=>{
    res.render("dashboard-user.ejs");
})
app.get('/dashboard-agent',(req,res)=>{
    res.render("dashboard-agent.ejs");
})
app.get('/extract',(req,res)=>{
    res.render("addExtract.ejs")
})
app.get('/user-address-update', (req, res)=>{
    res.render("user-address-update.ejs");
})
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/auth",{
    useUinfiedTopology :true,
    useNewUrlParser : true,
}).then(()=>{
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    });
});

