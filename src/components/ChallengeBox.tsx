import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {
  const hasActiveChallenge = true;

  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header> Win 400 xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>New challenge</strong>
            <p>Get up and do a 3 minute walk</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
            >
              Failed
            </button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finish one cycle to receive a challenge</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Level up by completing challenges.
        </p>
      </div>
      )}
    </div>
  )
}