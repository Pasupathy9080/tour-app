import React, {useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Spinner,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector(state => state.auth.user);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [tourDetails, setTourDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://tour-app-be.onrender.com/api/v1/booking"
        );
        const data = await response.json();
        const filteredBookings = data.data.filter(
          (booking) => booking.userId === user.data._id
        );
        setBookings(filteredBookings);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

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
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="pt-5 mt-5">
              <h6 className="text-center p-3 rounded-2 bg-success text-light">
                My bookings
              </h6>
              {loading ? (
                <div className="d-flex align-items-center justify-content-center">
                  <Spinner color="success" />
                </div>
              ) : bookings.length === 0 ? (
                <>
                  <Container>
                    <Row>
                      <Col lg="12">
                        <img
                          src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone-man_23-2148576384.jpg?w=740&t=st=1681377051~exp=1681377651~hmac=6c35da553d6b6398261189720972fe67236f9d9c6fd23d61dbc0d53ae9d800e8"
                          alt="no bookings"
                          className="booking-cart"
                        />
                        <h6 className="bg-danger text-light w-100 text-center p-3 rounded-2">
                          No bookings yet!
                        </h6>
                        <Button color="success" className="w-100">
                          <Link to="/tours" className="text-light">
                            Go to Booking
                          </Link>
                        </Button>
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
                          onClick={() => handleTourIdClick(booking.tourId)}
                          className="table-success"
                          style={{ cursor: "pointer" }}
                        >
                          <td className="text-center">{booking._id}</td>
                          <td className="text-center">{booking.tourId}</td>
                          <td className="text-center">{booking.fullName}</td>
                          <td className="text-center">
                            {booking.bookAt.slice(0, 10)}
                          </td>
                          <td className="text-center">{booking.guestSize}</td>
                          <td className="text-center">
                            {localStorage.getItem("paid") === "true" ?<><FaCheckCircle className="text-success" /></> :<>pending</>}
                            
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Profile;
