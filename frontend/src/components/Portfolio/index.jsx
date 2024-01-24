import style from './Portfolio.module.scss'
import { Card } from "./Card"
import { useEffect, useState } from 'react';
export const Portfolio = () => {

  const [projects, setprojects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../db.json');
        const data = await response.json();
        setprojects(data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, [setprojects]);

  console.log(projects)

  if (!projects) {
    return <p>Carregando...</p>
  }

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