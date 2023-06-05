import "./App.css";
import Logo from "./assets/1.png";
import Imagen from "./assets/Banner.png";
import ImagenDos from "./assets/BannerDos.png";
import ImagenTres from "./assets/BannerTres.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="Logo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                style={{ color: "brown", fontSize: "40px" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#link"
                style={{ color: "brown", fontSize: "40px" }}
              >
                Contact
              </Nav.Link>
              <NavDropdown
                title="Project"
                id="basic-nav-dropdown"
                style={{ color: "black", fontSize: "40px" }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  style={{ color: "black", fontSize: "40px" }}
                >
                  Project Web
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  style={{ color: "black", fontSize: "40px" }}
                >
                  Project Mobile
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Section Banner */}
      <Carousel className="Carrousel">
        <Carousel.Item>
          <img className="d-block w-100" src={Imagen} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImagenDos} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImagenTres} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Section Banner */}

      {/* Section Budget */}
      <section className="sectionBudget">
        <Container className="contentPresupuestos">
          <h1>
            <span className="brownText" style={{ color: "brown" }}>
              Points to Consider for Your Budget
            </span>
          </h1>
          <h2>
            <span className="blackText">Get the Best Benefits</span>
          </h2>
        </Container>
        <Container className="contentPresupuesto">
          <h2>
            <span className="brownText" style={{ color: "brown" }}>
              SOFTWARE
            </span>
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
            <span className="brownText" style={{ color: "brown" }}>
              APPS
            </span>
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
