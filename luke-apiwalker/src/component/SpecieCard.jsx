import React from 'react';

const SpecieCard = (information) => {

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
                        <label>Classification: </label> 
                        <label>{ information.information.classification }</label>
                    </div>
                    <div>
                        <label>Designation: </label>
                        <label>{ information.information.designation }</label>
                    </div>
                    <div>
                        <label>Average Height: </label>
                        <label>{ information.information.average_height }</label>    
                    </div>
                    <div>
                        <label>Average Lifespan: </label>
                        <label>{ information.information.average_lifespan }</label>
                    </div>
                </React.Fragment>
            }
        </div>
    )
};

export default SpecieCard;
