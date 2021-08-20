import { Card, CardDeck } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import img1 from "../../image/project1.png"
import img3 from "../../image/project3.png"
import img4 from "../../image/project4.png"
import img5 from "../../image/project5.png"
import img6 from "../../image/project6.png"
import img7 from "../../image/project7.png"
import "../../index.css"

import * as ROUTES from '../../constants/routes';



function Projects() {
  return (<div>
    <h1 className="rotate f-lg">Recent Projects</h1>
    <div className="website-background-black">

<div class="max-width">	

	<div class="logo">
		<div class="logo-inner">
			<a href="/">
				<div class="label-logo on-hover--40 text-color-white"></div>
			</a>
		</div>
	</div>
  
	<div class="top-bottom-margin animate">	
  	{/* <!-- Work --> */}
		<a href="#https://ievgend2.github.io/mayla_co/#/mayla-co/signin" target="blank" >
			<div class="on-hover-40 hide-text-block work-block pb3">
				<h2 class="text-color-white">Gift It</h2>
				<p class="size-small text-color-red f-md">Ruby on Rails</p>
			</div>
		</a>
		{/* <!-- Work --> */}

  	{/* <!-- Work --> */}
		<a href="#https://ievgend2.github.io/mayla_co/#/mayla-co/signin" target="blank">
			<div class="on-hover-40 hide-text-block work-block pb3">
				<h2 class="text-color-white">Kayak Rental App</h2>
				<p class="size-small text-color-red">Ruby on Rails</p>
			</div>
		</a>
		{/* <!-- Work --> */}

		{/* <!-- Work --> */}
		<a href="#https://ievgend2.github.io/mayla_co/#/mayla-co/signin" target="blank">
			<div class="on-hover-40 hide-text-block work-block pb3">
				<h2 class="text-color-white">E-Commerce App</h2>
				<p class="size-small text-color-red">React.js + Chrome Firebase</p>
			</div>
		</a>
		{/* <!-- Work --> */}
	

	</div>
</div>
</div>




      {/* <CardDeck className="">
        <Card className="text-center card-shadow  ">
          <Card.Body >
            <h5 className="card-header">E-Commerce Store<br />React.js + Chrome Firebase</h5>

            <a href="https://ievgend2.github.io/mayla_co/#/mayla-co/home" rel="noreferrer" target="_blank"  ><Card.Img variant="top" src={img1} className="prj-img" /></a>
            <Card.Title><span>{ }</span></Card.Title>


          </Card.Body>
          <div className="card-footer"> <div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/mayla_co.git" rel="noreferrer" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/mayla_co/#/mayla-co/home" rel="noreferrer" target="_blank" className="btn btn-dark" >Shop Now!</a>
          </div></div>
        </Card> */}

        {/* <Card className="text-center card-shadow " >
          <Card.Body >
            <h5 className="card-header">E-Commerce Store <br />MERN Stack: MongoDB and Mongoose + Express + Node.js + React.js</h5>

            <NavLink to={ROUTES.MAINTENANCE}><Card.Img variant="top" src={img1} className="prj-img" /></NavLink>
            <Card.Title><span>{ }</span></Card.Title>


          </Card.Body>
          <div className="card-footer"> <div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/MERN.git" rel="noreferrer" target="_blank" className="btn btn-dark" >Git Repo</a>
            <NavLink className="btn btn-dark" to={ROUTES.MAINTENANCE}>Shop Now!</NavLink>
          </div></div>
        </Card> */}

        {/* <Card className="text-center card-shadow " >
          <Card.Body >
            <h5 className="card-header">Tic Tac Toe Game<br />React.js + CSS3 + JavaScript</h5>
            <a href="https://ievgend2.github.io/Tic-Tac-Toe/" rel="noreferrer" target="_blank"><Card.Img variant="top" src={img5} className="prj-img" /></a>
            <Card.Title><span>{ }</span></Card.Title>

          </Card.Body>
          <div className="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/Tic-Tac-Toe.git" rel="noreferrer" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/Tic-Tac-Toe/" rel="noreferrer" target="_blank" className="btn btn-dark" >Play Now</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow " >
          <Card.Body >
            <h5 className="card-header">Student Enrollment Program<br />HTML5 + CSS3 + JavaScript + Bootstrap</h5>

            <a href="https://ievgend2.github.io/student-enrollment-program/" rel="noreferrer" target="_blank" ><Card.Img variant="top" src={img3} className="prj-img" /></a>
            <Card.Title><span>{ }</span></Card.Title>

          </Card.Body>
          <div className="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/student-enrollment-program.git" rel="noreferrer" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/student-enrollment-program/" rel="noreferrer" target="_blank" className="btn btn-dark" >Try Now!</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow " >
          <Card.Body >
            <h5 className="card-header">Weather forecast <br />HTML5 + CSS3 + JavaScript</h5>
            <a href="https://ievgend2.github.io/forecast/" rel="noreferrer" target="_blank"><Card.Img variant="top" src={img4} className="prj-img" /></a>
            <Card.Title><span>{ }</span></Card.Title>

          </Card.Body>
          <div className="card-footer"><div className="d-flex justify-content-around">
            <a href="https://github.com/ievgend2/forecast.git" rel="noreferrer" target="_blank" className="btn btn-dark" >Git Repo</a>
            <a href="https://ievgend2.github.io/forecast/" rel="noreferrer" target="_blank" className="btn btn-dark" >Check weather</a>
          </div></div>
        </Card>

        <Card className="text-center card-shadow " >
          <Card.Body >
            <h5 className="card-header">Battleship Game <br />HTML5 + CSS3 + JavaScript</h5>
            <a href="https://ievgend2.github.io/battleship/" rel="noreferrer" target="_blank"><Card.Img variant="top" src={img6} className="prj-img" /></a>
            <Card.Title><span>{ }</span></Card.Title>

          </Card.Body>
          <div className="card-footer">
            <div className="d-flex justify-content-around">
              <a href="https://github.com/ievgend2/battleship.git" rel="noreferrer" target="_blank" className="btn btn-dark" >Git Repo</a>
              <a href="https://ievgend2.github.io/battleship/" rel="noreferrer" target="_blank" className="btn btn-dark" >Play Now</a>
            </div>
          </div>
        </Card>

        <Card className="text-center card-shadow "  >
          <Card.Body >
            <h5 className="card-header">Solar System <br />JavaScript Canvas</h5>
            <a href="https://ievgend2.github.io/solar-system/" rel="noreferrer" target="_blank"><Card.Img variant="top" src={img7} className="prj-img" /></a>
            <Card.Title><span>{ }</span></Card.Title>

          </Card.Body>
          <div className="card-footer">
            <div className="d-flex justify-content-around">
              <a href="https://github.com/ievgend2/solar-system" rel="noreferrer" target="_blank" className="btn btn-dark" >Git Repo</a>
              <a href="https://ievgend2.github.io/solar-system/" rel="noreferrer" target="_blank" className="btn btn-dark" >Play Now</a>
            </div>
          </div>
        </Card>

      </CardDeck> */}
    </div>
  );
}

export default Projects;
