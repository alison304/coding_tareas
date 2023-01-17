import React from 'react';

const PeopleCard = (information) => {

    if(information.information === undefined) {
        return (null);
    }

    return (
        <div>
            {
                <React.Fragment>
                    <p style={{color:'blue'}}>{ information.information.name }</p>
                    <div>
                        <label style={{color:'blue'}}>Height :</label> 
                        <label style={{color:'blue'}}>{ information.information.height }</label>
                    </div>
                    <p style={{color:'blue'}}>{ information.information.mass }</p>    
                    <p style={{color:'blue'}}>{ information.information.hair_color }</p>
                </React.Fragment>
            }
        </div>
    )
};

export default PeopleCard;
