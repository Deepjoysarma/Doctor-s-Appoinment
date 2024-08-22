import React from 'react';
import './DoctorCard.css'; // Ensure you create this CSS file for styling

const DoctorCard = ({ name, specialty, image, mbbsCollege, mdCollege }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt={`${name}`} className="doctor-image" />
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-specialty">{specialty}</p>
        <button className="book-appointment-btn">Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorCard;
