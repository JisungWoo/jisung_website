import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="title">Education</h1><br />
                  <div className="education-content">
                    <h3>W. P. Carey School of Business at Arizona State University</h3>
                    <h4>Master of Science, Business Analytics</h4>
                    <p>August 2023 – December 2024</p>
                    <p>Tempe, AZ</p><br />
                    
                    <h3>Arizona State University</h3>
                    <h4>Bachelor of Science, Computer Information Systems</h4>
                    <p>August 2016 – December 2020</p>
                    <p>Tempe, AZ</p><br />
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={color-sharp2.png} alt="Background Decoration" /> */}
    </section>
  )
}
