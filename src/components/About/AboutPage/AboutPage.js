import React from 'react';
import Android from '../Android/Android';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import Shop from '../Shop/Shop';
import StorySection from '../StorySection/StorySection';

const AboutPage = () => {
    return (
        <div>
            <Header></Header>
            <StorySection></StorySection>
            <MainSection></MainSection>
            <Shop></Shop>
            <Android></Android>
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;