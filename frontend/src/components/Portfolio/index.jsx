import style from './Portfolio.module.scss'
import { Card } from "./Card"
import { useRecoilValue } from 'recoil';
import { projectsList } from '../../state/atom';
export const Portfolio = () => {

  const projects = useRecoilValue(projectsList)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('../../../db.json');
  //       const data = await response.json();
  //       setprojects(data);
  //     } catch (error) {
  //       console.error('Erro ao carregar dados:', error);
  //     }
  //   };

  //   fetchData();
  // }, [setprojects]);

  // console.log(projects)

  // if (!projects) {
  //   return <p>Carregando...</p>
  // }

  return (
    <section id='portfolio' className={style.portfolioContainer}>
      <h2>Ecco alcune cose che ho fatto di recente.</h2>
      <div className={style.portfolioCardsContainer}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};