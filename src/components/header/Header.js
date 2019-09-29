import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-dark" to="/">Home</Link>
                    <Link className="p-2 text-dark" to="/persons">Persons</Link>
                    <Link className="p-2 text-dark" to="/persons/create">Create person</Link>
                </nav>
            </div>
        );
    }
}

export default Header;