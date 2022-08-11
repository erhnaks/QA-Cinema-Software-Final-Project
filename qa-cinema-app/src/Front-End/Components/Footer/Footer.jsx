import React from 'react';

const Footer = () => {

    return (
        <>
           <footer>
            <div className="container-fluid">
                <div className="row bg-dark p-2 d-flex justify-content-between text-white align-items-center">

                    <div className="col-4"><h5>© 2022 Copyright: Team Foxtrot</h5></div>

                    <div className='col-3'>
                        <h5>Follow Us!</h5>
                        <ul style={{listStyleType: "none", margin: 0, padding: 0}}>
                            <li style={{float: "left"}}>
                                <a className="btn btn-outline-info btn-floating m-1" href="https://twitter.com/" target="_blank" rel='noreferrer' role="button">Twitter</a>    
                            </li>
                            <li style={{float: "left"}}><a className="btn btn-outline-primary btn-floating m-1" href="https://en-gb.facebook.com/" target="_blank" rel='noreferrer' role="button">Facebook</a> </li>
                            <li style={{float: "left"}}><a className="btn btn-outline-danger btn-floating m-1" href="https://www.instagram.com/" target="_blank" rel='noreferrer' role="button">Instagram</a> </li>
                        </ul>
                    </div>

                </div>
            </div>
           </footer>
        </>
    )

}

export default Footer;
