import React from "react";
import Logo from "../../assets/shared/desktop/logo.svg";
import MenuItems from "../MenuItems/menuitems.component";
import "./footer.component.css";
import Socialinks from "../Socialinks/socialinks.component";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="descandcopy">
                    <img src={Logo} alt="" />
                    <p className="des">
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we’re open 7 days a week.
                    </p>
                    <p className="copy">Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="socialLinks">
                    <MenuItems />
                    <Socialinks />
                </div>
            </div>
        </div>
    );
}
