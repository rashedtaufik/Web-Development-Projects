import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {

    const first = 250
    const second = 10
    const result = multiply(first, second);

    return (
        <div>
            <h3>This is my Shoes bill</h3>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;