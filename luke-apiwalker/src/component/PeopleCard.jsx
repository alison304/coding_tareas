import React from 'react';

const PeopleCard = (information) => {

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
                        <label>Height: </label> 
                        <label>{ information.information.height }</label>
                    </div>
                    <div>
                        <label>Hair Color: </label>
                        <label>{ information.information.hair_color }</label>
                    </div>
                    <div>
                        <label>Birth Year: </label>
                        <label>{ information.information.birth_year }</label>    
                    </div>
                    <div>
                        <label>Homeworld: </label>
                        <label>{ information.information.homeworld }</label>
                    </div>
                </React.Fragment>
            }
        </div>
    )
};

export default PeopleCard;
