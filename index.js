const express = require("express");
const message = require('./database/msge');

const app = express();

const bodyParser = require("body-parser");
const { render } = require('ejs');
const { json } = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.set('body engine', json());
app.set('view engine', 'ejs')


app.listen(8080, '192.168.0.12', function(err) {
    if(err){ 
        console.log('Falha')
    }else{
        console.log('rodando')
    }
})


app.post('/create', (req,res)=>{
    var name = req.body.name
    var mensagem = req.body.msg
    message.create({
        name: name,
        msg: mensagem
    }).then(()=>{return res.redirected('/index')}).catch(()=>{
        res.send('Falha ao enviar')
    })
})

app.post('/remove', (req, res)=>{
    var id = req.body.id;
    message.findOne({where:{id:id}}).then((result) =>{
     if(result != undefined){
        result.destroy()
        res.redirect('/index')
     }else{
         res.redirect('/index')
     }
    })
})


app.get('/index', (req, res) =>{
    message.findAll().then((result) =>{
        if(result != undefined){
            res.render('index', {
                result: result
            })
        }else{
            res.send('Not found')
        }
    })
})


app.get('/chat', (req, res) =>{
    message.findAll().then((result) =>{
        if(result != undefined){
            res.render('chat', {
                result: result
            })
        }else{
            res.send('Not found')
            }
        })
    })