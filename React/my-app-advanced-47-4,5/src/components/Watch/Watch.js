import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increasingSteps = () => setSteps(steps + 1)
    console.log(steps)

    // ..............2nd option...............

    // const increasingSteps = () => {
    //     const newStepsCount = steps + 1
    //     setSteps(newStepsCount);
    // }
    // useEffect(() => {
    //     console.log(steps)
    // }, [steps])

    return (
        <div>
            <h1>This is my Smart Watch</h1>
            <h3>Watch Count: {steps}</h3>
            <button onClick={increasingSteps}>Click Me</button>
            <Display name="german" steps={steps}></Display>
        </div>
    );
};

export default Watch;