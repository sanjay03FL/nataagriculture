import React from "react";
import LocationName from "./locationName";
import LocationMap from "./locationMap";
import { Card, CardBody, Col, Row } from "reactstrap";
import styles from "./styles.module.css";
const LocationDetails = () => {
  return (
    <div className={styles.fragment}>
      <Row className={styles.mainIndexRow}>
        <Card className={styles.customCardltn}>
          <CardBody className="d-flex">
            <Col sm={3}>
              <LocationName />
            </Col>
            <Col sm={9} style={{ border: "2px solid #d8dadc" }}>
              <LocationMap />
            </Col>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default LocationDetails;
