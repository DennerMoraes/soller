import React, { useEffect, useRef } from 'react';
import './Hero.scss';
import Button from '../../common/Button/Button';
import ManFixes from "../../../assets/Hero/man-fixes.png";
import gsap from 'gsap';

function Hero({ title, description, descriptionBrief, name, website, imgProfile, altProfile }) {
    const imageRef = useRef(null);
    const infosHeroRef = useRef(null);

    const animateOnScroll = (element) => {
        gsap.fromTo(
            element,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 2.5, ease: 'power3.out' }
        );
    };

    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateOnScroll(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (imageRef.current) observer.observe(imageRef.current);
        if (infosHeroRef.current) observer.observe(infosHeroRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className='container-Hero' ref={infosHeroRef}>
            <img
                className="image-Hero"
                src={ManFixes}
                alt='man fixes solar panel'
            />

            <div className='section-Hero'>
                <div className='infos-Hero'>
                    <h1 className='title-Hero'>{title}</h1>
                    <p>{description}</p>
                    <Button label={'Request a Quote'} variation="line-purple" />
                </div>

                <div className='brief-Hero'>
                    <p>{descriptionBrief}</p>

                    <div className='profile'>
                        <img src={imgProfile} alt={altProfile} />
                        <div className='infos'>
                            <h4>{name}</h4>
                            <p>{website}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
