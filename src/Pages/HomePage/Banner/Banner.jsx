import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Bannner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 overflow-hidden'>
            <div className='mx-auto' style={{ width: '70%'}}>
                <Carousel autoPlay={true} interval={2000} showThumbs={false} infiniteLoop={true}>
                    <div>
                        <img src="https://raw.githubusercontent.com/0rakib0/OnlineStor-Ecom-Client/main/src/assets/banner-2.png" />

                    </div>
                    <div>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-2cfcf33df21240a83951a4040ffaef1f-lq" />

                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/0rakib0/OnlineStor-Ecom-Client/main/src/assets/banner-3.png" style={{ height: '100%' }} />

                    </div>
                </Carousel>
            </div>
            <div className='h-12 mx-auto'>
                <img src="https://demo.smartaddons.com/templates/html/shoppystore/images/1403/banner72.jpg" height='100%' alt="" />
            </div>
        </div>
    )
}

export default Bannner