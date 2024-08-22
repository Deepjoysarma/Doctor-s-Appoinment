import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DoctorCard from './components/DoctorCard';
import './App.css'; 


const initialDoctors = [
  { 
    name: "Dr. Rajesh Kumar", 
    specialty: "Cardiologist", 
    image: "https://via.placeholder.com/300x200?text=Cardiologist" 
  },
  { 
    name: "Dr. Priya Sharma", 
    specialty: "Dermatologist",
    image: "https://via.placeholder.com/300x200?text=Dermatologist" 
  },
  { 
    name: "Dr. Aishwarya Reddy", 
    specialty: "Neurologist", 
    image: "https://via.placeholder.com/300x200?text=Neurologist" 
  },
  { 
    name: "Dr. Arjun Patel", 
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/300x200?text=Pediatrician" 
  },
  { 
    name: "Dr. Neha Gupta", 
    specialty: "Medicine",
    image: "https://via.placeholder.com/300x200?text=Medicine" 
  },
  { 
    name: "Dr. Amit Desai", 
    specialty: "Dentist",
    image: "https://via.placeholder.com/300x200?text=Dentist" 
  },
  { 
    name: "Dr. Sanya Mehta", 
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/300x200?text=Cardiologist" 
  },
  { 
    name: "Dr. Vikram Singh", 
    specialty: "Dermatologist",
    image: "https://via.placeholder.com/300x200?text=Dermatologist" 
  },
  { 
    name: "Dr. Ananya Sinha", 
    specialty: "Neurologist",
    image: "https://via.placeholder.com/300x200?text=Neurologist" 
  },
  { 
    name: "Dr. Rohan Kapoor", 
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/300x200?text=Pediatrician" 
  },
  { 
    name: "Dr. Sneha Agarwal", 
    specialty: "Medicine",
    image: "https://via.placeholder.com/300x200?text=Medicine" 
  },
  { 
    name: "Dr. Kiran Kumar", 
    specialty: "Dentist",
    image: "https://via.placeholder.com/300x200?text=Dentist" 
  },
  { 
    name: "Dr. Ishaan Verma", 
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/300x200?text=Cardiologist" 
  },
  { 
    name: "Dr. Meera Joshi", 
    specialty: "Dermatologist",
    image: "https://via.placeholder.com/300x200?text=Dermatologist" 
  },
  { 
    name: "Dr. Aarav Nair", 
    specialty: "Neurologist",
    image: "https://via.placeholder.com/300x200?text=Neurologist" 
  },
  { 
    name: "Dr. Kavya Rao", 
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/300x200?text=Pediatrician" 
  },
  { 
    name: "Dr. Vikas Yadav", 
    specialty: "Medicine", 
    image: "https://via.placeholder.com/300x200?text=Medicine" 
  },
  { 
    name: "Dr. Pooja Bhat", 
    specialty: "Dentist",
    image: "https://via.placeholder.com/300x200?text=Dentist" 
  },
  { 
    name: "Dr. Rishi Sharma", 
    specialty: "Cardiologist", 
    image: "https://via.placeholder.com/300x200?text=Cardiologist" 
  },
  { 
    name: "Dr. Simran Kaur", 
    specialty: "Dermatologist", 
    image: "https://via.placeholder.com/300x200?text=Dermatologist" 
  }
];

const specializations = [
  "All",
  "Medicine",
  "Diabetologist",
  "Cardiologist",
  "Psychiatrist",
  "Dermatologist",
  "Dentist"
];


const Home = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');

  const handleSelectChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };

  const filteredDoctors = initialDoctors.filter((doctor) =>
    selectedSpecialization === 'All' || doctor.specialty === selectedSpecialization
  );

  return (
    <div className="home">
      <h1 className="page-title">Our Doctors</h1>
      <select className="select-specialization" value={selectedSpecialization} onChange={handleSelectChange}>
        {specializations.map((spec, index) => (
          <option key={index} value={spec}>
            {spec}
          </option>
        ))}
      </select>
      <div className="doctor-cards">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            specialty={doctor.specialty}
            contact={doctor.contact}
            image={doctor.image}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => <div className="page-content">
    <div className="about-container">
      <h1 className="about-title">About Our Project</h1>
      <p className="about-description">
        Our platform is designed to enhance the connection between patients and doctors, making it easier than ever to get in touch with healthcare professionals. With a user-friendly interface, patients can quickly search for specialists, view detailed profiles, and book appointments seamlessly. Our goal is to bridge the gap between patients and doctors, ensuring timely access to medical care and empowering users to take control of their health journey.
      </p>
    </div>
</div>;
const Services = () => <div className="page-content">
  <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Book Appointments</h2>
          <p>Schedule appointments easily through our platform.</p>
        </div>
        <div className="service-item">
          <h2>Health Consultations</h2>
          <p>Consult with healthcare professionals directly.</p>
        </div>
      </div>
    </div>
</div>;
const Contact = () => <div className="page-content">
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-message">
        If you face any problem during the use of our platform, please don't hesitate to reach out. We are here to help!
      </p>
      <div className="contact-details">
        <p><strong>Name:</strong> Deepjoy Sarma</p>
        <p><strong>Contact Number:</strong> 8794437657</p>
        <p><strong>Email:</strong> <a href="mailto:deepjoysarma1223@gmail.com">deepjoysarma1223@gmail.com</a></p>
      </div>
    </div>
</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
