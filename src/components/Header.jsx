import React from 'react'
import Logo from '../assets/spire-logo.svg'

const Header = () => {
  return (
    <header className='bg-white fixed w-full top-0 z-10'>
      <div className="top-header bg-gary-bg text-gray-txt text-xs">
        <div className="container p-3">
          <div className='flex justify-between items-center'>
            <ul className='flex gap-5'>
                <li>Call Us +971 4 427 9940</li>
            </ul>

            <ul className='flex gap-5 items-center'>
              <li>About</li>
              <li>News & Events</li>
              <li>Careers</li>
              <li>Social Wall</li>
              <li>Payments</li>
              <li>Blogs</li>
              <li>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8319 9.2493L8.90144 7.32449C9.5243 6.53098 9.86226 5.55109 9.86101 4.54232C9.86101 2.03367 7.82734 0 5.31869 0C2.81003 0 0.776367 2.03367 0.776367 4.54232C0.776367 7.05097 2.81003 9.08464 5.31869 9.08464C6.32745 9.08589 7.30735 8.74793 8.10086 8.12507L10.0257 10.0556C10.1323 10.163 10.2774 10.2235 10.4288 10.2235C10.5802 10.2235 10.7253 10.163 10.8319 10.0556C10.9394 9.94895 10.9999 9.80382 10.9999 9.65243C10.9999 9.50103 10.9394 9.35591 10.8319 9.2493ZM1.91195 4.54232C1.91195 2.66083 3.4372 1.13558 5.31869 1.13558C7.20018 1.13558 8.72543 2.66083 8.72543 4.54232C8.72543 6.42381 7.20018 7.94906 5.31869 7.94906C3.4372 7.94906 1.91195 6.42381 1.91195 4.54232Z" fill="#939393"/>
                </svg>
              </li>
            </ul>
            </div>
        </div>
      </div>
        <div className="container p-3 text-sm">
        <div className='grid grid-cols-3 items-center'>
        <div>
            <ul className='flex gap-5'>
                <li>Spire Stack</li>
                <li>Vendors (Technologies)</li>
            </ul>
        </div>
        <div className="logo">
          <img className='mx-auto' src={Logo} alt="" />
        </div>
        <div className='text-end'>
            <ul className='flex gap-5 justify-end'>
                <li>Resources</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
        </div>
    </header>
  )
}

export default Header