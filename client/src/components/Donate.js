import React from "react";
import NavBar from "./NavBar";

import  { useState } from 'react';
import axios from 'axios';
import "../styles/donate.css"

export default function Donate(){
    const [formData, setFormData] = useState({
        Hospitalid: '',
        name: '',
        address: '',
        donationdate: '',
        donorage: '',
        exp_date: '',
        organ: ''
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post('/api/hospitals', formData);
          alert('Form submitted successfully');
        } catch (error) {
          alert('Error submitting form');
        }
      };
      return (
          <>
          <NavBar />
        <div className="donate">
        <form onSubmit={handleSubmit}>
        <h1 className="main_heading">Hospital Registration Form</h1>
        <hr />
        <br />
        <p className="required_field">* this field is required</p>
        {/* id */}
        <p>
          Hospital ID: *
          <input
            type="text"
            name="Hospitalid"
            placeholder="Ex. XYZ3456"
            required
            value={formData.Hospitalid}
            onChange={handleChange}
          />
        </p>

        {/* Name */}
        <p>
          Hospital Name: *
          <input
            type="text"
            name="name"
            placeholder="Ex. Bharti Hospital"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </p>

        <p>
          Organ: *
          <input
            type="text"
            name="organ"
            placeholder="Ex. Heart"
            required
            value={formData.organ}
            onChange={handleChange}
          />
        </p>

        {/* address */}
        <p>
          Hospital Address: *
          <textarea
            id="red"
            name="address"
            cols="100"
            rows="20"
            placeholder="please enter address in 50-60 words"
            required
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </p>
        <p>
          Donation Date:{' '}
          <input
            type="date"
            name="donationdate"
            id="date"
            value={formData.donationdate}
            onChange={handleChange}
          />
        </p>
        <p>
          Donor age: *
          <input
            type="text"
            name="donorage"
            placeholder="Ex. XYZ3456"
            required
            value={formData.donorage}
            onChange={handleChange}
          />
        </p>
        <hr />
        <p>
          Expiration date: *{' '}
          <input
            type="date"
            name="exp_date"
            id="exp_date"
            required
            value={formData.exp_date}
            onChange={handleChange}
          />
        </p>
        <input type="submit" value="Submit" className="submit"/>
      </form>
      {/* <a href="./index.html">
        {/* <button className="btns">Go Back</button> 
      </a> */}
        </div>
        </>
    )
}