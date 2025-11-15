import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config()

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)

// When running locally (development), start a listener.
// On Vercel (serverless) the app will be wrapped by the platform, so we export it.
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`);
    });
}

export default app;