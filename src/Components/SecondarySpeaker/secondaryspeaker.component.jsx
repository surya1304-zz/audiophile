import React from "react";
import secSpeaker from "../../assets/home/desktop/Speaker.png";
import "./secondaryspeaker.component.css";

export default function SecondarySpeaker() {
    return (
        <div className="grayCard">
            <div className="headandbutton">
                <h2 className="name">ZX7 Speaker</h2>
                <button className="secondary outline">See product</button>
            </div>
            <img className="speaker-sec" src={secSpeaker} alt="" />
        </div>
    );
}
