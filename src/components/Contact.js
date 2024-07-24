import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="title">Contact</h1><br />
                  <div className="contact-content">
                    <p><strong>Phone:</strong> (623) 824-9138</p>
                    <p><strong>Email:</strong> <a href="mailto:jisungwoo9@gmail.com">jisungwoo9@gmail.com</a></p>
                    <p><strong>Website:</strong> <a href="https://www.jisungwoo.com" target="_blank" rel="noopener noreferrer">https://www.jisungwoo.com</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jisung-woo/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jisung-woo/</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/JisungWoo" target="_blank" rel="noopener noreferrer">https://github.com/JisungWoo</a></p>
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
