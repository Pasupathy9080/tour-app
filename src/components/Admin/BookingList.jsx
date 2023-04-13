import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Container, Table, Col, Row, Spinner } from "reactstrap";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://tour-app-be.onrender.com/api/v1/booking");
        const data = await response.json();
        setBookings(data.data);
        // console.log(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>All Bookings</h1>

      {bookings.length === 0 ? (
        <>

          <Container>
            <Row>
              <Col lg="12" className="d-flex align-items-center justify-content-center">
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
                <th className="text-center">User</th>
                <th className="text-center">Date</th>
                <th className="text-center">Guest Size</th>
                <th className="text-center">Paid</th>    
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
              <tr key={booking._id} className="table-success" 
               
            >
                  <td className="text-center">{booking._id}</td>
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

          

        </>
      )}
    </div>
  );
};

export default BookingList;
