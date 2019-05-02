const express = require('express');
require('dotenv').config();
const app = express();
const { db } = require('../database/index');
const port = process.env.PORT || 3000;

//routers
const auth = require('./routes/auth');
const businesses = require('./routes/businesses');
const community = require('./routes/community');
const user = require('./routes/user.js')

// authentication route
app.use('/auth', auth);
// businesses route
app.use('/business', businesses)
// user route
app.use('/user', user)
// community route
app.use('/community', community);

app.listen(port, () => console.log(`Server is listening on port ${port}`));