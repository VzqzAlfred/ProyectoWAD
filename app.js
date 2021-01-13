const express = require('express');
app = express()

require('dotenv').config()
app.set('view engine', 'ejs')
app.use('/', require('./routes/hello'))

 
const PORT = process.env.PORT || 3005

app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`)
})

