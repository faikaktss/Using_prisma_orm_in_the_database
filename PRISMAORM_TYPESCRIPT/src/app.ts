import express,{Request,Response} from 'express';

const app = express();
const PORT = 5000;

app.get('/',(req:Request, res:Response) =>{
    res.send('Hello typescript');
})

app.listen(PORT, ()=>{
    console.log('sunucu  ayakta');
})