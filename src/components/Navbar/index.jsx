import style from './navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <p>caroline-conte</p>
      <ul className="container">
        <li><a href="#top">Top</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
