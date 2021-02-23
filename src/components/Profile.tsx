import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/franciscovaz.png" alt="Francisco Vaz"/>
      <div>
        <strong>Francisco Vaz</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}