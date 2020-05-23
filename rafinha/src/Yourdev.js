import React from "react";

const Yourdev = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#myPage">
              <em>
                Your<strong>/dev</strong>
              </em>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about">Como funciona</a>
              </li>
              <li>
                <a href="#services">Diferenciais</a>
              </li>
              <li>
                <a href="#portfolio">Planos</a>
              </li>
              <li>
                <a href="#pricing">FAQ</a>
              </li>
              <li>
                <a className="contato-btn" href="#contact">
                  CONTATO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="jumbotron text-center">
        <h1>
          Do design <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ao código
        </h1>
        <p>
          Desenvolvemos o melhor <strong>hoje</strong>. <br />
          para o seu <strong>amanhã</strong>.
        </p>
      </div>

      {/*<div className="input-group"></div>*/}

      {/*Container (About Section) */}
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <h2>Como Funciona</h2>
            <br />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <br />
            <button className="btn btn-default btn-lg">Get in Touch</button>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo "></span>
          </div>
          <div className="col-sm-8">
            <h2>Our Values</h2>
            <br />
            <h4>
              <strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </h4>
            <br />
            <p>
              <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/*Container (Services Section) */}
      <div id="services" className="container-fluid text-center">
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <br />
        <div className="row ">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-off logol"></span>
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-heart logo"></span>
            <h4>LOVE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-lock logo"></span>
            <h4>JOB DONE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
        <br />
        <br />
        <div className="row ">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-leaf logo"></span>
            <h4>GREEN</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-certificate logo"></span>
            <h4>CERTIFIED</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-wrench logo"></span>
            <h4>HARD WORK</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>

      {/*Container (Portfolio Section) */}
      <div id="portfolio" className="container-fluid text-center bg-grey">
        <h2>Portfolio</h2>
        <br />
        <h4>What we have created</h4>
        <div className="row text-center ">
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src="paris.jpg" alt="Paris" width="400" height="300" />
              <p>
                <strong>Paris</strong>
              </p>
              <p>Yes, we built Paris</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src="newyork.jpg" alt="New York" width="400" height="300" />
              <p>
                <strong>New York</strong>
              </p>
              <p>We built New York</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img
                src="sanfran.jpg"
                alt="San Francisco"
                width="400"
                height="300"
              />
              <p>
                <strong>San Francisco</strong>
              </p>
              <p>Yes, San Fran is ours</p>
            </div>
          </div>
        </div>
        <br />

        <h2>What our customers say</h2>
        <div
          id="myCarousel"
          className="carousel slide text-center"
          data-ride="carousel"
        >
          {/*Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          {/*Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <h4>
                'This company is the best. I am so happy with the result!'
                <br />
                <span>Michael Roe, Vice President, Comment Box</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                'One word... WOW!!'
                <br />
                <span>John Doe, Salesman, Rep Inc</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                'Could I... BE any more happy with this company?'
                <br />
                <span>Chandler Bing, Actor, FriendsAlot</span>
              </h4>
            </div>
          </div>

          {/*Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/*Container (Pricing Section) */}
      <div id="pricing" className="container-fluid">
        <div className="text-center">
          <h2>Pricing</h2>
          <h4>Choose a payment plan that works for you</h4>
        </div>
        <div className="row ">
          <div className="col-sm-4 col-xs-12">
            <div className="panel panel-default text-center">
              <div className="panel-heading">
                <h1>Basic</h1>
              </div>
              <div className="panel-body">
                <p>
                  <strong>20</strong> Lorem
                </p>
                <p>
                  <strong>15</strong> Ipsum
                </p>
                <p>
                  <strong>5</strong> Dolor
                </p>
                <p>
                  <strong>2</strong> Sit
                </p>
                <p>
                  <strong>Endless</strong> Amet
                </p>
              </div>
              <div className="panel-footer">
                <h3>$19</h3>
                <h4>per month</h4>
                <button className="btn btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="panel panel-default text-center">
              <div className="panel-heading">
                <h1>Pro</h1>
              </div>
              <div className="panel-body">
                <p>
                  <strong>50</strong> Lorem
                </p>
                <p>
                  <strong>25</strong> Ipsum
                </p>
                <p>
                  <strong>10</strong> Dolor
                </p>
                <p>
                  <strong>5</strong> Sit
                </p>
                <p>
                  <strong>Endless</strong> Amet
                </p>
              </div>
              <div className="panel-footer">
                <h3>$29</h3>
                <h4>per month</h4>
                <button className="btn btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="panel panel-default text-center">
              <div className="panel-heading">
                <h1>Premium</h1>
              </div>
              <div className="panel-body">
                <p>
                  <strong>100</strong> Lorem
                </p>
                <p>
                  <strong>50</strong> Ipsum
                </p>
                <p>
                  <strong>25</strong> Dolor
                </p>
                <p>
                  <strong>10</strong> Sit
                </p>
                <p>
                  <strong>Endless</strong> Amet
                </p>
              </div>
              <div className="panel-footer">
                <h3>$49</h3>
                <h4>per month</h4>
                <button className="btn btn-lg">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid text-center">
        <a href="#myPage" title="To Top">
          <span className="glyphicon glyphicon-chevron-up"></span>
        </a>
        <p>
          Dev TEAM{" "}
          <a href="https://www.DevsCrescere.com" title="Visit Devscrescere">
            www.Devscrescere.com
          </a>
        </p>
      </footer>
    </div>
  );
};
export default Yourdev;
