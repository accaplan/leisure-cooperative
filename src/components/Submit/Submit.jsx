import React from "react"

  export default class Submit extends React.Component {

  render() {
    return (
      
    <div className="submit-wrapper">
      <form data-netlify="true" name="submit" data-netlify-honeypot="bot-field" action="subscribed" className="submit-form">
        
        
        {/* 
            -email address
            -business name
            -primary url
            -social accounts, secondary urls
            -neighborhood

            -How many people work with you?
                1-4 11-40 41-100 100+

            -What kinds of work do you do?
                checkbox list
            
            -notes

        */}

        <div className="submit-written">
        
        <label htmlFor="submit-contact">What is your email?</label> 
        <input
          className="submit-form form-control valid"
          name="submit-contact"
          id="submit-contact"
          type="email"         
          placeholder="Your email address"
          required
        />

        <label htmlFor="submit-name">What is the name of your business?</label>        
        <input
          className="submit-form"
          name="submit-name"
          id="submit-name"
          type="text"
          placeholder="Business name"
          required
        />

        <label htmlFor="submit-website">Business website or primary web address:</label>        
        <input
          className="submit-website form-control valid"
          name="submit-website"
          id="submit-website"
          type="text"
          placeholder="Primary url"
          required
        />

        <label htmlFor="submit-social">Any social accounts or additional urls you want to include?</label>        
        <input
          className="submit-form"
          name="submit-social"
          id="submit-social"
          type="text"
          placeholder="@socials, etc"
        />

        <label htmlFor="submit-neighborhood">What neighborhood is your primary location in?</label> 
        <input
          className="submit-form form-control valid"
          name="submit-neighborhood"
          id="submit-neighborhood"
          type="text"
          placeholder="Neighborhood"
          required
        />
        </div>

        <p>How many people work with you?</p>
        <div className="submit-size">        
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="sizeSmall"
                value="1-4"
                type="radio"
                required
            />
            <label htmlFor="sizeSmall">1-4</label>
            
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="sizeMedium"
                value="11-40"
                type="radio"
            />
            <label htmlFor="sizeMedium">11-40</label> 

            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="sizeLarge"
                value="41-100"
                type="radio"
            />
            <label htmlFor="sizeLarge">41-100</label> 

            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="sizeHuge"
                value="100+"
                type="radio"
            />
            <label htmlFor="sizeHuge">100+</label> 
        </div>

        <p>What kinds of work do you do?</p>
        <div className="submit-select">
        <fieldset>      
            <legend>What kinds of work do you do?</legend>      
            
            <input type="checkbox" name="3Drendering" value="3D rendering" id="3Drendering" />
            <label htmlFor="3Drendering">3D rendering</label>
            
            <input type="checkbox" name="advertising" value="advertising" id="advertising" />
            <label htmlFor="advertising">advertising</label>

            <input type="checkbox" name="architecture" value="architecture" id="architecture" />
            <label htmlFor="architecture">architecture</label>

            <input type="checkbox" name="branding" value="branding" id="branding" />
            <label htmlFor="branding">branding</label>

            <input type="checkbox" name="community" value="community" id="community" />
            <label htmlFor="community">community</label>

            <input type="checkbox" name="engineering" value="engineering" id="engineering" />
            <label htmlFor="engineering">engineering</label>

            <input type="checkbox" name="environmental" value="environmental" id="environmental" />
            <label htmlFor="environmental">environmental</label>

            <input type="checkbox" name="events" value="events" id="events" />
            <label htmlFor="events">events</label>

            <input type="checkbox" name="exhibition" value="exhibition" id="exhibition" />
            <label htmlFor="exhibition">exhibition</label>

            <input type="checkbox" name="experiential" value="experiential" id="experiential" />
            <label htmlFor="experiential">experiential</label>

            <input type="checkbox" name="freelance" value="freelance" id="freelance" />
            <label htmlFor="freelance">freelance</label>

            <input type="checkbox" name="gaming" value="gaming" id="gaming" />
            <label htmlFor="gaming">gaming</label>

            <input type="checkbox" name="illustration" value="illustration" id="illustration" />
            <label htmlFor="illustration">illustration</label>

            <input type="checkbox" name="industrial" value="industrial" id="industrial" />
            <label htmlFor="industrial">industrial</label>

            <input type="checkbox" name="interior" value="interior" id="interior" />
            <label htmlFor="interior">interior</label>

            <input type="checkbox" name="marketing" value="marketing" id="marketing" />
            <label htmlFor="marketing">marketing</label>

            <input type="checkbox" name="motion" value="motion" id="motion" />
            <label htmlFor="motion">motion</label>

            <input type="checkbox" name="naming" value="naming" id="naming" />
            <label htmlFor="naming">naming</label>

            <input type="checkbox" name="packaging" value="packaging" id="packaging" />
            <label htmlFor="packaging">packaging</label>

            <input type="checkbox" name="photography" value="photography" id="photography" />
            <label htmlFor="photography">photography</label>

            <input type="checkbox" name="presentation" value="presentation" id="presentation" />
            <label htmlFor="presentation">presentation</label>

            <input type="checkbox" name="press" value="press" id="press" />
            <label htmlFor="press">press</label>

            <input type="checkbox" name="print" value="print" id="print" />
            <label htmlFor="print">print</label>

            <input type="checkbox" name="product" value="product" id="product" />
            <label htmlFor="product">product</label>

            <input type="checkbox" name="publicRelations" value="public relations" id="publicRelations" />
            <label htmlFor="publicRelations">pr</label>

            <input type="checkbox" name="research" value="research" id="research" />
            <label htmlFor="research">research</label>

            <input type="checkbox" name="education" value="education" id="education" />
            <label htmlFor="education">education</label>

            <input type="checkbox" name="strategy" value="strategy" id="strategy" />
            <label htmlFor="strategy">strategy</label>

            <input type="checkbox" name="typography" value="typography" id="typography" />
            <label htmlFor="typography">typography</label>

            <input type="checkbox" name="ux-ui" value="ux-ui" id="ux-ui" />
            <label htmlFor="ux-ui">dogs</label>

            <input type="checkbox" name="vfx" value="vfx" id="vfx" />
            <label htmlFor="vfx">vfx</label>

            <input type="checkbox" name="video" value="video" id="video" />
            <label htmlFor="video">video</label>

            <input type="checkbox" name="sound" value="sound" id="sound" />
            <label htmlFor="sound">sound</label>

            <input type="checkbox" name="voice" value="voice" id="voice" />
            <label htmlFor="voice">voice</label>

            <input type="checkbox" name="virtual-reality" value="virtual-reality" id="virtual-reality" />
            <label htmlFor="virtual-reality">virtual reality</label>

            <input type="checkbox" name="eCommerce" value="eCommerce" id="eCommerce" />
            <label htmlFor="eCommerce">eCommerce</label>

            <input type="checkbox" name="favorite_pet" value="dogs" id="dogs" />
            <label htmlFor="dogs">dogs</label>

        </fieldset> 
        </div>

        <div className="submit-bonus">
          <p>Would you like to be a guest on the show? Or do you want to hear from someone specifically?</p>
          <label htmlFor="submit-guest">Would you like to be a guest on the show? Or do you want to hear from someone specifically?</label> 
          <input
            className="submit-form form-control valid"
            name="submit-guest"
            id="submit-guest"
            type="text"
            placeholder="Anyone in the community qualifies to be a part it"
          />


          <p>Would you buy a hardcopy printed directory?</p> 
          <label htmlFor="submit-print">Would you buy a hardcopy printed directory?</label> 
          <input
            className="submit-form form-control valid"
            name="submit-print"
            id="submit-print"
            type="text"
            placeholder="A beautiful resource or the internet is fine"
          />

          <p>If you have any questions or suggestions, let us know:</p> 
          <label htmlFor="submit-notes">If you have any questions or suggestions, let us know:</label> 
          <input
            className="submit-form form-control valid"
            name="submit-notes"
            id="submit-notes"
            type="text"
            placeholder="Any additional types of work, urls, feelings"
          />
        </div>        
            

        



        <input
          className="hidden"
          name="bot-field"
          placeholder="Don't fill this out if you're a human"
        />
        
        <button type="submit">
          Submit
        </button>
      </form>
      </div>

      
    )
  }
}
