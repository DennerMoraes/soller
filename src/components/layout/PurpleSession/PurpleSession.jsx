import './PurpleSession.scss';
import React from 'react';
import TextTeaser from '../../common/TextTeaser/TextTeaser';
import Button from '../../common/Button/Button';
import Carousel from '../../common/Carousel/Carousel';

const PurpleSection = ({ carouselData, subtitle, title, description, variation }) => {
    return (
        <div className="purple-session">
            <div className="title-button">
                <TextTeaser
                    subtitle={subtitle}
                    title={title}
                    description={description}
                    variation={variation}
                />
                <Button label={'Request a Quote'} variation="line-yellow" />
            </div>
            <Carousel carouselData={carouselData} />
        </div>
    );
};

export default PurpleSection;