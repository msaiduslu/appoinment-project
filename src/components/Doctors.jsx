import { useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { AddModal } from "./AddModal";

const Doctors = ({ doctors, appointments, setAppointments }) => {
  const [show, setShow] = useState(false);
  const [selectedDrName, setSelectedDrName] = useState("");

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctors.map((dr) => {
          return (
            <Col key={dr.id} xs={6} sm={4} md={3}>
              <img
                src={dr.img}
                alt={dr.name}
                className="img-thumbnail doctor-img"
                onClick={() => {
                  setShow(true);
                  setSelectedDrName(dr.name);
                }}
              />
              <h5>{dr.name}</h5>
              <h6>{dr.dep}</h6>
            </Col>
          );
        })}
      </Row>

      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        selectedDrName={selectedDrName}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  );
};

export default Doctors;
