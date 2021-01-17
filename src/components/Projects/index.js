import { Card, Button, CardDeck } from 'react-bootstrap'
import img1 from "../../image/project1.png"
import img3 from "../../image/project3.png"


function Projects() {
  return (
    <div className="">
      <h1 className="text-center mb-5">Recent Projects</h1>
      <CardDeck className="g-2 ">


        <Card className="text-center card-shadow col-4" >
          <Card.Body >
            <h5 className="card-header">E-Commerce Store Build with MERN Stack: MongoDB and Mongoose + Express + Node.js + React.js</h5>

            <Card.Img variant="top" src={img1} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
            </Card.Text>

          </Card.Body>
          <div class="card-footer"> <div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/mayla_co.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/mayla_co/#/mayla-co/home" target="_blank" className="btn btn-dark" >Shop Now!</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow col-4" >
          <Card.Body >
            <h5 className="card-header">E-Commerce Store Build with MERN Stack: MongoDB and Mongoose + Express + Node.js + React.js</h5>

            <Card.Img variant="top" src={img1} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
            </Card.Text>

          </Card.Body>
          <div class="card-footer"> <div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/MERN.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/mayla_co/#/mayla-co/home" target="_blank" className="btn btn-dark" >Shop Now!</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow col-4" >
          <Card.Body >
            <h5 className="card-header">Student Enrollment Program Built with: HTML5 + CSS3 + JavaScript + Bootstrap</h5>

            <Card.Img variant="top" src={img3} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
              <h5></h5>
            </Card.Text>

          </Card.Body>
          <div class="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/MERN.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/mayla_co/#/mayla-co/home" target="_blank" className="btn btn-dark" >Shop Now!</a>
          </div></div>
        </Card>



      </CardDeck>
    </div>
  );
}

export default Projects;
