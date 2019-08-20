import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res)=> {
  return res.status(200).send({
    message: 'Welcome to DevC Training'
  });
});

app.listen(port, () => {
  console.log('Dev Server is Up and running');
});