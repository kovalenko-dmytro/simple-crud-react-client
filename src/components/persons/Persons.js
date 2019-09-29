import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class Persons extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to={"/persons/" + 1} className="btn btn-primary">View</Link>
                    <Link to={"/persons/"+1 + "/edit"} className="btn btn-primary">Edit</Link>
                </nav>
                <p>Persons</p>
            </div>
        );
    }
}

export default Persons;