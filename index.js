const express = require('express')
const path = require('path')
const rowRouter = require('./server/routes/row.routes')
const PORT = process.env.port || 8000

const app = express()
app.use(express.json())
app.use('/api', rowRouter)

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`))