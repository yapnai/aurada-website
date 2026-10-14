import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Yapn home">
          <Image
            src="/yapn-logo.svg"
            alt="Yapn"
            width={535}
            height={300}
            priority
          />
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-about" href="#what-we-do">
            What we do
          </a>
          <a href="#contact">Let’s talk</a>
          <a className="login-link" href="https://dashboard.yapn.ai">
            Login <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
