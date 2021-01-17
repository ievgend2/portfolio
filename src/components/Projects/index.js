import { Card, CardDeck } from 'react-bootstrap'
import img1 from "../../image/project1.png"
import img3 from "../../image/project3.png"
import img4 from "../../image/project4.png"
import img5 from "../../image/project5.png"
import img6 from "../../image/project6.png"
import "../../index.css"


function Projects() {
  return (
    <div className="">
      <h1 className="text-center mb-5">Recent Projects</h1>

      <CardDeck className="">
        <Card className="text-center card-shadow  col-sm-6">
          <Card.Body >
            <h5 className="card-header">E-Commerce Store<br />React.js + Chrome Firebase</h5>

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

        <Card className="text-center card-shadow col-sm-6" >
          <Card.Body >
            <h5 className="card-header">E-Commerce Store <br />MERN Stack: MongoDB and Mongoose + Express + Node.js + React.js</h5>

            <Card.Img variant="top" src={img1} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
            </Card.Text>

          </Card.Body>
          <div class="card-footer"> <div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/MERN.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="#" target="_blank" className="btn btn-dark" >Shop Now!</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow col-sm-6" >
          <Card.Body >
            <h5 className="card-header">Tic Tac Toe Game<br />React.js + CSS3 + JavaScript</h5>
            <Card.Img variant="top" src={img5} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
              <h5></h5>
            </Card.Text>
          </Card.Body>
          <div class="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/Tic-Tac-Toe.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/Tic-Tac-Toe/" target="_blank" className="btn btn-dark" >Play Now</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow col-sm-6" >
          <Card.Body >
            <h5 className="card-header">Student Enrollment Program<br />HTML5 + CSS3 + JavaScript + Bootstrap</h5>

            <Card.Img variant="top" src={img3} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
              <h5></h5>
            </Card.Text>
          </Card.Body>
          <div class="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/student-enrollment-program.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/student-enrollment-program/" target="_blank" className="btn btn-dark" >Try Now!</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow col-sm-6" >
          <Card.Body >
            <h5 className="card-header">Weather forecast <br />HTML5 + CSS3 + JavaScript</h5>
            <Card.Img variant="top" src={img4} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
              <h5></h5>
            </Card.Text>
          </Card.Body>
          <div class="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/forecast.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/forecast/" target="_blank" className="btn btn-dark" >Check weather</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow col-sm-6" >
          <Card.Body >
            <h5 className="card-header">Battleship Game <br />HTML5 + CSS3 + JavaScript</h5>
            <Card.Img variant="top" src={img6} className="prj-img" />
            <Card.Title><span>{ }</span></Card.Title>
            <Card.Text>
              <h5></h5>
              <h5></h5>
            </Card.Text>
          </Card.Body>
          <div class="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/battleship.git" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/battleship/" target="_blank" className="btn btn-dark" >Play Now</a>
          </div></div>
        </Card>

      </CardDeck>
    </div>
  );
}

export default Projects;
