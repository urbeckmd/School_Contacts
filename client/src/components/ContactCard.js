import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ContactCard.css";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate, useParams } from "react-router";

function ContactCard({ contact }) {
  const params = useParams();
  const navigate = useNavigate();
  const [emailed, setEmailed] = useState(false);
  const mailAddress = `mailto:${contact.emailAddress}`;

  useEffect(() => {
    setEmailed(false);
  }, [navigate]);

  const handleEmailClick = () => {
    if (!emailed) {
      async function onEmailed(e) {
        await fetch(
          `http://localhost:5000/emailed/${params.id.toString()}/${contact.id.toString()}`,
          {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      onEmailed();
      setEmailed(true);
    }
  };

  return (
    <div
      className="contactCard__container"
      style={{ opacity: (contact.emailed || emailed) && "0.5" }}
    >
      <div className="contactCard__left">
        <h2 className="contactCard__name">{contact.name}</h2>
        <h4 className="contactCard__title">{contact.title}</h4>
      </div>
      <div className="contactCard__right">
        <a href={mailAddress}>
          <Fab onClick={handleEmailClick}>
            <EmailIcon />
          </Fab>
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
