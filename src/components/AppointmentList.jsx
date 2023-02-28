import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FaTimesCircle } from "react-icons/fa";

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };
  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      <div type="button" className="d-flex flex-column align-items-center">
        {!appointments.length && (
          <img src="./img/appointment.jpg" alt="" width="50%" />
        )}
        {appointments.map((item) => {
          const { id, patient, consulted, doctor, day } = item;
          return (
            <div
              key={id}
              className={consulted ? "appointments consulted " : "appointments"}
              onDoubleClick={() => handleDoubleClick(id)}
            >
              <Row className="d-flex align-items-center ">
                <Col xs={12} sm={12} md={6}>
                  <h4 className="text-danger">{patient}</h4>
                  <h5>{doctor}</h5>
                </Col>
                <Col xs={10} sm={8} md={5}>
                  <h6>{new Date(day).toLocaleDateString()}</h6>
                  <h6>{new Date(day).toLocaleTimeString()}</h6>
                </Col>
                <Col xs={2} sm={4} md={1} className="text-end">
                  <FaTimesCircle
                    className="text-danger fs-1"
                    type="button"
                    onClick={() => handleDelete(id)}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AppointmentList;
