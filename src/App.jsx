import "./App.css";
import dosImage from "./assets/dos.png";
import Logo from "./assets/1.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Menu */}
      <Navbar bg="light" expand="lg" className="navContainer">
        <Container className="navbar-nav">
          <Navbar.Brand href="#home" className="navStyle">
            <img className="navLogo" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className="navStyle"
                style={{ color: "brown", fontSize: "40px" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="navStyle"
                style={{ color: "brown", fontSize: "40px" }}
              >
                Contact
              </Nav.Link>
              <NavDropdown
                title="Projects"
                id="basic-nav-dropdown"
                className="navStyless"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="navStyles"
                  style={{ color: "black", fontSize: "40px" }}
                >
                  Projects Web
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="navStyles"
                  style={{ color: "black", fontSize: "40px" }}
                >
                  Projects Mobile
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Menu */}

      {/* Section Banner */}
      <section className="sectionContainer">
        <Container className="container">
          <h1>
            <span className="brownTexts">TECHBUILD SOLUTIONS</span>
          </h1>
          <h2>
            <span className="blackTexts">Creating and Designing Software</span>
          </h2>
          <Container className="containerDos">
            <h2 className="h2Ceo">
              <a
                href="https://www.linkedin.com/in/eduardo-aguilar-91a658219/"
                className="blackText"
                target="_blank"
                rel="noopener noreferrer"
              >
                CEO: Aguilar Jesus Eduardo
              </a>
            </h2>
          </Container>
        </Container>
        <div className="divcontnet">
          <Container>
            <img className="imagen" src={dosImage} alt="" />
          </Container>
        </div>
      </section>
      {/* Section Banner */}

      {/* Section Budget */}
      <section className="sectionBudget">
        <Container className="contentPresupuestos">
          <h1>
            <span className="brownText">
              Points to Consider for Your Budget
            </span>
          </h1>
          <h2>
            <span className="blackText">Get the Best Benefits</span>
          </h2>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span className="brownText">SOFTWARE</span>
          </h2>
          <h4>
            <span className="blackText">
              Development of customized programs with the addition of new
              functions and maintenance.
            </span>
          </h4>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span className="brownText">APPS</span>
          </h2>
          <h4>
            <span className="blackText">
              Development of Android and Apple cross-platform apps with
              synchronized databases.
            </span>
          </h4>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span style={{ color: "brown" }}>E-COMMERCE </span>
          </h2>
          <h4>
            <span style={{ color: "black", textAlign: "justify" }}>
              Online store adapted to mobiles with security protocol,
              configuration of payments and shipments.
            </span>
          </h4>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span style={{ color: "brown" }}>WEBSITE </span>
          </h2>
          <h4>
            <span style={{ color: "black", textAlign: "justify" }}>
              Domain registration, hosting administration and design adapted to
              cell phones.
            </span>
          </h4>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span style={{ color: "brown" }}>CHAT BOT </span>
          </h2>
          <h4>
            <span style={{ color: "black", textAlign: "justify" }}>
              Installation and configuration with 24-hour customer service.
              Technical support.
            </span>
          </h4>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span style={{ color: "brown" }}>AD NETWORKS </span>
          </h2>
          <h4>
            <span style={{ color: "black", textAlign: "justify" }}>
              Integrated campaigns in Social Networks. Facebook and Instagram
              with WhatsApp Business.
            </span>
          </h4>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span style={{ color: "brown" }}>SEO AGENCY </span>
          </h2>
          <h4>
            <span style={{ color: "black", textAlign: "justify" }}>
              Evaluation of profitable keywords with work plan and monthly
              report. Lasting results.
            </span>
          </h4>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span style={{ color: "brown" }}>GOOGLE ADDS </span>
          </h2>
          <h4>
            <span style={{ color: "black", textAlign: "justify" }}>
              Professional advertising campaigns with segmented audience and
              daily optimization. Monthly report.
            </span>
          </h4>
        </Container>
      </section>
      {/* Section Budget */}
    </>
  );
}

export default App;
