import * as React from "react"
const RuleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#FF8A65"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 17h14c2 0 3-1 3-3v-4c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3zM18 7v5M6 7v4m4.05-4L10 12m4-5v3"
    />
  </svg>
)
export default RuleIcon
