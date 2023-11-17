import * as React from "react"
const TickCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    stroke="#FF8A65"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props}
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
    />
    <path
      stroke={props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props}
      d="m7.75 12 2.83 2.83 5.67-5.66"
    />
  </svg>
)
export default TickCircle
