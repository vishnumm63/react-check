import React from 'react';
import { Link } from 'react-router-dom';
// import loginpage from './Loginpage';
// import loginpage from './Loginpage';

// import Loginpage from './Loginpage'
export default function navbar() {

    const design={
        borderRadius: "10px",
        marginLeft: "10px"
    }
    const layout={
        marginLeft:"980px"
    }
    const main={
        marginLeft: "100px"
    }
    

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid" style={main}>
                    <Link className="navbar-brand" to="/">AIRBNB</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={layout}>
                        <div className="d-flex">
                            
                            <Link type='button' className='btn btn-outline-info' style={design} to="Loginpage" > Login </Link>
                            <Link className="btn btn-outline-success" type="submit" style={design} to="/Register" >Register</Link>
                           
                            
                            
                        </div>
                        
                    </div>
                </div>
            </nav>
           
        </>
    );
}
