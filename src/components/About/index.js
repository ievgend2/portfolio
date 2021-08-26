import "../../index.css"
import Certifications from "../Resume/ID Certifications.pdf"
import Resume from "../Resume/ID Resume.pdf"


function About() {
  return (
    <div className="top-bottom-margin website-background-black">
      <h1 className="rotate f-lg">About</h1>

      <div className="max-width text-color-white  ">
        <div className="logo">
          <div className="logo-inner">
            <a href="/portfolio2.0">
              <div className="label-logo on-hover--40 text-color-white website-background-black"></div>
            </a>
          </div>
        </div>
        <p className="size-large">Hi, I`m Ievgen.</p>
        <p className="size-large">Result-driven and highly motivated software developer with a huge desire to grow.</p>
        <p className="size-large">I’m ready to bring value to the place where I work, contribute on my own or as part of the team to meet company goals.</p>
        <p className="size-large">I believe skills can be taught, but personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
        <p className="size-large">You can read more about my experience, skills, education and much more in the PDF attached bellow:</p>
        <div className="links size-large">
          <div className="links" data-aos="fade-up">
            <a href={Resume} rel="noopener noreferrer" target="_blank" className="on-hover-40 text-color-red">My resume (pdf 81kb)</a>
            {/* <a href="/portfolio2.0/static/media/ID Resume.b038f8fa.pdf" rel="noopener noreferrer" target="_blank" className="on-hover-40 text-color-red">My resume (pdf 28kb)</a> */}
            <a href={Certifications} rel="noopener noreferrer" target="_blank" className="on-hover-40 text-color-red">My certifications (pdf 203kb)</a>
            {/* <a href="/portfolio2.0/static/media/ID Certifications.3be71719.pdf" rel="noopener noreferrer" target="_blank" className="on-hover-40 text-color-red">My certifications (pdf 235kb)</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
