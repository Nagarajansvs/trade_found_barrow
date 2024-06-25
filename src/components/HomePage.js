import React from 'react';
import Slider from './Slider';
import Aboutus from './Aboutus';
import Counter from './Counter';
import SuccessProject from './SuccessProject';
function HomePage() {
    return (
        <>
            <Slider/>
            <SuccessProject/>
            <Counter/>
            <Aboutus/>
        </>
    );
}

export default HomePage;
