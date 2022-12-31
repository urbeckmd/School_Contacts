import React from 'react';
import "./Header.css";
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router';

function Header({ homePage }) {
    const navigate = useNavigate();

    // Navigate to home page
    const handleClickHome = () => {
        navigate("/");
    }

  return (
    <>
        <div className="header__container">
            <div className="header__content">
                <div className="header__contentLeft">
                    <SchoolIcon className="header__icon" />
                    <h1 className="header__title">School Contacts</h1>
                </div>
                <div className="header__contentRight">
                    <h1 className="header__home" style={{"display": (homePage && "none")}} onClick={handleClickHome}>Home</h1>
                </div>
            </div>
        </div>
    </>
        
    )
}

export default Header