import * as React from "react"
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    stroke="#FF8A65"
    strokeWidth={1.5}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props}
      strokeLinecap="round"
      strokeWidth={props}
      d="M3 7h18M3 12h18M3 17h18"
    />
  </svg>
)
export default MenuIcon
