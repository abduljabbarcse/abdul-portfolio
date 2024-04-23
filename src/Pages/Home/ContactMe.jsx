export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./img/email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:abduljabbarcse2001@gmail.com">
              abduljabbarcse2001@gmail.com
            </a>
          </p>
        </div>
        <div class="contact-info-container">
          <img
            src="./img/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/abdul-jabbar-427331288/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
