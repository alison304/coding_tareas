import React from 'react';

const FilmCard = (information) => {

    if(information.information === undefined) {
        return (null);
    }

    return (
        <div>
            {
                <React.Fragment>
                    <br/>
                    <p style={{fontWeight:'bold', fontSize: '25px'}}>{ information.information.title }</p>
                    <br/>
                    <div>
                        <label>Director: </label> 
                        <label>{ information.information.director }</label>
                    </div>
                    <div>
                        <label>Producer: </label>
                        <label>{ information.information.producer }</label>    
                    </div>
                    <div>
                        <label>Release Date: </label>
                        <label>{ information.information.release_date }</label>
                    </div>
                </React.Fragment>
            }
        </div>
    )
};

export default FilmCard;
