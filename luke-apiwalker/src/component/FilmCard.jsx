import React from 'react';

const FilmCard = (information) => {

    if(information.information === undefined) {
        return (null);
    }

    return (
        <div>
            {
                <React.Fragment>
                    <p style={{color:'blue'}}>{ information.information.title }</p>
                    <div>
                        <label style={{color:'blue'}}>Director :</label> 
                        <label style={{color:'blue'}}>{ information.information.director }</label>
                    </div>
                    <p style={{color:'blue'}}>{ information.information.producer }</p>    
                    <p style={{color:'blue'}}>{ information.information.release_date }</p>
                </React.Fragment>
            }
        </div>
    )
};

export default FilmCard;
