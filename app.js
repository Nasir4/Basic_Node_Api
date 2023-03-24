import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js'
import taskRouter from './routes/taskRouters.js'
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddlewear } from './middlewares/errorMiddlewear.js';
 
export const app = express()



config({
    path:'./utils/config.env'
})

app.use(express.json())
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
}))
app.use('/api/v1/users',userRouter)
app.use('/api/v1/tasks',taskRouter)

app.use(errorMiddlewear)















