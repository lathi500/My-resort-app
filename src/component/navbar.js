import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    handleToggle = () => { 
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />
                        </Link>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/rooms">ROOMS</Link>
                            </li>
                        </ul>

                        <button type="button" className="nav-icon" onClick={this.handleToggle}>
                          <FaAlignRight className="nav-icon" />
                        </button>
                        
                        
                    </div>

                </div>
            </nav>
        );
    }
}
