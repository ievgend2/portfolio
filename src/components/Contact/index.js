function Contact() {
  return (
    <div className="top-bottom-margin website-background-black">
      <h1 className="rotate f-lg">Contact</h1>
      <div className="max-width text-color-white">
        <div className="logo">
          <div className="logo-inner">
            <a href="/portfolio">
              <div className="label-logo on-hover--40 text-color-white website-background-black"></div>
            </a>
          </div>
        </div>
        <p className="size-large">
          I'm seeking out opportunities to collaborate with companies / agencies
          / individuals, not just work for them. I want to bring my development
          experience to the table where we can work together to solve real
          business-problems in a way that optimizes all of our respective
          experience and knowledge.
        </p>
        <p className="size-large">
          {' '}
          Feel free to check my social media profiles or reach me out by
          clicking on the links below:
        </p>
        <div className="links size-large">
          <a
            href="mailto:ievgendotsenko@gmail.com"
            className="on-hover-40 text-color-red "
          >
            ievgendotsenko@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/idotsenko/"
            rel="noreferrer"
            target="_blank"
            className="on-hover-40 text-color-red "
          >
            Linkedin
          </a>
          <a
            href="https://github.com/ievgend2"
            rel="noreferrer"
            target="_blank"
            className="on-hover-40 text-color-red "
          >
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
