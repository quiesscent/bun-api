import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hellow, Bun weth Express Au! Hello you ');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
