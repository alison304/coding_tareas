import React from 'react';

const VehicleCard = (information) => {

    if(information.information === undefined) {
        return (null);
    }

    return (
        <div>
            {
                <React.Fragment>
                    <br/>
                    <p style={{fontWeight:'bold', fontSize: '25px'}}>{ information.information.name }</p>
                    <br/>
                    <div>
                        <label>Consumables: </label> 
                        <label>{ information.information.consumables }</label>
                    </div>
                    <div>
                        <label>Manufacturer: </label>
                        <label>{ information.information.manufacturer }</label>
                    </div>
                    <div>
                        <label>Model: </label>
                        <label>{ information.information.model }</label>    
                    </div>
                    <div>
                        <label>Passengers: </label>
                        <label>{ information.information.passengers }</label>
                    </div>
                </React.Fragment>
            }
        </div>
    )
};

export default VehicleCard;
