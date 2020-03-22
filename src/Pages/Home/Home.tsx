import React, { Component } from 'react';
import { socket } from '../../services/socket.service';


interface IState {
    arr: any[];
}
class HomePage extends React.Component<{}, IState> {
    state = {
        arr: [1, 2, 3, 4]
    }
    componentDidMount() {
        socket.send();

        socket.recieve(this.pushNumber.bind(this));
    }

    pushNumber(d){
        console.log(`${d.nombre} se ha unido`);
        this.setState({arr: [...this.state.arr,`${d.nombre} se ha unido`]})
    }





    render() {
        return (
            <div>
                <h2>Bienvenido a Home</h2>
                {this.state.arr.map((e,i) => (<h2 key={i}>{e}</h2>))}
            </div>
        );
    }
}

export default HomePage;