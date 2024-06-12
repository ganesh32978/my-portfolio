import React from "react";
import {
  FaLinkedin,
  FaYoutubeSquare,
  FaBehanceSquare,
  FaGithubSquare,
  FaFileDownload,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import {
  ProfessionalHeadshot,
  FallbackProfessionalHeadshot,
  HomeBackground,
  
} from "../../assets";

import styles from "./Home.module.css";
const Home = () => {
  const openPdfInNewTab = () => {
    const pdfUrl = './resume.pdf'; 
    window.open(pdfUrl, '_blank');
  };
  return (
    <Container
      fluid
      className={styles.container}
      style={{ background: `url(${HomeBackground})` }}
    >
      <Row>
        <ImageHolder
          primarySource={ProfessionalHeadshot}
          secondarySource={ ProfessionalHeadshot}
          alt="Professional Headshot of Ganesh Manikanta Sanchi"
          className={styles.professionalHeadshot}
        />
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingOne}`}>
           Ganesh Manikanta Sanchi
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingThree}`}>
            Software Engineer experienced in Frontend Developer 
               
          </span>
          <Row>
        <Col>
          {/* <span className={`${styles.textWhite} ${styles.headingThree}`}>
            <strong>Overview</strong>
          </span> */}
          <p className={`${styles.textWhite} ${styles.paragraph}`}>
            My experience as a Frontend Developer with a solid background in software engineering is showcased in my portfolio. It demonstrates my ability to create web applications that are clear, easy to use, and effective. With a React.js specialty, my areas of interest are creating reusable components, creating dynamic user interfaces, and guaranteeing smooth user experiences. With the help of my portfolio, prospective employers can get in touch with me for positions like front-end developer and UI/UX developer. Links to my project repositories are provided, allowing interested parties to examine the codebase and documentation and see my commitment to excellence and creativity in front-end development.
          </p>
        </Col>
      </Row>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://www.linkedin.com/in/ganesh-manikanta-46b3131a5/" target="_blank_">
            <FaLinkedin className={styles.icon} />
          </a>
        </Col>
        <Col>
          <a href="https://github.com/ganesh32978" target="_blank_"> 
            <FaGithubSquare className={styles.icon} />
          </a>
        </Col>
        {/* <Col>
          <a href="https://www.behance.net/AVS1508" target="_blank_">
            <FaBehanceSquare className={styles.icon} />
          </a>
        </Col> */}
        <Col>
          <a
            href="https://www.youtube.com/channel/UCHvqfbKQ0DIO9uT5Ay1avbw"
            target="_blank_"
          >
            <FaYoutubeSquare className={styles.icon} />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
        <ProfileButton
            logo={<FaFileDownload className={styles.iconSmall} />}
            // href="./resume.html"
          >
            <button style={{backgroundColor: 'black',color: 'white'}}onClick={openPdfInNewTab}>Résumé</button>
          </ProfileButton>
        </Col>
      </Row>
      <Row>
        {/* <Col>
          <p className={`${styles.textWhite} ${styles.paragraph}`}>
            Share this profile: <a href="https://Ganesh Manikanta portfolio.com" target="_blank" rel="noopener noreferrer">https://Ganesh Manikanta portfolio.com</a>
          </p>
        </Col> */}
      </Row>
      {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={CICSLogo} logoAlt="University of Massachusetts Amherst"> Undergraduate Course Assistant at Manning CICS </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Tech + Design Member at HackUMass Organizing Team </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Software Developer at HackUMass Organizing Team </ProfileCard>
            </Row> */}
           
    </Container>
  );
};

export default Home;
