import "../../index.css"



function Projects() {
  return (<div>
    <h1 className="rotate f-lg">Projects</h1>
    <div className="website-background-black">
      <div class="max-width">
        <div class="logo">
          <div class="logo-inner">
            <a href="/portfolio2.0">
              <div class="label-logo on-hover--40 text-color-white website-background-black"></div>
            </a>
          </div>
        </div>

        <div class="top-bottom-margin ">
          {/* <!-- Work --> */}
          <a href="#maintenance" rel="noreferrer" target="_blank" >
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">Gift It</h2>
              <p class="size-small text-color-red">Ruby on Rails</p>
              <p class="size-small text-color-white pb-3">Platform GiftIt was developed during the Code The Dream Internship where i have current internship. </p>
              <p class="size-small text-color-white">Gift it was created to help those who aren't able to afford study courses or supplemental study materials for exams such as the Bar, MCAT, etc. We rely on the kindness of those who are in a position to gift their previously used study materials to others.</p>
            </div>
          </a>
          {/* <!-- Work --> */}

          {/* <!-- Work --> */}
          <a href="#maintenance" target="blank">
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">Kayak Rental App</h2>
              <p class="size-small text-color-red">Ruby on Rails</p>
              <p class="size-small text-color-white">This application serving as a tool to allow people rent kayaks at local lakes  near Research Triangle Park, North Carolina.</p>
            </div>
          </a>
          {/* <!-- Work --> */}

          {/* <!-- Work --> */}
          <a href="https://ievgend2.github.io/mayla_co/#/mayla-co/home" rel="noreferrer" target="_blank" >
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">E-Commerce App</h2>
              <p class="size-small text-color-red">React.js + Chrome Firebase</p>
              <p class="size-small text-color-white">This application is a full cycle e-commerce platform, which allows users to create an account / sign in or continue as a guest, add items to the cart, watch your cart update, input profile information, proceed with the order and message the seller if needed. </p>
            </div>
          </a>
          {/* <!-- Work --> */}
          <a href="https://ievgend2.github.io/Tic-Tac-Toe/" rel="noreferrer" target="_blank" >
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">Tic Tac Toe</h2>
              <p class="size-small text-color-red">React.js + CSS3 + JavaScript</p>
              <p class="size-small text-color-white">Description here</p>
            </div>
          </a>
          {/* <!-- Work --> */}
          <a href="https://ievgend2.github.io/student-enrollment-program/" rel="noreferrer" target="_blank" >
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">Student Enrollment Program</h2>
              <p class="size-small text-color-red">HTML5 + CSS3 + JavaScript + Bootstrap</p>
              {/* <p class="size-small text-color-white">Description here</p> */}
            </div>
          </a>
          {/* <!-- Work --> */}
          <a href="https://ievgend2.github.io/forecast/" rel="noreferrer" target="_blank" >
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">Weather Forecast</h2>
              <p class="size-small text-color-red">HTML5 + CSS3 + JavaScript</p>
              {/* <p class="size-small text-color-white">Description here</p> */}
            </div>
          </a>
          {/* <!-- Work --> */}
          <a href="https://ievgend2.github.io/forecast/" rel="noreferrer" target="_blank" >
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">Battleship Game</h2>
              <p class="size-small text-color-red">HTML5 + CSS3 + JavaScript</p>
              {/* <p class="size-small text-color-white">Description here</p> */}
            </div>
          </a>
          {/* <!-- Work --> */}
          <a href="https://ievgend2.github.io/solar-system/" rel="noreferrer" target="_blank" >
            <div class="on-hover-40 hide-text-block work-block pb3">
              <h2 class="text-color-white">Solar System
              </h2>
              <p class="size-small text-color-red">JavaScript Canvas</p>
              {/* <p class="size-small text-color-white">Code the Dream Bootcamp Acceptance project</p> */}
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
