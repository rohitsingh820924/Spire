import React from 'react'

const Connect = () => {
  return (
    <div className='connect h-svh' id='section8'>
        <div className="container flex flex-col h-svh justify-between">
           <div className='text-center pt-32'>
                    <h2 className='text-5xl text-center mb-20'>Connect with us and discover how we can help secure your assets online</h2>

            <a href="#" className='mx-auto inline-flex bg-white drop-shadow px-10 py-3 rounded-full gap-3 items-center'>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292847 10.2358L1.12447 11.0674L6.24533 5.94655L1.12447 0.825684L0.292847 1.6573L4.60531 5.94655" fill="black"/>
                </svg>Contact Us
            </a>
           </div>

            <div className='pb-16'>
            <div className="grid grid-cols-5 mb-10">
                <h2 className='col-span-1'>Say Hello!</h2>
                <h2 className='col-span-4 text-end'>Reach Us</h2>
            </div>
            <div className="grid grid-cols-5 text-xs text-gray-600">
                <ul className='flex gap-5 flex-col'>
                    <li>info@spiresolutions.com</li>
                    <li>+971 4 427 9940</li>
                </ul>
                <ul className='flex gap-5 flex-col col-span-2 text-end'>
                    <li>Spire Solutions - UAE</li>
                    <li>1504, Jumeirah Business Center 3. Cluster Y - Jumeirah Lake Towers, Dubai, United Arab Emirates</li>
                </ul>
                <ul className='flex gap-5 flex-col col-span-2 text-end'>
                    <li>Spire Solutions - KSA</li>
                    <li>Office 219, Aknaz Business Center,Prince Mohammed Bin Abdulaziz Rd ( Tahlia) Riyadh, Saudi Arabia</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Connect