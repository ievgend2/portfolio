import React from "react";
function MainPage() {
  return <MainContent />;
}

function MainContent() {
  return (
    <div>
      <div className="hide-mobile mobile-tap-area">
        <div className="max-width">
          <div className="vertical-center">
            <h1>
              <div className="text-color-white hide-text-block">
                <div className="animate toggle-mobile-first" style={{ display: "block" }}>Hello.</div>
              </div>
              <div className="text-color-red hide-text-block">
                <div className="animate delay04 toggle-mobile-first" style={{ display: "block" }}>I am</div>
              </div>
              <div className="text-color-red hide-text-block">
                <div className="animate delay08 toggle-mobile-first" style={{ display: "block" }}>Ievgen</div>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="tap-indication">Tap anywhere</div>
      <div className="vertical-center">
        <h1 >
          <div className="hide-text-block ">
            <a href="#about">
              <div className="animate text-color-white on-hover-40 hide-web label-hello "></div>
              <div className="animate text-color-white on-hover-40 hide-mobile toggle-mobile-second">About</div>
            </a>
          </div>
          <div className="hide-text-block">
            <a href="#projects">
              <div className="animate text-color-red on-hover-40 delay04 hide-web label-iam "></div>
              <div className="animate text-color-red on-hover-40 delay04 hide-mobile toggle-mobile-second">Projects</div>
            </a>
          </div>
          <div className="hide-text-block">
            <a href="#contact">
              <div className="animate text-color-red on-hover-40 delay08 hide-web label-ievgen "></div>
              <div class="animate text-color-red on-hover-40 delay08 hide-mobile toggle-mobile-second">Contact</div>
            </a>
          </div>
        </h1>

      </div>

      <div className="bg-photo"></div>

    </div>
  );
}
export default MainPage;
