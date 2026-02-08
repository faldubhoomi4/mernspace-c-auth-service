import express from 'express';

const app = express();

app.get('', (req, res) => {
  return res.send('Welcome to the page ');
});

export default app;
