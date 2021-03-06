import React, { Component } from 'react'
import items from "./data";
import { FaLastfmSquare, FaAllergies } from 'react-icons/fa';

const RoomContext = React.createContext();
export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
    }

    formatData() {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }

    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };

    handleChange = event => {
        const target = event.target
        const name = event.target.name
        const value = event.type === "checkbox" ? target.checked : target.value;
        this.setState(
            {
                [name]: value
            },
            this.filterRooms
        );
    };
    filterRooms = () => {
        let {   
            rooms, type, capacity, price, maxSize, minSize, breakfast, pets
        } = this.state

        let tempRooms = [...rooms];
        capacity =parseInt(capacity)
        price =parseInt(price)
                
        

        if (type !== 'all') {
            tempRooms = tempRooms.filter(rooms = rooms.type === type)
        }

        if (capacity !== 1) {
            tempRooms = tempRooms.filter(rooms = rooms.capacity >= capacity)
        }
        tempRooms = tempRooms.filter(rooms = rooms.price <= price)
        this.setState({
            sortedRooms: tempRooms
        })
    };

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handlChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function WithRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}
export { RoomConsumer, RoomContext };
