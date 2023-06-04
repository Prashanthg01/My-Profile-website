import { GitHub, Instagram } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";


export default function SocialIcons() {
  return (
    <div className="social_media_icons">
      <a href="https://github.com/Prashanthg01?tab=repositories">
        <GitHub />
      </a>
      <a href="https://github.com/Prashanthg01?tab=repositories">
        <LinkedInIcon/>
      </a>
      <a href="https://github.com/Prashanthg01?tab=repositories">
        <Instagram />
      </a>
    </div>
  );
}
