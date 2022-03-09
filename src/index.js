const express = require('express')
const app = express()
port = 3000

app.get('/', (req, res) => {
  res.render('home')
})

app.use(express.static('static'))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Cloud-Library listening at http://10.0.0.170:${port}`)
})


