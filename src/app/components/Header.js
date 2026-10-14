import Image from "next/image";

export default function Header() {
  return (
    <header className="wrap site-header">
      <a className="logo" href="#top" aria-label="Yapn home">
        <Image
          src="/yapn-logo-dark.svg"
          alt="Yapn"
          width={399}
          height={164}
          priority
        />
      </a>
      <nav className="nav" aria-label="Main navigation">
        <a href="#how-it-works">How it works</a>
        <a className="nav-contact" href="#contact">
          Contact
        </a>
        <a className="login" href="https://dashboard.yapn.ai">
          Log in
        </a>
      </nav>
    </header>
  );
}
