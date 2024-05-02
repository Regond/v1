import Express from 'express';
const app = Express();
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import likeRoutes from './routes/likes.js';
import commentsRoutes from './routes/commentaries.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

app.use(Express.json())
app.use(cors());

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/likes', likeRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/comments', commentsRoutes)

app.listen(8800, () => {
    console.log("working")
})