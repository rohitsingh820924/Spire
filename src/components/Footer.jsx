import React from 'react'

const Footer = () => {
  return (
    <footer className='h-svh flex items-end bg-white' id='section9'>
        <div className="container">
            <div className="grid grid-cols-6 mb-10">
                <h2 className='col-span-3'>The Spire</h2>
                <h2 className=''>Follow Us</h2>
                <h2 className='col-span-2'>Other Locations</h2>
            </div>
            <div className="grid grid-cols-6 text-xs text-gray-600">
                <ul className='flex gap-5 flex-col'>
                    <li>Spire Stack</li>
                    <li>Vendors(Technologies)</li>
                    <li>Resources</li>
                    <li>About Us</li>
                </ul>
                <ul className='flex gap-5 flex-col'>
                    <li>News & Events</li>
                    <li>Careers</li>
                    <li>Social Wall</li>
                    <li>Payments</li>
                </ul>
                <ul className='flex gap-5 flex-col'>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                    <li>Aspire with Spire</li>
                </ul>
                <ul className='flex gap-5 flex-col'>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
                <ul className='flex gap-5 flex-col'>
                    <li>Kuwait</li>
                    <li>Qatar</li>
                    <li>Egypt</li>
                    <li>Bahrain</li>
                </ul>
                <ul className='flex gap-5 flex-col'>
                    <li>Oman</li>
                    <li>Jordan</li>
                    <li>Kenya</li>
                    <li>Nigeria</li>
                </ul>
            </div>
            <div className='flex justify-between mt-20'>
                <h2>Copyright © 2024 Spire Solutions. All rights reserved.</h2>
                <div className='flex'>
                    <h2 className='mr-3 pr-3 border-r-2 border-black'>Privacy Policy</h2>
                    <h2>Site Map</h2>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer