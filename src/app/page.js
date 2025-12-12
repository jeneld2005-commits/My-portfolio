import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <>
      <nav>
        <ul className="nav-menu">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="header-section">
        <div className="intro-text">
          <h1>Hi! It's Me</h1>
          <h2 className="name">Jenelle</h2>
          <p>and I am currently pursuing a Bachelor of Science in Computer Science at Partido State University.</p>
          <a href="#about" className="btn-primary">Discover More About Me</a>
          <div className="social-icons-header">
            <a href="#"><Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} /></a>
            <a href="#"><Image src="/images/google.svg" alt="Google" width={24} height={24} /></a>
            <a href="#"><Image src="/images/whatsapp.svg" alt="WhatsApp" width={24} height={24} /></a>
          </div>
          <h3 className="portfolio-text">PORTFOLIO</h3>
        </div>
        <div className="profile-img-container">
          <Image src="/images/profile.png" alt="Jenelle's Photo" className="profile-img" width={230} height={230} />
        </div>
      </header>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-container">
          <p className="about-text">
            I'm Jenelle Asilo Delloro, 20 years old, and currently living in San Isidro, Camarines Sur. I am a transferred and registered student pursuing my third year of college at Partido State University. With dedication and goal determination, I aspire to become a UI/UX designer who creates digital experiences that are both intuitive and emotionally engaging.
            <br /><br />
            While I may not be technologically skilled, I am an observer who realizes the moments that matter—I'll be great, you can count on me.
            <br /><br />
            Beyond design, I truly enjoy the arts because whenever creativity moves and reconnects, I love learning to nurture that same strength and to use the tools above all. I value peace & simplicity—values that shaped both my academic excellence and my personal philosophy.
          </p>
          <div className="aspiring-container">
            <h3>Aspiring</h3>
            <h2 className="ui-ux-designer">UI/UX Designer</h2>
            <Image src="/images/profile.png" alt="Jenelle's Photo" className="aspiring-img" width={180} height={180} />
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Soft Skills</h2>
        <div className="skill">
          <label>Empathy and User-Centered Thinking</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '95%' }}></div>
            <span>95%</span>
          </div>
        </div>
        <div className="skill">
          <label>Adaptability and Growth Mindset</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '98%' }}></div>
            <span>98%</span>
          </div>
        </div>
        <div className="skill">
          <label>Clear and Concise Communication</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '95%' }}></div>
            <span>95%</span>
          </div>
        </div>
        <div className="skill">
          <label>Creative Problem-solving</label>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
            <span>90%</span>
          </div>
        </div>

        <h2>Technical Skills</h2>
        <div className="technical-skills">
          <div className="tech-card">
            <Image src="/images/technical1.png" alt="Technical Skill 1" width={280} height={180} />
          </div>
          <div className="tech-card">
            <Image src="/images/figma-logo.png" alt="Figma Logo" width={280} height={180} />
            <div className="figma-text">Figma</div>
          </div>
        </div>
      </section>

      <section id="education" className="education-section">
        <h2>Educational Background</h2>
        <div className="education-container">
          <div className="education-card">
            <Image src="/images/education1.png" alt="Education Place 1" width={300} height={180} />
          </div>
          <div className="education-card">
            <Image src="/images/education2.png" alt="Education Place 2" width={300} height={180} />
          </div>
          <div className="education-card">
            <Image src="/images/education3.png" alt="Education Place 3" width={300} height={180} />
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me!</h2>
        <form>
          <div className="form-left">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Type here" />
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Type here" />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Type here" />
          </div>
          <div className="form-right">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Type here"></textarea>
            <button type="submit" className="btn-secondary">Send Message</button>
          </div>
        </form>
      </section>

      <footer>
        <div className="footer-contact-info">
          <div>
            <p><strong>Contact Information</strong></p>
            <p><Image src="/images/phone.svg" alt="Phone" className="icon" width={18} height={18} /> +63 977 629 2989</p>
            <p><Image src="/images/map.svg" alt="Location" className="icon" width={18} height={18} /> San Isidro, Sipocot</p>
            <p><Image src="/images/email.svg" alt="Email" className="icon" width={18} height={18} /> jenelledelloro@gmail.com</p>
          </div>
          <div>
            <p><strong>Connect with Me!</strong></p>
            <div className="social-icons-footer">
              <a href="#"><Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} /></a>
              <a href="#"><Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} /></a>
              <a href="#"><Image src="/images/google.svg" alt="Google" width={24} height={24} /></a>
              <a href="#"><Image src="/images/whatsapp.svg" alt="WhatsApp" width={24} height={24} /></a>
            </div>
          </div>
        </div>

        <div className="footer-thankyou">
          <h3>PORTFOLIO</h3>
          <div className="thankyou-box">
            <h2>Thank You!</h2>
            <p>
              It's a joy to present my portfolio—which I manage with your expectations and inspire confidence in my craft.
            </p>
          </div>
          <ul className="footer-social-list">
            <li><Image src="/images/facebook.svg" alt="Facebook" width={20} height={20} /> jenelle.delloro</li>
            <li><Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} /> @__reality</li>
            <li><Image src="/images/gmail.svg" alt="Email" width={20} height={20} /> jenelled@gmail.com</li>
            <li><Image src="/images/whatsapp.svg" alt="Skype" width={20} height={20} /> Jenelle D.</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
