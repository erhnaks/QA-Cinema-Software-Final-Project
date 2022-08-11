import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import screenStandard from "../../../Resources/images/Seats_Standard.jpg";
import screenLuxe from "../../../Resources/images/Seats_Luxe.jpg";
import seatingPlanStandard from "../../../Resources/images/Seating_Plan_Standard.png";
import seatingPlanLuxe from "../../../Resources/images/Seating_Plan_Luxe.png";

const Screens = () => {

    return (
        <>
            <Header></Header>
            <div className='container p-3 mt-2 drop-shadow' id='screensContainer'>
                <h1>Screens</h1>
                <hr />
                <div className='row'>
                    <h3>Standard Screen</h3>
                    <div className="col-6">
                    <img src={seatingPlanStandard} alt='screen standard' width="100%"/>   
                    </div>
                    <div className="col-6">
                        <img src={screenStandard} alt='screen standard' width="100%"/>                   
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <h3>Luxe Screen</h3>
                    <div className="col-6">
                    <img src={seatingPlanLuxe} alt='screen standard' width="100%"/>  
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