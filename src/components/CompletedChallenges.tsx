import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return(
    <div className={styles.completedChallengesContainer}>
      <span>Completed challenges</span>
      <span>05</span>
    </div>
  )
}