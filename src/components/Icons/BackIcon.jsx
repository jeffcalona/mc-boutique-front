import * as React from "react"
const BackIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={32}
    fill="none"
    stroke="#FF8A65"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11"
    />
    <path
      stroke={props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.43 10.81 3.87 8.25l2.56-2.56"
    />
  </svg>
)
export default BackIcon
