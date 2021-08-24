import "../../index.css"

function About() {
  return (
    <div className="top-bottom-margin website-background-black">
      <h1 className="rotate f-lg">About</h1>

      <div className="max-width text-color-white  ">
        <div className="logo">
          <div className="logo-inner">
            <a href="/">
              <div className="label-logo on-hover--40 text-color-white website-background-black"></div>
            </a>
          </div>
        </div>
        <p className="size-large">Hi, I`m Ievgen. I am software developer with need to add here more text below:</p>
        <p className="size-large">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="size-large">You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:</p>
        <div className="links size-large">
          <div className="links" data-aos="fade-up">
            <a href="/portfolio2.0/static/media/ID Resume.b038f8fa.pdf" rel="noopener noreferrer" target="_blank" className="on-hover-40 text-color-red">My resume (pdf 900kb)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
