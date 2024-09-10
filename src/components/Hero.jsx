import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="hero-sec">
      {/* Intro */}
      <div className="my-desc">
        <h1>Hello World!</h1>
        <h2>
          Hi, Myself <span>Joydeep Bhattacharjee</span>
        </h2>
        <p>
          I'm an aspiring software developer passionate about technology and
          problem-solving. I&apos;m excited to dive into coding, build
          innovative solutions, and continuously learn and grow in the
          ever-evolving tech landscape. With a strong drive and curiosity,
          I&apos;m eager to explore new challenges and contribute to meaningful
          projects in the world of software development.
        </p>
      </div>
      {/* sidebar  */}
      <section className="sidebar-sec">
        <div className="sidebar">
          <div>
            <h3>Connect ME</h3>
          </div>
          <ul>
            <li>
              <FaLinkedin color="blue" size={30} />
            </li>
            <li>
              <FaGithub color="black" size={30} />
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
