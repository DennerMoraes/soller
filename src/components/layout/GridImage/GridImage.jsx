import './GridImage.scss';
import React from 'react';
import ImageVariations from '../../common/ImageVariations/ImageVariations';
import TextTeaser from '../../common/TextTeaser/TextTeaser';
import TextGrid from '../../common/TextGrid/TextGrid';

const GridImage = ({ srcImageMobile, altImage, srcAux1, altAux1, variation, subtitle, title, description, items, side }) => {
    return (
        <div className={`grid-image ${side}`}>
            <ImageVariations
                srcImageMobile={srcImageMobile}
                altImage={altImage}
                srcAux1={srcAux1}
                altAux1={altAux1}
                variation={variation}
            />
            <div className="title-text">
                <TextTeaser
                    subtitle={subtitle}
                    title={title}
                    description={description}
                />
                <TextGrid items={items} />
            </div>
        </div>
    );
};

export default GridImage;