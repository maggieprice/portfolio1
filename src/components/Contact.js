import React from 'react';

const Contact = () =>{
    return (
        <div>
            <h1>We Should Hang Out...</h1>
                <div className="social-media-links">
                    {/* LinkedIn, Twitter, Github,  */}
                </div>
                <div className="contact-box">
                    <form>
                        <input name="name" type="text"  placeholder="Your Name" required/>
                        <input name="email" type="email"  placeholder="Your Email" required/>
                        <input name="message"  placeholder="Your Message" required/>
                    </form>
                </div>
        </div>
    )
}

export default Contact