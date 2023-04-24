import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const ChildProps = (props) => {
  const { id, title, calculate_name, name, created_at, updated_at } = props;
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ID: {id}
              </Card.Subtitle>
              <Card.Text>Name: {name}</Card.Text>
              <Card.Text>Calculate Name: {calculate_name}</Card.Text>
              <Card.Text>Created At: {created_at}</Card.Text>
              <Card.Text>Updated At: {updated_at}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChildProps;
