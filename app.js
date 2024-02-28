const express = require('express')
const app =express();

app.set('view engine','ejs')

app.listen(3000);
app.get('/',(req,res)=>{
    const blogs = [{title:"Title 1",snippet:"Snippet 1"},{title:"Title 1",snippet:"Snippet 1"},{title:"Title 1",snippet:"Snippet 1"}];
    res.render('index',{title:'home',blogs});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'about'})
});

app.get('/create',(req,res)=>{
    res.render('create',{title:"Create"})
});

app.get('/about-us',(req,res)=>{
    res.redirect('./about');
});

app.use((req,res)=>{
    res.status(404).render('404')
});



