import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand" href="#top" aria-label="Yapn home">
          <Image src="/yapn-logo.svg" alt="Yapn" width={535} height={300} />
        </a>
        <span>Good conversations. More possibilities.</span>
        <a href="mailto:team@yapn.ai">
          team@yapn.ai <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Yapn</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
