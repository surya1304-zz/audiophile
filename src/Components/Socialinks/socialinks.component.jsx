import React from "react";
import "./socialinks.component.css";
import { ReactComponent as Facebook } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/shared/desktop/icon-twitter.svg";

function Socialinks() {
    return (
        <div className="social">
            <a href="https://www.facebook.com/surya.sai.965/">
                <Facebook className="soci" />
            </a>
            <a href="https://twitter.com/surya_indukuri">
                <Twitter className="soci" />
            </a>
            <a href="https://www.instagram.com/surya_sai_indukuri/">
                <Instagram className="soci" />
            </a>
        </div>
    );
}

export default Socialinks;
