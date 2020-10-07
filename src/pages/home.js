import React from 'react'
import Hero from '../component/hero'
import Banner from '../component/banner'
import Services from '../component/services'
import FeaturedRoom from '../component/FeaturedRoom'


import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="delux rooms start at $299">
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
          <Services />
          <FeaturedRoom/>
        </>
    );
}
