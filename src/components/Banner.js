import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { ArrowRightCircle } from 'react-bootstrap-icons'; 
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "a Data Engineer", "a SQL Data Developer", "a Data Scientist" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  
  return (
    <section className="banner" id="AboutMe">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Jisung and I am`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "a Data Engineer", "a SQL Data Developer", "a Data Scientist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>A self-driven problem-solver and team player, experienced and innovative Data Engineer with a strong background in IT and data integration in fast-paced environments. Currently, I manage and integrate data from various sources into a Data Warehouse, utilizing ETL tools such as SSIS to ensure data accuracy, completeness, and timeliness. I also handle data migration from SQL Server to Azure Data Factory, facilitating the transition to cloud-based databases. <br /><br />
                  I excel in data automation, data mining, data modeling, and data warehousing, employing ETL/ELT processes to optimize data accessibility for business decisions, processes, and reporting. Additionally, I implement CI/CD pipelines to enhance data engineering workflows and create data visualizations to support analytical insights.<br /><br />
                  I design and create stored procedures in SQL Server, to automate the scheduling of updates for Power BI dashboards, and to optimize table and attribute design to reduce reliance on DAX language when creating Power BI dashboards<br /><br />
                  As a self-driven problem-solver and team player, I am committed to continuous skill development and growth as a Data Engineer. Fluent in English and Korean, I bring strong communication skills and a collaborative approach to every project.</p>
                  {/* <a href="/JisungWoo_Resume.pdf" download>
                    <button onClick={() => console.log('resume')}>My Resume<ArrowRightCircle size={25} /></button>
                  </a> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
