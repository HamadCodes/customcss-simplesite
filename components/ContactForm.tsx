

const ContactForm = () => {

  return (
    <form className="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit" className="cta-btn">Send Message</button>
    </form>
  );
};

export default ContactForm;
