const express = require("express")
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
app.listen(3000)