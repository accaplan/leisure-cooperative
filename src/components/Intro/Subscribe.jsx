import React from "react"

  export default class Subscribe extends React.Component {

  render() {
    return (
      

      <form data-netlify="true" name="subscribe" class="email-form">
        
        {/* data-netlify-honeypot="bot-field" action="subscribed" */}
        {/* <input
          class="hidden"
          name="bot-field"
          placeholder="Don't fill this out if you're a human"
        /> */}
        <input
          class="email-form form-control valid"
          name="email"
          id="email"
          type="email"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Emails'"
          placeholder="Emails"
        />
        
        <button type="submit">
          Subscribe
        </button>
      </form>

      
    )
  }
}
