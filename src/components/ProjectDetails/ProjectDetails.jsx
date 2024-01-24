import style from './ProjectDetails.module.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { projectsList } from '../../state/atom';


export const ProjectDetail = () => {
  const { id } = useParams();
  const projects = useRecoilValue(projectsList)
  const [project, setProject] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Quantidade de slides a mostrar
    slidesToScroll: 1,
    className: 'slide',
    arrows: false,
    dots: true
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('../../../db.json');
  //       const data = await response.json();
  //       setProjects(data);

  //     } catch (error) {
  //       console.error('Erro ao carregar dados:', error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  useEffect(() => {
    // Verifique se projects está definido antes de filtrar
    if (projects) {
      const selectedProject = projects.find(p => p.id == id);
      setProject(selectedProject || null);
    }
  }, [id, projects]);

  if (!projects) {
    return <p>Carregando...</p>;
  }

  // Verifique se o projeto está definido antes de acessar suas propriedades
  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  const haveNext = (projects.length > id)
  const next = parseFloat(id) + 1
  const havePrevious = (id > 1)
  const previous = parseFloat(id) - 1
  console.log(havePrevious)

  return (
    <div className={style.projectDetailsContainer}>
      <header>
        <Slider className={style.img} {...settings}>
          {project.imgs.map((img, i) => (
            <img key={i} src="../projects/spotify/thumb.png" alt="" />
          ))}
        </Slider>
      </header>

      <h1>{project.title}</h1>
      <h2>{project.description}</h2>
      <p>{project.detail}</p>
      <h3>Repository: <a target="_blank" rel='noreferrer' href={project.linkRep}>github.com/mmmm</a></h3>
      <h3>Link project: <a target="_blank" rel='noreferrer' href={project.linkProj}>github.com/mmmm</a>  </h3>
      <div className={style.navigationLinks}>
        {havePrevious && <Link to={`/project/${previous}`}>Progetto precedente</Link>}
        {haveNext && <Link to={`/project/${next}`}>Prossimo progetto</Link>}
        <Link to={`/`}>Ritorna alla home page</Link>
      </div>
    </div>
  );
};