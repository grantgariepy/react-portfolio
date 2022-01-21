import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from 'emailjs-com';
import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context";

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_h0nmafe",
                "template_oh7f94r",
                formRef.current,
                "user_qahuVYXXIY9wYiGASJ0CB"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon" />
                            (801)726-0955
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            grant.gariepy@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Salt Lake City, Utah
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always
                        freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
