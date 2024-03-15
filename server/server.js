import express from "express";
import { Server } from 'socket.io';

const app      = express();
const port     = 3000;
const server   = app.listen(port, () => { console.log('Server running');});
const io       = new Server(server);

const sockets  = [];
const users    = [];
const messages = [];

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.redirect('login');
});

app.post('/login', (req, res) =>{
    res.redirect(`/chat/${req.body.username}`);
});

app.get('/chat/:username', (req,res) => {
    res.render('chat',{username:req.params.username });
});