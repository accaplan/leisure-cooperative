import React, { useState } from "react"
import { navigate } from 'gatsby'
import NetlifyForm from 'react-ssg-netlify-forms'

const Submit = () => {

  // Post-Submit Navigate
  const postSubmit = () => {
    navigate('/submitted')
  }

  // Simple controlled form setup (Control your own state)
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({

    // Primary info
    submitContact: '',
    submitName:'',
    submitWebsite:'',
    submitSocial:'',
    submitNeighborhood:'',
    submitSize:'',

    // tags
    rendering:'',
    advertising:'',
    architecture:'',
    branding:'',
    community:'',
    development:'',
    environmental:'',
    events:'',
    exhibition:'',
    experiential:'',
    freelance:'', // ********* Do we want this?
    gaming:'',
    illustration:'',
    industrial:'',
    interior:'',
    marketing:'',
    motion:'',
    naming:'',
    packaging:'',
    photography:'',
    presentation:'',
    print:'',
    product:'',
    publicRelations:'',
    research:'',
    education:'',
    strategy:'',
    typography:'',
    uxui:'',
    vfx:'',
    video:'',
    sound:'',
    voice:'',
    virtualReality:'',
    eCommerce:'',

    // Extra Q's
    submitGuest:'',
    submitPrint:'',
    submitNotes:'',

  })

  return (
      <NetlifyForm formName="Submit - Notion" formValues={formValues} postSubmit={postSubmit} >

<div className="submit-wrapper">

        <div className="submit-written">

        <label htmlFor="submit-contact">What is your username?</label>
        <input
          className="submit-form form-control valid"
          name="submitContact"
          id="submit-contact"
          type="email"
          placeholder="Username"
          value={formValues.name}
          onChange={handleChange}
          required
          tabindex="0"
        />

        <label htmlFor="submit-name">What is your ElementID?</label>
        <input
          className="submit-form"
          name="submitName"
          id="submit-name"
          type="text"
          placeholder="ElementID"
          value={formValues.name}
          onChange={handleChange}
          required
          tabindex="0"
        />

        <label htmlFor="submit-website">Business website or primary web address:</label>
        <input
          className="submit-form form-control valid"
          name="submitWebsite"
          id="submit-website"
          type="text"
          placeholder="Primary url"
          value={formValues.name}
          onChange={handleChange}
          required
          tabindex="0"
        />

        <label htmlFor="submit-social">Any social accounts or additional urls you want to include?</label>
        <input
          className="submit-form"
          name="submitSocial"
          id="submit-social"
          type="text"
          placeholder="@socials, etc"
          value={formValues.name}
          onChange={handleChange}
          tabindex="0"
        />

        <label htmlFor="submit-neighborhood">What neighborhood is your primary location in?</label>
        <input
          className="submit-form form-control valid"
          name="submitNeighborhood"
          id="submit-neighborhood"
          type="text"
          placeholder="Neighborhood you're based in"
          value={formValues.name}
          onChange={handleChange}
          required
          tabindex="0"
        />
        </div>

        <p>What do you have to offer?</p>
        <div className="submit-size">
            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeSmall"
                value="1-4"
                type="radio"
                onChange={handleChange}
                required
            />
            <label tabindex="0" htmlFor="sizeSmall">Space</label>

            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeMedium"
                value="11-40"
                type="radio"
                onChange={handleChange}
            />
            <label tabindex="0" htmlFor="sizeMedium">Transportation</label>

            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeLarge"
                value="41-100"
                type="radio"
                onChange={handleChange}
            />
            <label tabindex="0" htmlFor="sizeLarge">Goods</label>

            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeHuge"
                value="100+"
                type="radio"
                onChange={handleChange}
            />
            <label tabindex="0" htmlFor="sizeHuge">Knowledge</label>
        </div>

        <p>Tell us about your offering</p>
        <div className="submit-select">
        <fieldset>
            <legend>What kinds of work do you do?</legend>

            <input type="checkbox" name="rendering" value="3D rendering" id="rendering" onChange={handleChange}/>
            <label tabindex="0" htmlFor="rendering">camping</label>

            <input type="checkbox" name="advertising" value="advertising" id="advertising" onChange={handleChange}/>
            <label tabindex="0" htmlFor="advertising">fishing</label>

            <input type="checkbox" name="architecture" value="architecture" id="architecture" onChange={handleChange}/>
            <label tabindex="0" htmlFor="architecture">garden</label>

            <input type="checkbox" name="branding" value="branding" id="branding" onChange={handleChange}/>
            <label tabindex="0" htmlFor="branding">woodworking</label>

            <input type="checkbox" name="community" value="community" id="community" onChange={handleChange}/>
            <label tabindex="0" htmlFor="community">snowsport</label>

            <input type="checkbox" name="development" value="development" id="development" onChange={handleChange}/>
            <label tabindex="0" htmlFor="development">watersport</label>

            <input type="checkbox" name="environmental" value="environmental" id="environmental" onChange={handleChange}/>
            <label tabindex="0" htmlFor="environmental">cycling</label>

            <input type="checkbox" name="events" value="events" id="events" onChange={handleChange}/>
            <label tabindex="0" htmlFor="events">events</label>

            <input type="checkbox" name="exhibition" value="exhibition" id="exhibition" onChange={handleChange}/>
            <label tabindex="0" htmlFor="exhibition">bikepacking</label>

            <input type="checkbox" name="experiential" value="experiential" id="experiential" onChange={handleChange}/>
            <label tabindex="0" htmlFor="experiential">climbing</label>

            <input type="checkbox" name="freelance" value="freelance" id="freelance" onChange={handleChange}/>
            <label tabindex="0" htmlFor="freelance">hunting</label>

            <input type="checkbox" name="gaming" value="gaming" id="gaming" onChange={handleChange}/>
            <label tabindex="0" htmlFor="gaming">hiking</label>

            <input type="checkbox" name="illustration" value="illustration" id="illustration" onChange={handleChange}/>
            <label tabindex="0" htmlFor="illustration">running</label>

            <input type="checkbox" name="industrial" value="industrial" id="industrial" onChange={handleChange}/>
            <label tabindex="0" htmlFor="industrial">ceramics</label>

            <input type="checkbox" name="interior" value="interior" id="interior" onChange={handleChange}/>
            <label tabindex="0" htmlFor="interior">skateboarding</label>

            <input type="checkbox" name="marketing" value="marketing" id="marketing" onChange={handleChange}/>
            <label tabindex="0" htmlFor="marketing">surfing</label>

            <input type="checkbox" name="motion" value="motion" id="motion" onChange={handleChange}/>
            <label tabindex="0" htmlFor="motion">sewing/knitting</label>

            <input type="checkbox" name="naming" value="naming" id="naming" onChange={handleChange}/>
            <label tabindex="0" htmlFor="naming">dyeing</label>

            <input type="checkbox" name="packaging" value="packaging" id="packaging" onChange={handleChange}/>
            <label tabindex="0" htmlFor="packaging">cooking</label>

            <input type="checkbox" name="photography" value="photography" id="photography" onChange={handleChange}/>
            <label tabindex="0" htmlFor="photography">photography</label>

            <input type="checkbox" name="presentation" value="presentation" id="presentation" onChange={handleChange}/>
            <label tabindex="0" htmlFor="presentation">baking</label>

            <input type="checkbox" name="print" value="print" id="print" onChange={handleChange}/>
            <label tabindex="0" htmlFor="print">audio production</label>

            <input type="checkbox" name="product" value="product" id="product" onChange={handleChange}/>
            <label tabindex="0" htmlFor="product">preserving/fermenting</label>

            <input type="checkbox" name="publicRelations" value="public relations" id="publicRelations" onChange={handleChange}/>
            <label tabindex="0" htmlFor="publicRelations">foraging</label>

            <input type="checkbox" name="research" value="research" id="research" onChange={handleChange}/>
            <label tabindex="0" htmlFor="research">printmaking</label>

            <input type="checkbox" name="peanutbutter" value="research" id="research" onChange={handleChange}/>
            <label tabindex="0" htmlFor="research">school</label>

        </fieldset>
        </div>

        <div className="submit-bonus">
          <p>Would you like to sponsor us?</p>
          <label htmlFor="submit-guest">Would you like to be a guest on the show? Or do you want to hear from someone specifically?</label>
          <input
            className="submit-form form-control valid"
            name="submitGuest"
            id="submit-guest"
            type="text"
            placeholder="We accept advertising partnerships to fund development of the platform"
            value={formValues.name}
            onChange={handleChange}
            tabindex="0"
          />


          <p>Would you be willing to join the meetings?</p>
          <label htmlFor="submit-print">Would you be willing to join the meetings?</label>
          <input
            className="submit-form form-control valid"
            name="submitPrint"
            id="submit-print"
            type="text"
            placeholder="I would love to join"
            value={formValues.name}
            onChange={handleChange}
            tabindex="0"
          />
          <input
            className="submit-form form-control valid"
            name="submitPrint"
            id="submit-print"
            type="text"
            placeholder="Not at the moment"
            value={formValues.name}
            onChange={handleChange}
            tabindex="0"
          />

          <p>If you have any questions or suggestions, let us know:</p>
          <label htmlFor="submit-notes">If you have any questions or suggestions, let us know:</label>
          <input
            className="submit-form form-control valid"
            name="submitNotes"
            id="submit-notes"
            type="text"
            placeholder="Any additional types of work, urls, feelings"
            value={formValues.name}
            onChange={handleChange}
            tabindex="0"
          />
        </div>

        <button type="submit" className="submit-form-button">
          Submit
        </button>

</div>

      </NetlifyForm>
  )
}

export default Submit;
