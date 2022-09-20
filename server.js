const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use('/', (req, res) => {
	res.status(200).json({status:sucess})
})

app.listen(PORT, console.log(`Server is listening at port: ${PORT}`))
