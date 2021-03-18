import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
import productRoutes from './routes/product';

const app = express();

dotenv.config();

//routes
app.use('/api',productRoutes);

app.use(morgan('dev'));
//
const port = process.env.PORT || 8000

app.listen(port, () => { 
    console.log('Server is running port',port);
})