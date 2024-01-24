import style from './FixedIcons.module.scss'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

import pdf from "../../assets/resume_completo_compressed.pdf"

export const FixedIcons = () => {


  return (
    <section>
      <ul className={style.FixedContainer}>
        <li>
          <a href='https://github.com/carolineconte'
            target="_blank" rel='noreferrer'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/caroline-contedasilva/'
            target="_blank" rel='noreferrer'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={pdf} target="_blank" rel='noreferrer'><IoDocumentText /></a>
        </li>
      </ul>
    </section>
  )
}
