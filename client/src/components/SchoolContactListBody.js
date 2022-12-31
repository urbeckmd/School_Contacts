import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactCard from "./ContactCard";
import "./SchoolContactListBody.css";
import School_name_block from "./School_name_block";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function SchoolContactListBody() {
  const [schoolInfo, setSchoolInfo] = useState({});
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  // Call DB to get school info
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/school/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setSchoolInfo(record);
      setLoading(false);
      setContacts(record.contacts);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  // Function to get neighboring school
  async function getNeighboringSchool(id) {
    const response = await fetch(`http://localhost:5000/neighborSchool/${id}`);

    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const record = await response.json();
    if (!record) {
      // window.alert(`Record with id ${id} not found`);
      navigate(`/school/${schoolInfo._id}`);
      return;
    }
    navigate(`/school/${record._id}`);
    return;
  }

  // Go to previous school when back arrow is clicked
  const handleBackArrowClick = () => {
    const previousID = schoolInfo.schoolId - 1;
    getNeighboringSchool(previousID);
  };

  // Go to next school when forward arrow is clicked
  const handleForwardArrowClick = () => {
    const nextID = schoolInfo.schoolId + 1;
    getNeighboringSchool(nextID);
  };

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <>
          <School_name_block
            id={params.id}
            schoolName={schoolInfo.schoolName}
            district={schoolInfo.district}
            className="schoolContactList__schooolNameBlock"
          />
          <div className="contactList__cardContainer">
            {contacts.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
          <div className="contactList__fabContainer">
            <Fab className="contactList__fab" onClick={handleBackArrowClick}>
              <ArrowBackIosNewIcon />
            </Fab>
            <Fab className="contactList__fab" onClick={handleForwardArrowClick}>
              <ArrowForwardIosIcon />
            </Fab>
          </div>
        </>
      )}
    </>
  );
}

export default SchoolContactListBody;
