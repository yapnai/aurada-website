import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <a className="logo" href="#top" aria-label="Yapn home">
          <Image src="/yapn-logo-dark.svg" alt="Yapn" width={399} height={164} />
        </a>
        <p>An AI phone agent for small businesses.</p>
        <nav className="footer-links" aria-label="Footer">
          <a href="mailto:team@yapn.ai">team@yapn.ai</a>
          <a href="https://dashboard.yapn.ai">Log in</a>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Yapn</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
