import React from 'react'
import "./Footer.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                {/* left side */}
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight:"2rem"}}/>
                        <div>
                            <p>81 C PUHS Raiwind</p>
                            <p>Lahore Pk</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight:"2rem" }} />
                            +92-123456789
                        </h4>
                    </div>
                    <div className="mail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight:"2rem"}} />
                            abc@gmial.com
                        </h4>
                    </div>
                </div>


                {/* right side */}
                <div className="right">
                    <h4>About Our Company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore animi impedit voluptatem, voluptates alias laborum enim nihil voluptatibus illum distinctio tempore quidem quaerat.</p>
                    <div className="social">
                        {/* FB Icone */}
                        <FaFacebook
                            size={30}
                            style={{ color: "#fff",marginRight:"1rem"}} />
                        {/* Twitter icone */}
                        <FaTwitter
                            size={30}
                            style={{ color: "#fff", marginRight:"1rem"}} />
                        {/* Linkedin icone */}
                        <FaLinkedin
                            size={30}
                            style={{ color: "#fff", marginRight:"1rem" }} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer