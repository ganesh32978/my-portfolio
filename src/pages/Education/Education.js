import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header"; // Adjust path if necessary
import EducationCard from "../../components/EducationCard/EducationCard"; // Adjust path if necessary
import educationData from "../../data/Education.json"; // Adjust path if necessary
import styles from "./Education.module.css";
// Adjust path if necessary

const Education = () => {
  return (
    <React.Fragment>
      <Header title="Education" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {educationData.map((obj, index) => (
            <EducationCard
            key={index}
            title={obj.title}
            organization={obj.organization}
            duration={obj.duration}
            liveUrl={obj.liveUrl}
            logo={obj.organization.includes('South Florida') ? 'USF' : 'MicCollege'}
            description={obj.description || []} // Assuming description field might be added in future
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Education;
