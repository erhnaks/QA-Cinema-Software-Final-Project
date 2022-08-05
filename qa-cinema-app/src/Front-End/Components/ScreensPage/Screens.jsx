import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import screenStandard from "../../../Resources/images/Seats_Standard.jpg";
import screenLuxe from "../../../Resources/images/Seats_Luxe.jpg";

const Screens = () => {

    return (
        <>
            <Header></Header>
            <div className='container fluid p-3'>
                <h1>Screens</h1>
                <div className='row'>
                    <h3>Standard Screen</h3>
                    <div className="col-6">

                    </div>
                    <div className="col-6">
                        <img src={screenStandard} alt='screen standard' width="100%"/>                   
                    </div>
                </div>
                <div className='row'>
                    <h3>Luxe Screen</h3>
                    <div className="col-6">

                    </div>
                    <div className="col-6">
                        <img src={screenLuxe} alt='screen standard' width="100%"/>                   
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    )



}

export default Screens;