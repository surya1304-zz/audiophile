import React from "react";
import ImageCard from "../ImageCard/imagecard.component";
import "./shopitems.component.css";

export default function ShopItems() {
    return (
        <div className="ShopItems">
            <ImageCard name="headphones" />
            <ImageCard name="speakers" />
            <ImageCard name="earphones" />
        </div>
    );
}
