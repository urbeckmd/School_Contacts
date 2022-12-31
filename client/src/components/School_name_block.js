import React from "react";
import { useNavigate } from "react-router";
import "./School_name_block.css";

function School_name_block({ id, schoolName, district }) {

    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate(`/school/${id}`);
    }

  return (
    <div className="schoolNameBlock__container" onClick={navigateToContacts}>
      <h1 className="schoolNameBlock__schoolName">{schoolName}</h1>
      <h3 className="schoolNameBlock__districtName">{district}</h3>
    </div>
  );
}

export default School_name_block;
