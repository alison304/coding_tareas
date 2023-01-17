import React from 'react';

const ErrorCard = () => {

    return (
        <div>
            {
                <React.Fragment>
                    <label style={{color:'blue'}}>Estos no son los droides que está buscando</label> 
                    <picture>
                        <img src="/assets/images/obiwan.webp" alt="obiwan"/>
                    </picture>
                </React.Fragment>
            }
        </div>
    )
};

export default ErrorCard;
