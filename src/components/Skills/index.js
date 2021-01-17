import icon from "../../image/firebase.png"

function Skills() {


  return (
    <div className="Skills">
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
        <div className="flex-row skill-bottom animation-left justify-content-end">
          <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-nodejs-plain colored"></i></div>Node.js</span>
          <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-mongodb-plain-wordmark colored"></i></div>MongoDB</span>

          <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-github-original colored"></i></div>Github</span>
          <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-bootstrap-plain colored"></i></div>Bootstrap</span>
          <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-heroku-original-wordmark colored"></i></div>Heroku</span>
          <span className="badge badge-shadow bg-light text-dark"><div><i className="devicon-devicon-plain-wordmark colored"></i></div>Devicon</span>
          <span className="badge badge-shadow bg-light text-dark"><div><i className="fa fa-free-code-camp indigo"></i></div>FFC</span>

        </div>
      </div>
    </div>
  );
}

export default Skills;

