/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import style from './cardProject.module.scss'

import { FaGithub } from "react-icons/fa6";

export const Card = ({ project }) => {

  const { id, title, description, thumbnail, tecnologies } = project


  return (
    <div className={style.CardContainer}>

      <img src={thumbnail} alt="" />
      <h3><a href="#">{title}</a></h3>
      <p className={style.cardDescription}>{description}</p>
      <div className={style.linksContainer}>
      <a href=""><FaGithub />: www.repositorio.com</a>
      <a href=""><FaGithub />: www.projetox.com</a>
      </div>
      <div className={style.tagsContainer}>
        {
          tecnologies.map(tecnologie => <p key={tecnologie}>{tecnologie}</p>)
        }
      </div>

      <Link to={`project/${id}`} className={style.btn}>Dettagli</Link>
   
    </div>
  )
}
