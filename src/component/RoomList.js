import React from 'react'
import Room from './Room'

export default function RoomList({room}) {
    if(room.length === 0){
            return (
               <div className = "empty-search">
                 <h3>your serched room is not Found....</h3>
               </div>
            )
        }
    return (
    <section className = "roomslist">
      <div className = "roomslist-center">
        {room.map(item => {
                return <Room key = {item.id} room = {item} />;
            })}
      </div>
   </section>
  );
}
