import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('rashedData.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, [])

    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>

            {
                cosmetics.map(cosmetic1 =>
                    <Cosmetic cosmetic1={cosmetic1} key={cosmetic1.id}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;