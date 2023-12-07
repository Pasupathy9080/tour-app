import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";
import {toast,ToastContainer} from 'react-toastify'


const UpdateTour = () => {
  const [tours, setTours] = useState([]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [photo, setPhoto] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [featured, setFeatured] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);
  const toggle = () => setModal(!modal);


  const getAllTours = async () => {
    const res = await axios.get(`https://tour-app-be.onrender.com/api/v1/tours/edit/all`);
    setTours(res.data.data);
  };

  const handleEdit = (tour) => {
    setSelectedTour(tour);
    setTitle(tour.title);
    setCity(tour.city);
    setAddress(tour.address);
    setDistance(tour.distance);
    setPhoto(tour.photo);
    setDesc(tour.desc);
    setPrice(tour.price);
    setMaxGroupSize(tour.maxGroupSize);
    setFeatured(tour.featured);
    toggle();
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`https://tour-app-be.onrender.com/api/v1/tours/${selectedTour._id}`, {
        title,
        city,
        address,
        distance,
        photo,
        desc,
        price,
        maxGroupSize,
        featured,
      });
      console.log(res.data);
      setSelectedTour(null);
      toggle();
      toast.success('Tour Updated Successfully')
      getAllTours();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (tour) => {
    try {
      if (tour) {
        await axios.delete(`https://tour-app-be.onrender.com/api/v1/tours/${tour._id}`);
        // Handle success, such as removing the tour from a list of tours
        toast.success('Tour Deleted Successfully');
        setSelectedTour(null);
        getAllTours();
      }
    } catch (err) {
      console.error(err);
      // Handle error
    }
  };
  

  useEffect(() => {
    getAllTours();
  }, []);

  return (
    <div>
        <ToastContainer/>
     
      <Table responsive>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Title</th>
            <th className="text-center">City</th>
            <th className="text-center">Distance</th>
            <th className="text-center">Price</th>
            <th className="text-center">Max G.S</th>
            <th className="text-center">Featured</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={tour._id}>
              <th scope="row">{index + 1}</th>
              <td className="text-center">{tour.title}</td>
              <td className="text-center">{tour.city}</td>
              {/* <td className="text-center">{tour.address}</td> */}
              <td className="text-center">{tour.distance}</td>
              <td className="text-center">{tour.price}</td>
              <td className="text-center">{tour.maxGroupSize}</td>
              <td className="text-center">{tour.featured ? "Yes" : "No"}</td>
              <td>
                <Button className="mx-2" color="success" onClick={() => handleEdit(tour)}>
                  Edit
                </Button>
                <Button color="danger" onClick={() => handleDelete(tour)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Tour</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleUpdate}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="city">City</Label>
        <Input
          type="text"
          name="city"
          id="city"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="distance">Distance</Label>
        <Input
          type="number"
          name="distance"
          id="distance"
          placeholder="Enter distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="photo">Photo</Label>
        <Input
          type="text"
          name="photo"
          id="photo"
          placeholder="Enter photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="desc">Description</Label>
        <Input
          type="textarea"
          name="desc"
          id="desc"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input
          type="number"
          name="price"
          id="price"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="maxGroupSize">Max Group Size</Label>
        <Input
          type="number"
          name="maxGroupSize"
          id="maxGroupSize"
          placeholder="Enter max groupsize"
          value={maxGroupSize}
          onChange={(e) => setMaxGroupSize(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="featured">Featured</Label>
        <Input
          type="select"
          name="featured"
          id="featured"
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Input>
      </FormGroup>

      <Button color="success" className="mb-3 w-100" onClick={handleUpdate}>
        Update
      </Button>
    </Form>


        </ModalBody>
        </Modal>

        </div>)}

        export default UpdateTour
