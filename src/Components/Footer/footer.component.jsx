import React from "react";
import Logo from "../../assets/shared/desktop/logo.svg";
import "./footer.component.css";

export default function Footer() {
    return (
        <div className="container">
            <div className="descandcopy">
                <img src={Logo} alt="" />
            </div>
            <div className="socialLinks"></div>
        </div>
    );
}
