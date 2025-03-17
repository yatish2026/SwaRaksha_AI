// @ts-ignore
import * as React from "react";

function Logo(props) {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {/* Adjust image size and styling */}
            <img 
                src="/logo/logo.png"  // Ensure this matches the file path
                alt="New Logo"
                style={{ width: 80, height: 40, objectFit: "contain" }} // Adjust size here
            />
        </div>
    );
}

export default Logo;
