import { Card } from 'react-bootstrap'
import icon from "../../image/firebase.png"
import cert1 from "../../image/certification1.png"
import cert2 from "../../image/certification2.png"
import cert3 from "../../image/certification3.png"


function SkillsPage() {
  return (
    <div className="text-center">
      <Certifications />
      <div className="inner" >
        <Skills /></div>
    </div>)
}

function Certifications() {
  return (
    <div>
      <div>
        <Card className="mx-auto certification col-7">
          <Card.Img src={cert3} className="text-center" alt='Certificate of Completion - Back End Development'></Card.Img>
        </Card>
      </div>
      <div>
        <Card className="mx-auto certification col-7"><a href="https://www.freecodecamp.org/certification/ievgend/javascript-algorithms-and-data-structures" rel="noopener noreferrer" target="_blank"  >
          <Card.Img src={cert2} className="text-center" alt='FreeCodeCamp Certification: Responsive Web Design'></Card.Img>
        </a></Card>
      </div>
      <div>
        <Card className="mx-auto certification col-7"><a href="https://www.freecodecamp.org/certification/ievgend/responsive-web-design" rel="noopener noreferrer" target="_blank"  >
          <Card.Img src={cert1} className="text-center" alt='FreeCodeCamp Certification: Responsive Web Design'></Card.Img>
        </a></Card>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <div>

      <div className="inner">
        <div className="d-flex">
          <div className="flex-row skill-top animation-right">
            <span className="badge badge-shadow bg-light text-dark "><div><i className="devicon-html5-plain-wordmark colored"></i></div>HTML5</span>
            <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-css3-plain-wordmark colored"></i></div>CSS3</span>
            <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-javascript-plain colored"></i></div>Javascript</span>
            <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-jquery-plain colored"></i></div>jQuery</span>
            <span className="badge badge-shadow bg-light text-dark"><div><img src={icon} alt="Firebase" className="icon" /></div>Firebase</span>
            <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-react-original-wordmark colored"></i></div>React.js</span>
            <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-nodejs-plain colored"></i></div>Express.js</span>
          </div>
        </div>
        <div className="inner">
          <div className="d-flex">
            <div className="flex-row skill-bottom animation-left justify-content-end">
              <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-nodejs-plain colored"></i></div>Node.js</span>
              <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-mongodb-plain-wordmark colored"></i></div>MongoDB</span>
              <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-github-original colored"></i></div>Github</span>
              <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-bootstrap-plain colored"></i></div>Bootstrap</span>
              <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-heroku-original-wordmark colored"></i></div>Heroku</span>
              <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-devicon-plain-wordmark colored"></i></div>Devicon</span>
              <span className="badge badge-shadow bg-light text-dark"><div><i className="fa fa-free-code-camp indigo"></i></div>FFC</span>
              <div className="full-width"></div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}


export default SkillsPage;

