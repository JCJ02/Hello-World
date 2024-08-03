import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-[10px] text-[#262626] py-[1rem]">
        <label className="font-sourceCodePro text-sm md:text-md">Implemented by: John Carlo P. Jacobe</label>
        <div className="flex flex-col items-center">
            <label className="font-inter text-xs md:text-md">© Copyright 2024 JCJ02.</label>
            <label className="font-inter text-xs md:text-md">ALL RIGHTS RESERVED.</label>
        </div>
    </footer>
  )
}

export default Footer