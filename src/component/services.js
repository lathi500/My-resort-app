import React, { Component } from 'react'
import Title from './Title' 
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state = {
        services :[
            {
              icons : <FaCocktail/>,
              title : "FREE COCKTAIL",
              info : "snd ud msniwfhd a,wfowej ,asfnoej ncibrg v,mfdier ,mcoivjrj!" 
            },
            {
                icons : <FaHiking/>,
                title : "HIKING",
                info : "snd ud msniwfhd a,wfowej ,asfnoej ncibrg v,mfdier ,mcoivjrj!" 
            },
            {
                icons : <FaShuttleVan/>,
                title : "SHUTTLE VAN'S",
                info : "snd ud msniwfhd a,wfowej ,asfnoej ncibrg v,mfdier ,mcoivjrj!" 
            },
            {
                icons : <FaBeer/>,
                title : "FREE BEARS",
                info : "snd ud msniwfhd a,wfowej ,asfnoej ncibrg v,mfdier ,mcoivjrj!" 
            }
           ]
        }
    render() { 
        return (
         <section className = "services">
              <Title title = "Services" />
            <div className = "services-center">
               {this.state.services.map((iteam, index) => {
                return (
                    <article key={index} className="services">
                      <span>{iteam.icons}</span>
                      <h6>{iteam.title}</h6>
                      <p>{iteam.info}</p>
                    </article>
                );
                })}
            </div>
         </section>
        )
    }
}
