import * as React from "react";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 80, height = 40 }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/logo/logo.png" // Ensure this matches the actual file path
        alt="New Logo"
        style={{ width, height, objectFit: "contain" }} // Using props for size
      />
    </div>
  );
};

export default Logo;
