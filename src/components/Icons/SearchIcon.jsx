import * as React from "react"
const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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
      d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm7.93.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
    />
  </svg>
)
export default SearchIcon
