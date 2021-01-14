const express = require('express');
app = express()

require('dotenv').config()
app.set('view engine', 'ejs')
app.use('/api/', require('./routes/hello'))

 
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`Listen on port: ${url}`);
})

