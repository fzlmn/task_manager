import React from "react";

function IconUsers({ strokeColor = "black" }: { strokeColor?: string }) {
return (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="20"
    viewBox="0 0 22 20"
    fill="none"
>
    <path
    d="M11 12C8.23858 12 6 9.76142 6 7C6 4.23858 8.23858 2 11 2C13.7614 2 16 4.23858 16 7C16 9.76142 13.7614 12 11 12ZM11 13C7.13401 13 4 10.866 4 7C4 3.13401 7.13401 1 11 1C14.866 1 18 3.13401 18 7C18 10.866 14.866 13 11 13Z"
    stroke={strokeColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    <path
    d="M16 14C16 13.4477 15.5523 13 15 13H7C6.44772 13 6 13.4477 6 14V15C6 15.5523 6.44772 16 7 16H15C15.5523 16 16 15.5523 16 15V14Z"
    stroke={strokeColor}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
</svg>
);
}

export default IconUsers;
