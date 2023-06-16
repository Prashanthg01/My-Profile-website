import React from "react";
import Profile_Pic from "./Image";
import SocialIcons from "./social-media-icon";
import ResumeDownloadButton from "./resume-btn";

export default function Static_info() {
    return (
        <div>
            <Profile_Pic/>
            <h2>Prashanth G</h2>
            <h3>Web developer</h3>
            <SocialIcons/>
            <div className="home-btns-main">
                <ResumeDownloadButton/>
            </div>
            
        </div>
    )
}