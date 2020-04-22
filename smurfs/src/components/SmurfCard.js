import React, {useContext} from 'react';
import smurfContext from '..';

function SmurfCard() {

    const smurf = useContext(smurfContext)

    // console.log('bk: SmurfCard: SmurfState: smurfState: ', smurf)

    return (
        <>
        {smurf.map(newSmurf => (
            <div key={newSmurf.id} className='Smurf'>
                <h4>{newSmurf.name}</h4>
                <p>Age: {newSmurf.age}</p>
                <p>Height: {newSmurf.height}</p>
            </div>
        ))}
        </>
    )
}

export default SmurfCard;