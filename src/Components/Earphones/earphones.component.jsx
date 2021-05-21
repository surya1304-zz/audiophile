import React from "react";
import earphones from "../../assets/home/desktop/image-earphones-yx1.jpg";
import "./earphones.component.css";

export default function Earphones() {
    return (
        <div className="earpho">
            <div>
                <img className="ep" src={earphones} alt="Earphones" />
            </div>
            <div className="greyCard">
                <h2 className="name">YX1 Earphones</h2>
                <button className="secondary outline">See Product</button>
            </div>
        </div>
    );
}
