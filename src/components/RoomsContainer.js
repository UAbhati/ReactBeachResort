import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomsConsumer } from '../Context';
import Loading from './Loading';

function RoomContainer({context}){
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomsConsumer(RoomContainer)
// method 2
//     return (
//         <RoomConsumer>
//             {
//             value => {
//                 const {loading,sortedRooms,rooms} = value;
//                 if(loading){
//                     return <Loading />;
//                 }
//                 return (
//                     <div>
//                         Hello Froms Rooms container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 ) 
//             }
//             }
//         </RoomConsumer>
//     )
// }
