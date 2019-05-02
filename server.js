port = process.env.PORT || 3002
app = require('./app')


app.listen(port, () => console.log(`Running in port ${port}`))
