import styles from './styles.module.scss'

export function Player() {
 return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>
    <div className={styles.emptyPlayer}>
      <strong>Selecione um podcast para ouvir</strong>
    </div>

    <footer className={styles.empty}>
      <div className={styles.progess}>
        <span>00:00
          <div className={styles.emptySLider}>
            <span>00:00</span>
          </div>

          <div className={styles.buttons}>
            <button type="button">
              <img src="/shuffle.svg" alt="Embaralhar"/> 
            </button>
            <button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior"/> 
            </button>
            <button type="button" className={styles.Button}>
            <img src="/play.svg" alt="Tocar"/> 
            </button>
            <button type="button">
            <img src="/play-next.svg" alt="Tocar próxima"/> 
            </button>
            <button type="button">
            <img src="/repeat.svg" alt="Repetir"/>
            </button>
          </div>
        </span>
      </div>
    </footer>
    </div>
  )
}