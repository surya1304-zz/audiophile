import React from "react";
import ImageCard from "../ImageCard/imagecard.component";

export default function ShopItems() {
    return (
        <div>
            <div className="ShopItems">
                <ImageCard name="headphones" />
                <ImageCard name="speakers" />
                <ImageCard name="earphones" />
            </div>
        </div>
    );
}
