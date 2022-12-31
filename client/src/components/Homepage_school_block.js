import React, { useState } from 'react';
import "./Homepage_school_block.css";
import School_name_block from './School_name_block';

function Homepage_school_block({ school }) {
    const [contacts, setContacts] = useState(school.contacts)
  return (
    <div className="schoolBlock__container">
        <School_name_block id={school._id} schoolName={school.schoolName} district={school.district} />
        <div className="schoolBlock__contactSquaresContainer">
            {contacts.map((contact, index) => (
                <div className="schoolBlock_contactSquare" style={{"backgroundColor": (contact.emailed && "green")}} key={index}></div>
            ))}
        </div>
        
    </div>
  )
}

export default Homepage_school_block