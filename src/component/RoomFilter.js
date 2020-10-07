import React from 'react'
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';


const getUnique = (items,value) => {
    return [...new Set([items].map(item => item[value]))]
}

export default function RoomFilter(rooms) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    let types = getUnique(rooms, 'type');
    

    types = ['all', ...types];

    types = types.map((item, index) => { 
    return (
    <option value={item} key={index}>
      {item}
    </option>);  
    }); 
    let people = getUnique(rooms, 'capacity');
 
    people = people.map((item, index) => { 
      return (
      <option value={item} key={index}>
        {item}
      </option>);  
      }); 


    return <section className = "filter-container">
          <Title title = "Search Rooms" />
          <form className = "filter-form">
            <div className = "form-group">
             <label htmlfor = "type" >Room Type</label>
             <select
              name = "type"
              id = "type"
              value = {type}
              className = "form-control"
              onChange = {handleChange}
             >
              {types}
              </select>
            </div>

            <div className = "form-group">
             <label htmlfor = "capacity" >Capacity</label>
             <select
              name = "capacity"
              id = "capacity"
              value = {capacity}
              className = "form-control"
              onChange = {handleChange}
             >
              {people}
              </select>
            </div>
            <div className = "form-group">
             <label htmlfor = "price" >Room price ${price}</label>
             <input
              type = "range"
              name = "price"
              min={minPrice}
              max={maxPrice}
              id ="price"
              value={price}
              className = "form-control"
              onChange = {handleChange}
             />
              
             </div>
          </form>
    </section>
}
