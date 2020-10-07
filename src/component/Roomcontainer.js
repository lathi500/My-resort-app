import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList'
import {WithRoomConsumer} from '../context'
import Loading from '../loading'


  function RoomContainer({context}){
    
    const {loading,sortedRooms,room} = context;
    if(loading){
        return <Loading />;
    }
    return (
     <>
        
         <RoomFilter room = {room}/>
         <RoomList room = {sortedRooms} />
     </>
    );
}
export default WithRoomConsumer(RoomContainer);




















