import React from 'react'
import Hero from '../component/hero'
import Banner from '../component/banner'

import { Link } from 'react-router-dom'; 
import Roomcontainer from '../component/Roomcontainer'
export default function Room() {
    return (
       <>
        <Hero hero = "roomsHero" >
              <Banner title = "our Roooms">
                 <Link to = "/" className = "btn-primary">Back to home</Link>
              </Banner>
        </Hero>
        <Roomcontainer/>
      </>
    );
}
