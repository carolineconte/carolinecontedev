import style from './Home.module.scss'

const Home = () => {
  return (
    <section id="top">
      <div className={style.headerContainer}>
        <img src="/profile.png" alt="Profile Picture" />

        <header className={style.header}>
          <section>
            <h1>Hello World!<br></br> I&apos;m <strong>Caroline Conte</strong>.</h1>
            <h2>FULL STACK DEVELOPER</h2>
          </section>

          <p>
          Ciao, il mio nome è Caroline Conte da Silva e sono una sviluppatrice Fullstack con sede a Torino, in Italia. Sono specializzata nello sviluppo Front-end e Back-end.
          Puoi dare un'occhiata ai miei lavori qui sotto.
          </p>

          <a href="#portfolio">Go to Portfolio</a>
        </header>
      </div>
    </section>
  )
}

export default Home