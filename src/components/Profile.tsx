import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/franciscovaz.png" alt="Francisco Vaz"/>
      <div>
        <strong>Francisco Vaz</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }</p>
      </div>
    </div>
  )
}