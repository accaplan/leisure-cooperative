// require('dotenv').config()
// const fetch = require('node-fetch')
// const EMAIL_TOKEN = process.env.EMAIL_TOKEN
// exports.handler = async event => {
//   const email = JSON.parse(event.body).payload.email
//   console.log(`Recieved a submission: ${email}`)
//   return fetch('https://api.buttondown.email/v1/subscribers', {
//     method: 'POST',
//     headers: {
//       Authorization: `Token ${EMAIL_TOKEN}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email,"tags":["embeddedFormNetlify"] }), 
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(`Submitted to Buttondown:\n ${data}`)
//     })
//     .then(() => navigate("/subscribed/"))
//     .catch(error => ({ statusCode: 422, body: String(error) }))
// }


// .then(() => navigate("/subscribed/"))

require("dotenv").config()

const fetch = require("node-fetch")
const { EMAIL_TOKEN } = process.env

exports.handler = async event => {
  const payload = JSON.parse(event.body).payload
  console.log(`Recieved a submission: ${payload.email}`)

  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: payload.email, notes: payload.name, "tags":["embeddedFormNetlify"] }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}