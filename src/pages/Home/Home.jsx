import React from 'react';
import './Home.scss';

//Components
import TextTeaser from "../../components/common/TextTeaser/TextTeaser";
import Hero from "../../components/common/Hero/Hero";
import GridImage from '../../components/layout/GridImage/GridImage';
import PurpleSection from '../../components/layout/PurpleSession/PurpleSession';
import LightPurpleSection from '../../components/layout/LightPurpleSession/LightPurpleSession';
import ImageVariations from "../../components/common/ImageVariations/ImageVariations";

//Images
import PhotoProfile from "../../assets/Hero/perfil-icon.jpg";
import ImgDesktop from "../../assets/Items/Desktop.svg";
import ImgDesktopMobile from "../../assets/Items/DesktopMobile.svg";
import PurpleCircle from "../../assets/Icons/PurpleCircle.svg";
import OrangeCircle from "../../assets/Icons/OrangeCircle.svg";
import PurpleBean from "../../assets/TextImages/PurpleBean.svg";
import PurplePhone from "../../assets/TextImages/PurplePhone.svg";
import YellowBean from "../../assets/TextImages/YellowBean.svg";
import YellowPhone from "../../assets/TextImages/YellowPhone.svg";
import MacBook from '../../assets/Items/MacBook.svg';
import PurpleCircle2 from '../../assets/Icons/PurpleCircle2.svg';

//Data
import carouselData from '../../data/carouselData';
import items from '../../data/textGridData';

function Home() {
  return (
    <div className="container">
      <Hero altHero={'man fixes sollar panel'} title={'Get the Sun to Power Your Home'} description={'Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.'} descriptionBrief={'“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”'} name={'Rwanda Melflor'} website={'zerowaste.com'} imgProfile={PhotoProfile} altProfile={'smile girl'} />

      <TextTeaser subtitle={'No more waste'} title={'Pick the Sun'} description={'Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.'} />

      <ImageVariations srcImageDesktop={ImgDesktop} srcImageMobile={ImgDesktopMobile} altImage='Desktop screen' srcAux1={OrangeCircle} altAux1="Orange Circle" srcAux2={PurpleCircle} altAux2="Purple Circle" variation={1} />

      <GridImage
        srcImageMobile={PurplePhone}
        altImage="Phone"
        srcAux1={PurpleBean}
        altAux1="Purple bean"
        variation={2}
        subtitle="Services"
        title="Personalized services"
        description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        items={items}
      />

      <GridImage
        srcImageMobile={YellowPhone}
        altImage="Phone"
        srcAux1={YellowBean}
        altAux1="YellowBean"
        variation={3}
        subtitle="Services"
        title="Personalized services"
        description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        items={items}
        side={'left'}
      />

      <PurpleSection
        carouselData={carouselData}
        subtitle="Join other Sun harvesters"
        title="Make something awesome"
        description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo."
        variation="purple"
      />

      <LightPurpleSection
        subtitle="Get the Sun to power your home"
        title="All the power that you need for your house is now available"
        variation="purple"
        srcImageMobile={MacBook}
        altImage="Macbook"
        srcAux1={PurpleCircle2}
        altAux1="Purple Circle"
      />
    </div>
  );
}

export default Home;
