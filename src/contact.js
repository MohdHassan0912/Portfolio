import Common from "./common";
import Common1 from "./common1";

const Contact = () => {
  return (
    <>
      <Common />
      <div class="contact-container">
        <h2>Contact Me</h2>
        <form action="submit_form.php" method="POST" class="contact-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="submit-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
