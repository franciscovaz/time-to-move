import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {
  const {activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header> Win {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
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