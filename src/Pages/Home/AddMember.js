import React from 'react';
import {Button} from 'react-bootstrap';
import './home.css';

function AddMember() {
    return (
        <>
            <div className="container-fluid" id="back-img">
                <div className="container">
                    <h2>WANT TO KNOW MORE ABOUT OUR COMPANY? CURIOUS WHAT ELSE WE DO?</h2>
                    <br/>
                    <Button variant="danger">Become a Member</Button>
                </div>
            </div>
        </>
    )
}

export default AddMember
