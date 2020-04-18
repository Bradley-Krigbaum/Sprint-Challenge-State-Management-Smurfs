import React from 'react';

function SmurfCard(props) {

    return (
        <>
            {console.log('bk: SmurfCard.js: SmurfCard: props: ', props)}

            <div key={props.smurf.id} className='Smurf'>
                <h4>{props.smurf.name}</h4>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
            </div>

        </>
    )
}

export default SmurfCard;