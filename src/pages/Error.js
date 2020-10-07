import React from 'react'
import Hero from '../component/hero'
import Banner from '../component/banner'
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <Hero hero="defaultHero">
        <Banner title="Error : 404" subtitle="page not found">
            <Link to="/" className="btn-primary">
                Back to home
        </Link>
        </Banner>
       </Hero>
    )
}
