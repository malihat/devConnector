const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

dotenv.config({ path: './config.env' });

// app.get('/', (req, res) => {
//   res.send('Hello from express');
// });

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

// Connect to mongodb database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((connection) => {
    console.log('MongoDB connnection successful');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
