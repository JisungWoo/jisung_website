
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import './Skills.css';  // Import the CSS file for styling

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="title">Skills</h1><br />
                  <div className="skills-content">
                    <div className="skills-category">
                      <h5>Programming Languages</h5>
                      <ul className="skills-list">
                        <li>SQL, Oracle SQL, MySQL, Python, HTML, CSS, JavaScript, Java, Linux, MATLAB</li>
                      </ul>
                    </div>
                    <div className="skills-category">
                      <h5>Programming Tools</h5>
                      <ul className="skills-list">
                        <li>SQL Server, SSIS, Salesforce, ADF, Power BI, MySQL, Azure, Microsoft Excel, GitHub, React</li>
                      </ul>
                    </div>
                    <div className="skills-category">
                      <h5>Technical Skills</h5>
                      <ul className="skills-list">
                        <li>Data Automation, Data Mining, Data Modeling, Data Warehousing, ETL/ELT, CI/CD, Data Visualization</li>
                      </ul>
                    </div>
                    <div className="skills-category">
                      <h5>Languages</h5>
                      <ul className="skills-list">
                        <li>English (Advanced Proficiency), Korean (Advanced Proficiency)</li><br /><br />
                      </ul>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt="Background Decoration" /> */}
    </section>
  );
};
