import './LightPurpleSession.scss';
import React from 'react';
import TextTeaser from '../../common/TextTeaser/TextTeaser';
import Button from '../../common/Button/Button';
import ImageVariations from '../../common/ImageVariations/ImageVariations';

const LightPurpleSection = ({ subtitle, title, variation, srcImageMobile, altImage, srcAux1, altAux1 }) => {
    return (
        <div className="lightpurple-session">
            <div className="title-button">
                <TextTeaser
                    subtitle={subtitle}
                    title={title}
                    variation={variation}
                />
                <div className="button-text">
                    <Button label={'Request a Quote'} variation="line-yellow" />
                    <p className="text-purple-sesion">Egestas fringilla aliquam leo</p>
                </div>
            </div>
            <ImageVariations
                srcImageMobile={srcImageMobile}
                altImage={altImage}
                srcAux1={srcAux1}
                altAux1={altAux1}
                variation={4}
            />
        </div>
    );
};

export default LightPurpleSection;