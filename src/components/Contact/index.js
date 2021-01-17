import icon from "../../image/firebase.png"

function Contact() {


  return (
    <div className="">

      <h5 className="mt-5"> Thank you for your time in reviewing my portfolio.<br /> Feel free to review my social media profiles or contact me regarding new opportunities by clicking on the icon below:</h5>
      <div style={{ fontSize: '2rem' }}>
        <a href="mailto:ievgendotsenko@gmail.com" target="_blank"><i className="fa fa-envelope ml-4 indigo"></i></a>
        <a href="https://t.me/ievgend" target="_blank"><i className="fa fa-telegram ml-4 indigo"></i></a>
        <a href="https://github.com/ievgend2" target="_blank"><i className="devicon-github-original colored ml-4"></i></a>
        <a href="https://www.linkedin.com/in/idotsenko/" target="_blank"><i className="devicon-linkedin-plain ml-4 indigo"></i></a>
        <a href="https://www.freecodecamp.org/ievgend" target="_blank"><i className="fa fa-free-code-camp ml-4 indigo"></i></a>
      </div>
    </div>
  );
}

export default Contact;
