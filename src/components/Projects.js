import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="title">Projects</h1><br />
                  <div className="projects-content">
                  <h3>React Personal Portfolio</h3>
                    <p>Independent Project (GitHub), Tempe, AZ</p>
                    <p>July 2024 – Current</p>
                    <ul>
                      <li>Designed and developed a portfolio website using React, incorporating HTML, CSS, and JavaScript to create a dynamic and visually appealing online presence.</li>
                      <li>Create and modify the project using Generative AI (ChatGPT).</li>
                      <li>Published the portfolio website to the public using github, accessible at <a href="https://jisungwoo.github.io/jisung_website/" target="_blank" rel="noopener noreferrer">https://jisungwoo.github.io/jisung_website/</a>.</li>
                      <li>Special thanks to YouTube Channel "webdecoded" for great tutorial and providing html, css, and javascript code to work with.</li><br /><br />
                    </ul>
                    <h3>Website Development – Leader</h3>
                    <p>ASU – Korean Student Association, Tempe, AZ</p>
                    <p>September 2020 – March 2021</p>
                    <ul>
                      <li>Co-led a team of seven to successfully develop a website for the Korean Student Association.</li>
                      <li>Trained team members in programming languages, including HTML, CSS, JavaScript, and GitHub.</li>
                      <li>Led and managed the front-end of the development.</li><br /><br />
                    </ul>
                    
                    <h3>Business Database Systems Milestone</h3>
                    <p>September 2019 – December 2019</p>
                    <ul>
                      <li>Led team of three in agile-based SQL database development for an imaginary client, encompassing ERD creation, data dictionary setup, schema design, and SQL table creation using MySQL.</li>
                      <li>Overcame unexpected challenges, including an initial team member loss, for a successful project completion.</li>
                      <li>Create and modify the project using Generative AI (ChatGPT and Gemini).</li>
                    </ul>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
