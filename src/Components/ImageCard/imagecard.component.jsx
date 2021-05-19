import React from "react";
import earphones from "../../assets/shared/desktop/image-earphones.png";
import headphones from "../../assets/shared/desktop/image-headphones.png";
import speakers from "../../assets/shared/desktop/image-speakers.png";
import "./imagecard.component.css";

export default function ImageCard({ name }) {
    switch (name) {
        case "headphones":
            return (
                <div className="imagecard">
                    <div className="imagecontent">
                        <img className="image" src={headphones} alt={name} />
                        <div className="content">
                            <h2>{name}</h2>
                            <a className="shop" href="/">
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            );
        case "speakers":
            return (
                <div className="imagecard">
                    <div className="imagecontent">
                        <img className="image" src={speakers} alt={name} />
                        <div className="content">
                            <h2>{name}</h2>
                            <a className="shop" href="/">
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            );
        case "earphones":
            return (
                <div className="imagecard">
                    <div className="imagecontent">
                        <img className="image" src={earphones} alt={name} />
                        <div className="content">
                            <h2>{name}</h2>
                            <a className="shop" href="/">
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            );
        default:
            return <h1>No Name given</h1>;
    }
}
