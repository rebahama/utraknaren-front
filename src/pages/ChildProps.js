import React from "react";
import styles from "../styles/ChildPros.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const ChildProps = (props) => {
  const { id, title, calculate_name, name,content, created_at, updated_at } = props;
  return (
    <div className={styles.backgroundContainer}>
      <Container>
        <Row>
          <Col md={12} className={styles.marginContainer}>
            <Card className={styles["custom-card"]}>
              <Card.Body>
                <div className={styles.FlexContainer}>
                  <Card.Title className={styles["custom-card-title"]}>
                    {title}
                  </Card.Title>
                  <Card.Subtitle className={styles["custom-card-subtitle"]}>
                    ID: {id}
                  </Card.Subtitle>
                  <Card.Text className={styles["custom-card-text"]}>
                    Name: {name}
                  </Card.Text>
                  <Card.Text className={styles["custom-card-text"]}>
                    Siffer categori: {calculate_name}
                  </Card.Text>
                  <Card.Text className={styles["custom-card-text"]}>
                    Ursprunglig siffra: {content}
                  </Card.Text>
                  <Card.Text className={styles["custom-card-text"]}>
                    Created At: {created_at}
                  </Card.Text>
                  <Card.Text className={styles["custom-card-text"]}>
                    Updated At: {updated_at}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChildProps;
