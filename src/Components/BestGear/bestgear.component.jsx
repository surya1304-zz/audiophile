import React from "react";
import bestgear from "../../assets/shared/desktop/image-best-gear.jpg";
import "./bestgear.component.css";

export default function BestGear() {
    return (
        <div className="dust">
            <div className="text">
                <h2 className="name1">
                    Bringing you the <span className="best">best</span> audio
                    gear
                </h2>
                <p className="body">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
            <div className="ig">
                <img className="gear" src={bestgear} alt="" />
            </div>
        </div>
    );
}
