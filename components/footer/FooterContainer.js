import Logo from "../header/Logo";
import LogoDot from "../header/LogoDot";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstaIcon";
import styles from "../../styles/Home.module.css";

export default function FooterContainer() {
  return (
    <div className={styles.footerContainer}>
      <Logo>
        mb
        <LogoDot style={{ color: "var(--color-white)" }}>.</LogoDot>
      </Logo>
      <p style={{ color: "var(--color-white)" }}>
        Designed & built by Martin Bolsønes
      </p>
      <div
        style={{ display: "flex", flexDirection: "row", gap: "var(--size)" }}
      >
        {/* TODO: Use map */}
        <a href="https://github.com/martinbolsnes">
          <GithubIcon size={24} color="var(--color-white)" strokeWidth={1} />
        </a>
        <a href="https://www.linkedin.com/in/martin-bols%C3%B8nes-5973941b5/">
          <LinkedinIcon size={24} color="var(--color-white)" strokeWidth={1} />
        </a>
        <a href="https://twitter.com/martinbolsnes">
          <TwitterIcon size={24} color="var(--color-white)" strokeWidth={1} />
        </a>
        <a href="https://www.instagram.com/martinbolsnes/">
          <InstagramIcon size={24} color="var(--color-white)" strokeWidth={1} />
        </a>
      </div>
    </div>
  );
}
