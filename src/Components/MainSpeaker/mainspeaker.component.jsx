import React from "react";
import mainSpeaker from "../../assets/home/desktop/image-speaker-zx9.png";
import "./mainspeaker.component.css";

export default function MainSpeaker() {
    return (
        <div className="OrangeCard">
            <div className="imge">
                <img src={mainSpeaker} alt="" />
                <svg
                    className="rings"
                    width="944"
                    height="944"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        stroke="#FFF"
                        fill="none"
                        fill-rule="evenodd"
                        opacity=".202"
                    >
                        <circle cx="472" cy="472" r="235.5" />
                        <circle cx="472" cy="472" r="270.5" />
                        <circle cx="472" cy="472" r="471.5" />
                    </g>
                </svg>
            </div>
            <div className="descript">
                <h2 className="speaker_main">ZX9 SPEAKER</h2>
                <p className="description">
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </p>
                <button className="secondary">See Product</button>
            </div>
        </div>
    );
}
