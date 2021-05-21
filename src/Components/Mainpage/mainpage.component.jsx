import React from "react";
import Navbar from "../Navbar/navbar.component";
import "./mainpage.component.css";
import headphones from "../../assets/home/desktop/hell.png";
import ShopItems from "../ShopItems/shopitems.components";
import MainSpeaker from "../MainSpeaker/mainspeaker.component";
import SecondarySpeaker from "../SecondarySpeaker/secondaryspeaker.component";
import Earphones from "../Earphones/earphones.component";
import BestGear from "../BestGear/bestgear.component";
import Footer from "../Footer/footer.component";

function MainPage() {
    return (
        <div>
            <div className="hello">
                <Navbar />
                <div className="contentHead">
                    <div className="left">
                        <p className="overline">NEW PRODUCT</p>
                        <h1>XX99 Mark II Headphones</h1>
                        <p className="main-body">
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </p>
                        <button className="primary">SEE PRODUCT</button>
                    </div>
                    <div className="right">
                        <img src={headphones} alt="Headphones" />
                    </div>
                </div>
            </div>

            <ShopItems />

            <div className="advertise">
                <MainSpeaker />
                <SecondarySpeaker />
                <Earphones />
                <BestGear />
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;
