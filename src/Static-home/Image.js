import React from "react";
import Img from "./Documents/logo.png"

export default function Profile_Pic() {
    return (
        <div className="profile_img">
            <img src={Img} alt="profile-pic" />
        </div>
    )
}