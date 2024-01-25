import { useState } from 'react'

// import { MdCall, MdEmail } from "react-icons/md";


import style from './ContactForm.module.scss'
import axios from 'axios'
export const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // // Send email

  const handleSubmit = (e) => {
    e.preventDefault()

    let formData = {
      name,
      email,
      message
    }

    axios.post('https://api.carolinecontedev.com/', formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        alert(res.data)
        setEmail('')
        setMessage('')
        setName('')
      })
      .catch(error => {
        alert('Something went wrong', error)
        console.error('Error sending message', error)
      })
  }



  //contacts
 
 
  // const contacts = [{
  //   title: 'Call me:',
  //   emoji: <MdCall />,
  //   contact: ' +39 371 540 3003'
  // }, {
  //   title: 'Email me:',
  //   emoji: <MdEmail />,
  //   contact: 'carolinecontee@gmail.com'
  // }
  // ]

  return (
    <article id="contact" className={style.contact}>
      <header>
        <h2>Contact  me:</h2>
      </header>

      <div className={style.contactContainer}>
        <form onSubmit={handleSubmit} >
          <label> Name: </label>
          <input type="text"
            name="name" id="name" placeholder="Name"
            value={name} onChange={(e) => setName(e.target.value)}
            required
          />
          <label> Email: </label>
          <input type="text"
            name="email" id="email" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label> Message: </label>
          <textarea name="message" id="message" placeholder="Message"
            value={message} onChange={e => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">SUBMIT</button>
        </form>
        {/* <div className={style.contactCards}>
          {
            contacts.map(contact => (<div key={contact.title} className={style.card}>
              <p className={style.contactEmoji}>{contact.emoji}</p>
              <p className={style.contactTitle}>{contact.title}</p>
              <p>{contact.contact}</p>
            </div>))
          }
        </div> */}
      </div>
    </article>
  )
}
