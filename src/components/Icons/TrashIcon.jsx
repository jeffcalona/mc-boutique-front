import * as React from "react"
const TrashIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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
      d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98m5.5-1.01.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3m3.35 4.17-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14m5.18 7.36h3.33m-4.16-4h5"
    />
  </svg>
)
export default TrashIcon
