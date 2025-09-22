import React from 'react';
import logoImg from "../assets/icons/logo.png";
import DocumentCheck from '../assets/icons/document-check';
import Download from '../assets/icons/download';

const ResumeNavigation = () => {
  return (
    <nav className="resume-navbar">
        <a href="/" className="logo-link"><img src={logoImg} alt="logo image" /></a>
        <div className="nav-btn-section">
            <button className="icon-btn pointer save-btn"><DocumentCheck /><span>Saved 7 minutes ago</span></button>
            <button className="pointer icon-btn export-btn"><Download /><span>Export</span></button>
        </div>
    </nav>
  )
}

export default ResumeNavigation