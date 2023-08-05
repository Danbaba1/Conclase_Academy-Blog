const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    if(req.path === '/'){
         res.send('Hello, World!'); 
    }
});

app.post('/account-create',(req,res)=>{
    const result = accountCreate(req.body);
});

app.post('/profile-create',(req,res)=>{
    const result  = profileCreate(req.body);
})

app.post('/post-create',(req,res)=>{
    const result = postCreate(req.body);
})

app.post('/login',(req,res)=>{

})

app.delete('/post-delete',(req,res)=>{
    const result = postDelete(req.body);
})

app.post('/comment-create',(req,res)=>{
    const result = commentCreate(req.body);
})

app.delete('/comment-delete',(req,res)=>{
    const result = commentDelete(req.body);
})

app.listen(3000,(req,res)=>{
    console.log('App is listening on port 3000');
})