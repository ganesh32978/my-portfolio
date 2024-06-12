import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styles from "./EducationCard.module.css";

const EducationCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);

  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.organization}
          <br />
          <span style={{ fontWeight: "500" }}>{props.duration}</span>
        </Card.Text>
        {props.liveUrl && (
          <Button
            className={styles.button}
            variant="primary"
            href={props.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Button>
        )}
        {props.description && (
          <React.Fragment>
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              View Description
            </Button>
            <Modal centered size="lg" show={modalDisplay} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>{props.organization}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ textAlign: "center" }}>
                  <h4>{props.title}</h4>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h5>{props.duration}</h5>
                </div>
                <ul>
                  {props.description.map((elem, index) => (
                    <li key={index}>{elem}</li>
                  ))}
                </ul>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        )}
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
