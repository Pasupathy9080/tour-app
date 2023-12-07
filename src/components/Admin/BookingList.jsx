import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  Container,
  Table,
  Col,
  Row,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [tourDetails, setTourDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          "https://tour-app-be.onrender.com/api/v1/booking"
        );
        const data = await response.json();
        setBookings(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, []);

  const handleTourIdClick = async (tourId) => {
    setSelectedTourId(tourId);
    try {
      const response = await fetch(
        `https://tour-app-be.onrender.com/api/v1/tours/${tourId}`
      );
      const data = await response.json();
      setTourDetails(data.data);
      setIsModalOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>All Bookings</h1>

      {bookings.length === 0 ? (
        <>
          <Container>
            <Row>
              <Col
                lg="12"
                className="d-flex align-items-center justify-content-center"
              >
                <Spinner color="success">Loading...</Spinner>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Table responsive hover>
            <thead>
              <tr className="table-warning">
                <th className="text-center">Booking ID</th>
                <th className="text-center">Tour ID</th>
                <th className="text-center">User</th>
                <th className="text-center">Date</th>
                <th className="text-center">Guest Size</th>
                <th className="text-center">Paid</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="table-success"
                  onClick={() => handleTourIdClick(booking.tourId)}
                  style={{ cursor: "pointer" }}
                >
                  <td className="text-center">{booking._id}</td>
                  <td className="text-center">{booking.tourId}</td>
                  <td className="text-center">{booking.fullName}</td>
                  <td className="text-center">{booking.bookAt.slice(0, 10)}</td>
                  <td className="text-center">{booking.guestSize}</td>
                  <td className="text-center">
                    <FaCheckCircle className="text-success" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>
              Tour Details -{selectedTourId}
            </ModalHeader>
            <ModalBody>
              {tourDetails && (
                <>
                  <h3>{tourDetails.title}</h3>
                  <div className="tour_img">
                    <img src={tourDetails.photo} alt="tour-img" />
                  </div>
                  <p>{tourDetails.description}</p>
                  <p>{tourDetails.city}</p>
                  <p>Price: ${tourDetails.price}</p>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>
      )}
    </div>
  );
};

export default BookingList;
