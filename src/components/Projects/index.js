import '../../index.css'
import aact from '../../image/CTTI.svg'
import project1 from '../../image/project1.png'
import project2 from '../../image/project2.png'
import project3 from '../../image/project3.png'
import project4 from '../../image/project4.png'
import project5 from '../../image/project5.png'
import project6 from '../../image/project6.png'
import project7 from '../../image/project7.png'

function Projects() {
  return (
    <div>
      <h1 className="rotate f-lg">Projects</h1>
      <div className="website-background-black">
        <div className="max-width">
          <div className="logo">
            <div className="logo-inner">
              <a href="/portfolio">
                <div className="label-logo on-hover--40 text-color-white website-background-black"></div>
              </a>
            </div>
          </div>

          <div class="top-bottom-margin ">
            {/* <!-- Work --> */}
            <a
              href="https://aact.ctti-clinicaltrials.org/"
              rel="noreferrer"
              target="_blank"
            >
              <div class="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={aact}></img>
                  </div>
                  <div>
                    <h2 class="text-color-white">AACT</h2>
                    <h3 class="text-color-white">
                      Access to Aggregate Content of ClinicalTrials.gov
                    </h3>
                    <p class="size-small text-color-red">Ruby on Rails</p>
                    <p class="size-small text-color-white">
                      Was brought onto a team to do maintenance and upgrades for
                      AACT (Aggregate Analysis of Clinical Trials). AACT is the
                      product of a collaboration between the Clinical Trials
                      Transformation Initiative and the FDA. It's used by
                      researchers to monitor and investigate clinical trials.
                      Improved elements of the UI interface to allow better user
                      experience.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- Work --> */}
            <a
              href="https://ievgend2.github.io/mayla_co/#/mayla-co/home"
              rel="noreferrer"
              target="_blank"
            >
              <div class="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={project1} alt="E-Commerce App"></img>
                  </div>
                  <div>
                    <h2 class="text-color-white">E-Commerce App</h2>
                    <p class="size-small text-color-red">
                      React.js + Chrome Firebase
                    </p>
                    <p class="size-small text-color-white">
                      This application is a full cycle e-commerce platform,
                      which allows users to create an account / sign in or
                      continue as a guest, add items to the cart, watch your
                      cart update, input profile information, proceed with the
                      order and message the seller if needed.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- Work --> */}
            <a
              href="https://ievgend2.github.io/Tic-Tac-Toe/"
              rel="noreferrer"
              target="_blank"
            >
              <div class="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={project5} alt="Tic Tac Toe game"></img>
                  </div>
                  <div>
                    <h2 class="text-color-white">Tic Tac Toe</h2>
                    <p class="size-small text-color-red">
                      React.js + CSS3 + JavaScript
                    </p>
                    <p class="size-small text-color-white">
                      Play the classic Tic-Tac-Toe game.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* <!-- Work --> */}
            <a
              href="https://gift-it-practicum.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              {/* <a href="#maintenance" target="blank"> */}
              <div className="on-hover-40 hide-text-block work-block pb3">
                <h2 className="text-color-white">Gift It</h2>
                <p className="size-small text-color-red">Ruby on Rails</p>
                <p className="size-small text-color-white pb-3">
                  Platform GiftIt was developed during the Code The Dream
                  Internship.
                </p>
                <p className="size-small text-color-white">
                  Gift it was created to help those who aren't able to afford
                  study courses or supplemental study materials for exams such
                  as the Bar, MCAT, etc. We rely on the kindness of those who
                  are in a position to gift their previously used study
                  materials to others.
                </p>
              </div>
            </a>
            {/* <!-- Work --> */}

            {/* <!-- Work --> */}
            <a
              href="https://letmerentkayak.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={project2} alt="E-Commerce App"></img>
                  </div>
                  <div>
                    <h2 className="text-color-white">Kayak Rental App</h2>
                    <p className="size-small text-color-red">Ruby on Rails</p>
                    <p className="size-small text-color-white">
                      This application serving as a tool to allow people rent
                      kayaks at local lakes near the Research Triangle Park,
                      North Carolina.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- Work --> */}
            {/* <!-- Work --> */}
            <a
              href="https://ievgend2.github.io/student-enrollment-program/"
              rel="noreferrer"
              target="_blank"
            >
              <div class="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={project3} alt="Student Enrollment Program"></img>
                  </div>
                  <div>
                    <h2 class="text-color-white">Student Enrollment Program</h2>
                    <p class="size-small text-color-red">
                      HTML5 + CSS3 + JavaScript + Bootstrap
                    </p>
                    {/* <p class="size-small text-color-white">Description here</p> */}
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- Work --> */}
            <a
              href="https://ievgend2.github.io/forecast/"
              rel="noreferrer"
              target="_blank"
            >
              <div class="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={project4} alt="Weather Forecast"></img>
                  </div>
                  <div>
                    <h2 class="text-color-white">Weather Forecast</h2>
                    <p class="size-small text-color-red">
                      HTML5 + CSS3 + JavaScript
                    </p>
                    <p class="size-small text-color-white">
                      This is a simple weather app. Enter the name of the city
                      and will get all the information about the city's weather.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- Work --> */}
            <a
              href="https://ievgend2.github.io/battleship/"
              rel="noreferrer"
              target="_blank"
            >
              <div class="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={project6} alt="Battleship Game"></img>
                  </div>
                  <div>
                    <h2 class="text-color-white">Battleship Game</h2>
                    <p class="size-small text-color-red">
                      HTML5 + CSS3 + JavaScript
                    </p>
                    <p class="size-small text-color-white">
                      Play the classic Battleship game.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- Work --> */}
            <a
              href="https://ievgend2.github.io/solar-system/"
              rel="noreferrer"
              target="_blank"
            >
              <div class="on-hover-40 hide-text-block work-block pb3">
                <div className="d-flex">
                  <div className="d-flex align-items-center col-3">
                    <img src={project7} alt="Solar System"></img>
                  </div>
                  <div>
                    <h2 class="text-color-white">Solar System</h2>
                    <p class="size-small text-color-red">JavaScript Canvas</p>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- Work --> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
