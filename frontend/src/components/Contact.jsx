import { useState } from "react"

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    function handleSubmit(e){

        e.preventDefault();

        if(!name || !email || !message){
            alert("Please fill in all fields");
            return;
        }

        setStatus("Thanks! Your form has been submitted.")

        setName("");
        setEmail("");
        setMessage("");

        console.log({name, email, message});
    }

    return (
        <section id='contact' className='contact'>
            <h2>Get in Touch</h2>

            <p>Have a project in mind or an opportunity to discuss? Feel free to reach out.</p>

            <form className='contact-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Your email address"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">Send Message</button>

                <p role="status">{status}</p>
            </form>
        </section>
    )
}

export default Contact
