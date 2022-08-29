import chalk from 'chalk';
import  express  from "express";
import { json } from 'express';
import cors from 'cors';

const app = express();   
app.use(cors())
app.use(json())  


const users=[];
const tweets = [];

app.post('/sign-up',(req, res)=>{
    const {username, avatar}=req.body;

    if (!username || !avatar) {
        res.status(400).send('preencha todos os campos');
        return;
      }

    users.push({username, avatar});

    res.send('ok');
})

app.post('/tweets', (req,res)=>{
const {username, tweet} = req.body;
const { avatar }= users.find(user=> user.username===username);
tweets.push(username, tweet, avatar);

res.send('ok');

})

app.get('/tweets', (req, res) => {
  
    if (tweets.length <= 10) {
      return res.send([...tweets].reverse());
    }
  
  });
  
app.listen(5000, ()=> {console.log(chalk.black("funcionando"))})