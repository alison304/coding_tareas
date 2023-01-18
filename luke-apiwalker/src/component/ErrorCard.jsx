import React from 'react';

const ErrorCard = () => {

    return (
        <div>
            {
                <React.Fragment>
                    <br/>
                    <label style={{fontWeight:'bold', color:'blue'}}>Estos no son los droides que está buscando</label>
                    <br/><br/>
                    <picture>
                        <img src="/assets/images/obiwan.webp" alt="obiwan"/>
                    </picture>
                </React.Fragment>
            }
        </div>
    )
};

export default ErrorCard;
