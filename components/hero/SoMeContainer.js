import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstaIcon";
import TwitterIcon from "../icons/TwitterIcon";
import GithubIcon from "../icons/GithubIcon";
import styles from "../../styles/Home.module.css";

export default function SoMeContainer() {
  return (
    <div className={styles.some_container}>
      {/* DRY - use map */}
      <a href="https://github.com/martinbolsnes">
        <GithubIcon size={54} strokeWidth={1} color="var(--color-tertiary)" />
      </a>
      <a href="https://www.linkedin.com/in/martin-bols%C3%B8nes-5973941b5/">
        <LinkedinIcon size={54} strokeWidth={1} color="var(--color-tertiary)" />
      </a>
      <a href="https://twitter.com/martinbolsnes">
        <TwitterIcon size={54} strokeWidth={1} color="var(--color-tertiary)" />
      </a>
      <a href="https://www.instagram.com/martinbolsnes/">
        <InstagramIcon
          size={54}
          strokeWidth={1}
          color="var(--color-tertiary)"
        />
      </a>
    </div>
  );
}
