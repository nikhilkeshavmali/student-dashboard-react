import React from "react";

function Header() {
  return (
    <div className="py-4">
      <div className="bg-light p-5 rounded shadow-sm">
        <h1 className="display-6">Welcome to Student Dashboard</h1>
        <p className="lead mb-0">
          Manage students, view announcements, and keep track of batches.
        </p>
      </div>
    </div>
    
  );
}

export default Header;
