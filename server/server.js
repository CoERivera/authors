const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors(), express.json());

const connectDb = require('./config/mongoose.config');
connectDb();

const authorRouter = require('./routes/author.routes');
app.use('/api', authorRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));


