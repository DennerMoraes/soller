import './Home.scss';
import TextGrid from "../components/TextGrid/TextGrid";
import TextTeaser from "../components/TextTeaser/TextTeaser";
import { ReactComponent as Placeholder } from '../assets/Icons/placeholder.svg';
import Placeholder2 from '../assets/Icons/placeholder.svg';
import Hero from "../components/Hero/Hero";
import PhotoProfile from "../assets/Hero/perfil-icon.jpg";
import ImgDesktop from "../assets/Items/Desktop.svg";
import ImgDesktopMobile from "../assets/Items/DesktopMobile.svg";
import ImageVariations from "../components/ImageVariations/ImageVariations";
import PurpleCircle from "../assets/Icons/PurpleCircle.svg";
import OrangeCircle from "../assets/Icons/OrangeCircle.svg";
import PurpleBean from "../assets/TextImages/PurpleBean.svg";
import PurplePhone from "../assets/TextImages/PurplePhone.svg";
import YellowBean from "../assets/TextImages/YellowBean.svg";
import YellowPhone from "../assets/TextImages/YellowPhone.svg";
import Button from '../components/Button/Button';
import Carousel from '../components/Carousel/Carousel';
import MacBook from '../assets/Items/MacBook.svg';
import PurpleCircle2 from '../assets/Icons/PurpleCircle2.svg';

function Home() {
  const items = [
    { title: 'Et mauris', description: 'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.', icon: <Placeholder /> },
    { title: 'Eget sit', description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.', icon: <Placeholder /> },
    { title: 'Imperdiet pellentesque', description: 'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.', icon: <Placeholder /> },
    { title: 'Non libero', description: 'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.', icon: <Placeholder /> },
  ];

  const carouselData = [
    {
      name: "Jane Cooper",
      position: "10KWh",
      description: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Ralph Edwards",
      position: "32KWh",
      description: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Courtney Henry",
      position: "6KWh",
      description: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Cameron Williamson",
      position: "12KWh",
      description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Cameron Williamson",
      position: "12KWh",
      description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Cameron Williamson",
      position: "12KWh",
      description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Cameron Williamson",
      position: "12KWh",
      description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Cameron Williamson",
      position: "12KWh",
      description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    },
    {
      name: "Cameron Williamson",
      position: "12KWh",
      description: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
      image: "https://via.placeholder.com/150x150?text=João",
      icon: Placeholder2
    }
  ];

  return (
    <div className="container">
      <Hero altHero={'man fixes sollar panel'} title={'Get the Sun to Power Your Home'} description={'Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.'} descriptionBrief={'“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”'} name={'Rwanda Melflor'} website={'zerowaste.com'} imgProfile={PhotoProfile} altProfile={'smile girl'} />
      <TextTeaser subtitle={'No more waste'} title={'Pick the Sun'} description={'Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.'} />
      <ImageVariations srcImageDesktop={ImgDesktop} srcImageMobile={ImgDesktopMobile} altImage='Desktop screen' srcAux1={OrangeCircle} altAux1="Orange Circle" srcAux2={PurpleCircle} altAux2="Purple Circle" variation={1} />
      <div className='grid-image order'>
        <ImageVariations srcImageMobile={PurplePhone} altImage='Phone' srcAux1={PurpleBean} altAux1="Purple bean" variation={2} />
        <div className='title-text'>
          <TextTeaser subtitle={'Services'} title={'Personalized services'} description={'Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.'} />
          <TextGrid items={items} />
        </div>
      </div>
      <div className='grid-image'>
        <div className='title-text'>
          <TextTeaser subtitle={'Services'} title={'Personalized services'} description={'Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.'} />
          <TextGrid items={items} />
        </div>
        <ImageVariations srcImageMobile={YellowPhone} altImage='Phone' srcAux1={YellowBean} altAux1="YellowBean" variation={3} />
      </div>
      <div className='purple-bg'>
        <div className='purple-session'>
          <div className='title-button'>
            <TextTeaser subtitle={'Join other Sun harvesters'} title={'Make something awesome'} description={'Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.'} variation='purple' />
            <Button label={'Request a Quote'} variation="line-yellow" />
          </div>
        </div>
        <Carousel carouselData={carouselData} />
      </div>
      <div className='purple-session bg-light'>
        <div className='title-button'>
          <TextTeaser subtitle='Get the Sun to power your home' title='All the power that you need for your house is now available' variation='purple' />
          <div className='button-text'>
            <Button label={'Request a Quote'} variation="line-yellow" />
            <p className='text-purple-sesion'>Egestas fringilla aliquam leo</p>
          </div>
        </div>
        <ImageVariations srcImageMobile={MacBook} altImage='Macbook' srcAux1={PurpleCircle2} altAux1="Purple Circle" variation={4} />
      </div>
    </div>
  );
}

export default Home;
