import React, { useEffect, useState } from "react";
import "./SchoolList.css";
import Homepage_school_block from "./Homepage_school_block";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function SchoolList() {
  const [schoolList, setSchoolList] = useState([]);

  // Get all the schools from DB and set in array
  useEffect(() => {
    async function getSchools() {
      const response = await fetch(`http://localhost:5000/schoolList/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const schools = await response.json();
      setSchoolList(schools);
    }
    getSchools();
    return;
  }, []);

  return (
    <>
      <div className="schoolList__container">
        {schoolList.map((school, index) => (
          <Homepage_school_block key={index} school={school} />
        ))}
        <div className="schoolList__scrollButtons">
          <Fab
            className="homePage__scrollButtons"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <ArrowUpwardIcon />
          </Fab>
          <Fab
            className="homePage__scrollButtons"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            <ArrowDownwardIcon />
          </Fab>
        </div>
      </div>
    </>
  );
}

export default SchoolList;
