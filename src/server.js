import express from 'express';
import postsRouter from './routes/posts.route.js';

const app = express();
app.use(express.json());

app.use('/posts', postsRouter);

app.listen(3000, () => console.log('API Instagram rodando na porta 3000'));