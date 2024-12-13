import React from 'react';
import './style.css';

const profiles = [
  {
    name: 'Ann Dawson',
    status: 'At work',
    role: 'Contractor',
    department: 'Human Resources',
    location: 'UK',
    image: 'https://via.placeholder.com/100x100',
    statusColor: '#D3F9D8',
  },
  {
    name: 'Mark Marshall',
    status: 'Holiday',
    role: 'Employee',
    department: 'Human Resources',
    location: 'UK',
    image: 'https://via.placeholder.com/100x100',
    statusColor: '#FFE7E9',
  },
];

const ProfileCard = ({
  name,
  status,
  role,
  department,
  location,
  image,
  statusColor,
}) => {
  return (
    <div className="profile-card">
      <div className="status" style={{ backgroundColor: statusColor }}>
        {status}
      </div>
      <img src={image} alt={name} className="profile-image" />
      <h3 className="name">{name}</h3>
      <p className="text">{role}</p>
      <p className="text">{department}</p>
      <p className="text">{location}</p>
    </div>
  );
};

const ProfileCards = () => {
  return (
    <div className="profile-cards-container">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default ProfileCards;
