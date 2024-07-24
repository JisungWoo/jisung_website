import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1 className="title">Experience</h1><br />
                  <div className="experience-content">
                    <h3>Data Engineer</h3>
                    <p>ASU Enterprise Partners, Tempe, AZ</p>
                    <p>March 2022 – July 2024</p>
                    <ul>
                      <li>Automated weekly and monthly manual data loading processes by establishing connectivity between SQL Server and Azure Blob Storage and employing SSIS and/or ADF to create and manage data loading jobs, achieving 100% elimination of human error.</li>
                      <li>Led a successful data migration of SSIS jobs, stored procedures, and packages to Azure Data Factory.</li>
                      <li>Developed and implemented data deduplication strategies, significantly improving data quality by eliminating hundreds of duplicates.</li>
                      <li>Designed and created stored procedures in SQL Server, to automate the scheduling of updates for Power BI dashboards, and to optimize table and attribute design to reduce reliance on DAX language when creating Power BI dashboards.</li>
                      <li>Organized jobs, packages, and their connections in SSIS and SQL Server to ensure seamless processes during updates.</li>
                      <li>Developed and implemented jobs in SQL Server and packages in SSIS to optimize and automate ETL/ELT processes.</li>
                      <li>Managed and integrated data from diverse sources into Data Warehouse and Salesforce through ETL/ELT and SQL technologies.</li>
                      <li>Conducted data transformations within the data warehouse and constructed tables for analytical reporting.</li>
                      <li>Developed new and managed existing integrations between SQL Server databases, Workday, Salesforce, and Power BI.</li><br />
                    </ul>

                    <h3>Technical Solution Analyst</h3>
                    <p>Oracle - Cerner Corporation, Kansas City, MO</p>
                    <p>February 2021 – March 2022</p>
                    <ul>
                      <li>Successfully troubleshot Order Management software, led investigations, and maintained a 90%+ highly satisfied client rating while efficiently meeting SLA (Service-Level Agreement) deadlines and managing a team with the highest queue size of 90 to 110 tickets.</li>
                      <li>Collaborated and analyzed complex issues across specialized teams in the organization.</li>
                      <li>Drove investigations of Java-based front-end applications using SQL, troubleshooting tools, and end-user shadowing.</li>
                      <li>Identified bad data in remote hosted databases through Oracle SQL-based proactive checks.</li>
                      <li>Investigated issues with Oracle SQL queries, server logs, and executed update statements while following safe change procedures.</li>
                      <li>Troubleshot technical issues, like code defects, software configurations, and user errors, working closely with development teams.</li>
                      <li>Provided 24/7 on-call support to resolve immediate priority issues impacting patient care and health information.</li>
                      <li>Consistently met and surpassed the set monthly goal of closing two tickets per day.</li><br />
                    </ul>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
