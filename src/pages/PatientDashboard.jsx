import React, { useContext } from "react";
import { Context } from "../main";

const PatientDashboard = () => {
  const { user } = useContext(Context);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="patient-dashboard">
      

      {/* Header Section */}
      <div className="dashboard-header">
        <div className="patient-details">
          <h2>{user.firstName} {user.lastName}</h2>
          <p className="patient-id">Patient ID: #{user.nic}</p>
          <div className="contact-info">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="dashboard-content">
        {/* Medical Information */}
        <div className="medical-info">
          <h3>Medical Information</h3>
          <div className="info-card">
            <h4>Last Checked Vitals</h4>
            <p><strong>Date:</strong> 2024-03-15</p>
            <p><strong>Blood Pressure:</strong> 120/80</p>
            <p><strong>Heart Rate:</strong> 72 bpm</p>
            <p><strong>Temperature:</strong> 98.6°F</p>
          </div>
          <div className="info-card">
            <h4>Recovery Time Needed</h4>
            <p>2 weeks</p>
          </div>
        </div>

        {/* Treatment Rewards */}
        <div className="treatment-rewards">
          <h3>Treatment Rewards</h3>
          <div className="rewards-list">
            <div className="reward-item">
              <p><strong>Perfect Attendance</strong></p>
              <p>Earned on 2024-03-10</p>
              <p>500 points</p>
            </div>
            <div className="reward-item">
              <p><strong>Treatment Milestone</strong></p>
              <p>Earned on 2024-03-05</p>
              <p>1000 points</p>
            </div>
            <div className="reward-item">
              <p><strong>Early Recovery</strong></p>
              <p>Earned on 2024-02-28</p>
              <p>750 points</p>
            </div>
          </div>
          <div className="total-points">
            <p><strong>Total Points:</strong> 2250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;