import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox () {
  return(
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>Finish one cycle to receive a challenge</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Level up by completing challenges.
        </p>
      </div>
    </div>
  )
}