import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out for collaborations, job opportunities, or
            just to say hi!
          </p>

          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:yourname@example.com"> chetnakanak2001@gmail.com</a>
          </div>
          <div className="info-item">
            <i className="fa-solid fa-phone"></i> +91-9313473573
          </div>
          <div className="info-item">
            <i className="fa-solid fa-location-dot"></i> Surat, India
          </div>

          <div className="info-item">
            <i className="fa-brands fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/chetna-kanak" target="_blank">
              chetna-kanak
            </a>
          </div>

          <div className="info-item">
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com/chetna2711" target="_blank">
              chetna2711
            </a>
          </div>

          <div className="info-item">
            <i className="fa-brands fa-instagram"></i>{" "}
            <a href="https://www.instagram.com/" target="_blank">
              chetu_2711
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/chetna-kanak6a6698209"
              target="_blank"
            ></a>
            <a href="https://github.com/chetna2711" target="_blank"></a>
            <a href="https://twitter.com" target="_blank"></a>
          </div>
        </div>

        <div className="contact-form">
          <form action="#" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <iframe
          className="map"
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586592733!2d72.73988454706296!3d21.159180203697005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743764523591!5m2!1sen!2sin"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
