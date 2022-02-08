import Logo from '../header/Logo';
import LogoDot from '../header/LogoDot';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstaIcon';
import styles from '../../styles/Home.module.css';

export default function FooterContainer() {
  return (
    <div className={styles.footerContainer}>
      <Logo>
        mb
        <LogoDot style={{ color: 'var(--color-white)' }}>.</LogoDot>
      </Logo>
      <p style={{ color: 'var(--color-white)' }}>
        Designed & built by Martin Bolsønes
      </p>
      <div
        style={{ display: 'flex', flexDirection: 'row', gap: 'var(--size)' }}
      >
        <GithubIcon size={24} color='var(--color-white)' strokeWidth={1} />
        <LinkedinIcon size={24} color='var(--color-white)' strokeWidth={1} />
        <TwitterIcon size={24} color='var(--color-white)' strokeWidth={1} />
        <InstagramIcon size={24} color='var(--color-white)' strokeWidth={1} />
      </div>
    </div>
  );
}
