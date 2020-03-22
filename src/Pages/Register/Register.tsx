import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



interface IState {
    isLogged: boolean;
    name:string;
}
class RegisterPage extends React.Component<{}, IState> {


    state: IState = {
        isLogged: false,
        name: ""
    }

    componentDidMount() {

    }


    goToHome(){
        localStorage.setItem("name",this.state.name);
        this.setState({isLogged: true})
    }


    render() {

        if (!this.state.isLogged) {

            return (
                <div className="register-page-container">

                    <div className="content">
                        <img src="./img/Logo.png" alt="Logo" />
                        <h1>Tutti Frutti</h1>
                        <p>Diversion</p>

                        <input value={this.state.name} onChange={e=>{this.setState({name: e.target.value})}} className="input-large" type="text" placeholder="Ingrese su nombre" />
                        <button onClick={this.goToHome.bind(this)} className="btn-primary normal">Ingresar</button>
                    </div>

                </div>

            );
        }
        return <Redirect to="/home" />
    }
}

export default RegisterPage;