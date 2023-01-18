import React from 'react';

const PlanetCard = (information) => {

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
                        <label>Climate: </label> 
                        <label>{ information.information.climate }</label>
                    </div>
                    <div>
                        <label>Gravity: </label>
                        <label>{ information.information.gravity }</label>
                    </div>
                    <div>
                        <label>Orbital Period: </label>
                        <label>{ information.information.orbital_period }</label>    
                    </div>
                    <div>
                        <label>Terrain: </label>
                        <label>{ information.information.terrain }</label>
                    </div>
                </React.Fragment>
            }
        </div>
    )
};

export default PlanetCard;
