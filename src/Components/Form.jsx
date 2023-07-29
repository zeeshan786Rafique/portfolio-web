import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            {/* Name */}
            <label>Name</label>
            <input type="text" />
            {/* Email */}
            <label>Email</label>
            <input type="email" />
            {/* Subject */}
            <label>Subject</label>
            <input type="text" />
            {/* Message */}
            <label>Message</label>
            <textarea type="text" rows="6" placeholder="Type here your message"/>
            <button className="btn">submit</button>
        </form>
    </div>
  )
}

export default Form