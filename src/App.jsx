import "./App.css";
import Container from "react-bootstrap/Container";
import Logo from "./assets/1.png";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Section Banner */}
      <section className="sectionContainer">
        <Container className="container">
          <img className="navLogo" src={Logo} alt="" />
          <h1>
            <span className="brownTexts">TECHBUILD SOLUTIONS</span>
          </h1>
          <h2>
            <span className="blackTexts">Creating and Designing Software</span>
          </h2>
          <h2>
            <span className="blackTextss">CEO: Aguilar Jesus Eduardo </span>
          </h2>
        </Container>
        <Container className="divcontnet">
          <div></div>
        </Container>
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
