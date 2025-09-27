// src/components/StudentList.js
import React, { Component } from 'react';
import StudentCard from './StudentCard';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: "Aarav Mehta", rollNo: "101", course: "ReactJS", batch: "10-12 AM" },
        { name: "Riya Sharma", rollNo: "102", course: "NodeJS", batch: "12-3 PM" },
        { name: "Rohit Patil", rollNo: "103", course: "Bootstrap", batch: "2:30-4:30 PM" },
        { name: "Neha Kulkarni", rollNo: "104", course: "JavaScript", batch: "5-6 PM" }
      ]
    };
  }

  render() {
    return (
      <div className="mt-4">
        <h3 className="mb-3">Student List</h3>
        <div className="row">
          {this.state.students.map(student => (
            <div className="col-md-6 mb-4" key={student.rollNo}>
              <StudentCard
                name={student.name}
                rollNo={student.rollNo}
                course={student.course}
                batch={student.batch}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
