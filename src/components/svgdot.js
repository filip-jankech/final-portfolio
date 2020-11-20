
import React from "react"

const SvgDot = ({ className }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z" fill="url(#paint0_linear)"/>
      <defs>
      <linearGradient id="paint0_linear" x1="23.9077" y1="4.30769" x2="3.01539" y2="24.5538" gradientUnits="userSpaceOnUse">
      <stop stop-color="#30CFD0"/>
      <stop offset="1" stop-color="#2C3E50"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgDot