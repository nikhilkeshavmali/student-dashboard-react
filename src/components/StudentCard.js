// src/components/StudentCard.js
import React from 'react';

function StudentCard({ name, rollNo, course, batch }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Roll: {rollNo}</h6>
        <p className="card-text mb-1"><strong>Course:</strong> {course}</p>
        <p className="card-text"><strong>Batch:</strong> {batch}</p>
      </div>
    </div>
  );
}

export default StudentCard;
