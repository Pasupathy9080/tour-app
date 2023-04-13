import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";

const CreateTourForm = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [photo, setPhoto] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [featured, setFeatured] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      city,
      address,
      distance,
      photo,
      desc,
      price,
      maxGroupSize,
      featured,
    };

    try {
      const response = await fetch("https://tour-app-be.onrender.com/api/v1/tours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      await response.json();
      toast.success("Tour created successfully");

      // Clear form after submission
    setTitle("");
    setCity("");
    setAddress("");
    setDistance("");
    setPhoto("");
    setDesc("");
    setPrice("");
    setMaxGroupSize("");
    setFeatured(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap mt-4">
      <ToastContainer />
      <Form
        onSubmit={handleSubmit}
        className="d-flex align-items-center  gap-3 flex-wrap"
      >
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="distance">Distance</Label>
          <Input
            type="number"
            name="distance"
            id="distance"
            value={distance}
            required
            onChange={(e) => setDistance(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="photo">Photo</Label>
          <Input
            type="text"
            name="photo"
            id="photo"
            value={photo}
            required
            onChange={(e) => setPhoto(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="desc">Description</Label>
          <Input
            type="textarea"
            name="desc"
            id="desc"
            value={desc}
            required
            onChange={(e) => setDesc(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="maxGroupSize">Max Group Size</Label>
          <Input
            type="number"
            name="maxGroupSize"
            id="maxGroupSize"
            value={maxGroupSize}
            required
            onChange={(e) => setMaxGroupSize(e.target.value)}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              onChange={(e) => setFeatured(e.target.checked)}
            />{" "}
            Featured
          </Label>
        </FormGroup>

        <Button color="success" className="px-5">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateTourForm;
