import style from './skills.module.scss'
import { FaReact, FaHtml5, FaCss3Alt,FaNodeJs,FaSass,FaBootstrap } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaGitAlt,FaGithub,FaFigma } from "react-icons/fa";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Skills = () => {

  const skillsIcons = [
    {
    icon: <FaHtml5 />,
    title: 'HTML5',
    colorLogo: '#F1662A'
  },{
    icon: <FaCss3Alt />,
    title: 'CSS3',
    colorLogo: '#1572B6'
  },{
    icon: <IoLogoJavascript />,
    title: 'Javascript',
    colorLogo: '#F5DE19'
  },{
    icon: <FaReact />,
    title: 'ReactJs',
    colorLogo: '#53C1DE'
  },{
    icon: <TbBrandNextjs />,
    title: 'Nextjs',
    colorLogo: '#000000'
  },{
    icon: <FaNodeJs />,
    title: 'NodeJs',
    colorLogo: '#83CD29'
  },{
    icon: <SiMongodb />,
    title: 'Mongodb',
    colorLogo: '#10AA50'
  },{
    icon: <SiExpress />,
    title: 'Express',
    colorLogo: '#000000'
  },{
    icon: <SiTailwindcss />,
    title: 'Tailwind css',
    colorLogo: '#06B6D4'
  },{
    icon: <FaSass />,
    title: 'SASS',
    colorLogo: '#CD6799'
  },{
    icon: <FaGitAlt />,
    title: 'Git',
    colorLogo: '#DE4C36'
  },{
    icon: <FaGithub />,
    title: 'Github',
    colorLogo: '#000000'
  },{
    icon: <FaBootstrap />,
    title: 'Bootstrap',
    colorLogo: '#563D7C'
  },{
    icon: <FaFigma />,
    title: 'Figma',
    colorLogo: '#F24E1E'
  }
]

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 7, // Quantidade de slides a mostrar
  slidesToScroll: 7,
  className: 'slide',
  arrows: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      vertical: false,
      },
    },
    {
      breakpoint: 767, // Define outro ponto de quebra se necessário
      settings: {
        slidesToShow: 3, // Número de slides a mostrar em telas menores
      },
    },
  ],
};



  return (
    <section className={`${style.skillsSection} dark`}>
      <h2>My Skills </h2>
      <Slider  className='slider' {...settings}>
        {skillsIcons.map((skill) => (
          <div className={style.skill} key={skill.title}>
            <p style={{ color: skill.colorLogo }} className={style.icon}>
              {skill.icon}
            </p>
            <p className={style.title}>{skill.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  )
}
