import React from 'react';
import './comp_css/table.css';

function Table({tableheading , tabledata}) { 
        return (
            <table>
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Mobile No</th>
            </tr>
          </thead>
    
          <tbody>
            {tabledata.map((faculty, index) => (
              <tr key={index}>
                <td>{faculty.name}</td>
                <td>{faculty.department}</td>
                <td>{faculty.designation}</td>
                <td>{faculty.email}</td>
                <td>{faculty.mobileno}</td>
              </tr>
            ))}
          </tbody>
      </table>
        )
};

export default Table;