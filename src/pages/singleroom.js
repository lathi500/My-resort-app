import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../component/hero'
import Banner from '../component/banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../component/StyledHero'

export default class Singleroom  extends Component {
    constructor(props){
        super(props);
            this.state = {
                slug: this.props.match.params.slug,defaultBcg 
              };
        }
        static contextType = RoomContext;
    render() {
        const{ getRoom } = this.context; 
        const room = getRoom(this.state.slug);
        if(!room){
            return<div className = "error">
                <h3>no such room finde....</h3>
                <Link to = '/rooms' className = "btn-primary">Back to rooms</Link>
             </div>
        };
        const {name,description,size,capacity,price,extras,breakfast,pets,images} = room
    
        return <div>
        <>
            <StyledHero img = {images[0] || this.state.defaultBcg}>
             <Banner title = {`${name} room`}>
              <Link to = "/rooms" className = "btn-primary" >
                Back to Room
               </Link>
             </Banner>
            </StyledHero>
            <section className = "single-room">
                <div className = "single-room-images">
                   {images.map((item,index) => {
                       return <img key={index} src={item} alr={name}/>;
                   })}
                </div>
                <div className = "single-room-info">
                    <article className = "desc">
                        <h3>details</h3>
                        {description}
                    </article>
                    <article className = "info">
                       <h3>info</h3>
                       <h6>price : ${price} </h6>
                       <h6>size : {size} sqft</h6>
                       <h6>Max capacity: { capacity > 1 ? `${capacity} pepole` : `${capacity} person` }</h6>
                       <h6>{pets?"pets is allowed":"pets is not allowed"}</h6>
                       <h6>{breakfast && "brekfast is included"}</h6>
                    </article>
                </div>
             </section>
             <section className = "room-extras">
                 <h6>extras</h6>
                 <ul className = "extras">
                     {
                         extras.map((iteam,index) => {
                         return <li key = {index}>- {iteam} </li>;
                         })
                     }
                 </ul>
             </section>
        </>
        </div>
    }
}
