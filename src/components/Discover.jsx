import React from 'react';

const Discover = () => {
    let discoverImg = [];

    for (let i = 48488; i <= 48521; i++) {
        discoverImg.push(<img className='mx-auto' src={`/discover_icons/${i}.png`} alt={i} key={i} />);
    }

    return (
        <div className='Discover h-svh flex' id='section7'>
            <div className="container">
                <h2 className='text-5xl text-center mb-20'>Discover <br /> Our Technologies</h2>
                <div className="grid grid-cols-7 gap-5">
                    {discoverImg}
                </div>
            </div>
        </div>
    );
}

export default Discover;
