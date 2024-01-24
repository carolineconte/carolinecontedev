const express = require('express')
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer')
const PORT = 3000;

app.use(express.json())
//Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.post('/', (req, res) => {

  const { name, email, message } = req.body
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'carolinecontee@gmail.com',
      pass: 'tzkl cplh dfzo lnfm'
    }
  })

  const mailOptions = {
    from: email,
    to: 'carolinecontee@gmail.com',
    subject: `Message from ${name}: ${email}`,
    text: message
  }

  transporter.sendMail(mailOptions,(error,info) => {
    if(error){
      console.log(error);
      res.send(error)
    }else{
      console.log('Email sent: ' + info.response)
      res.send('sucess')
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
