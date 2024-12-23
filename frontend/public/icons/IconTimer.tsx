import React from "react";

function IconTimer({
className,
strokeColor = "black",
}: {
className?: string;
strokeColor?: string;
}) {
return (
<svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <circle
    cx="10"
    cy="10"
    r="9"
    stroke={strokeColor}
    strokeWidth="2"
    fill="none"
    />
    <line
    x1="10"
    y1="3"
    x2="10"
    y2="10"
    stroke={strokeColor}
    strokeWidth="2"
    strokeLinecap="round"
    />
    <line
    x1="10"
    y1="10"
    x2="7"
    y2="7"
    stroke={strokeColor}
    strokeWidth="2"
    strokeLinecap="round"
    />
</svg>
);
}

export default IconTimer;
