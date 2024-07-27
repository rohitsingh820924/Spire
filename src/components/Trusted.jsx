import React from 'react'

const Trusted = () => {
  return (
    <div className='trusted h-svh flex section' id='section4'>
        <div className="container">
            <div className="grid grid-cols-2">
                <div className='me-40'>
                    <h2 className='text-4xl mb-4'>MEA's Trusted Partner for Unique Cybersecurity, Cloud and Big Data Solutions</h2>
                    <p className='mb-4'>We help Governments, Banking & Financial Institutions, Telcos, Oil & Gas, Utilities, and Large Enterprises accelerate digital transformation, enhance cyber security and enable data privacy with 'real' solutions that solve 'real' problems.</p>
                    <a href="#" className='next-arrow'>
                        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0239258 9.78902L0.855545 10.6206L5.97641 5.49977L0.855545 0.378906L0.0239258 1.21053L4.33639 5.49977" fill="black"/>
                        </svg>
                        Discover More About Spire</a>
                </div>
                <div className='grid grid-cols-2 me-40 gap-40'>
                    <div>
                        <span className='text-5xl'>1000+</span>
                        <p className='text-sm'>organizations secured</p>
                    </div>
                    <div>
                        <span className='text-5xl'>16+</span>
                        <p className='text-sm'>years of expertise</p>
                    </div>
                    <div>
                        <span className='text-5xl'>10+</span>
                        <p className='text-sm'>countries operating in</p>
                    </div>
                    <div>
                        <span className='text-5xl'>40+</span>
                        <p className='text-sm'>industry awards and accolades and accolades</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trusted