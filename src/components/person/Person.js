import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Person extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="card text-center mt-5">
                            <div className="card-body">
                                <h5 className="card-title">Person</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <Link to={"/persons/" + 1 + "/edit/"} className="btn btn-warning mr-2">Edit</Link>
                                <button className="btn btn-danger ml-2">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;