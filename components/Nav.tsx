import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="container nav" aria-label="Main">
        <Logo />
        <div className="nav-links">
          <a href="#services" className="hide-sm">Services</a>
          <a href="#process" className="hide-sm">Process</a>
          <a href="#results" className="hide-sm">Results</a>
          <a href="#faq" className="hide-sm">FAQ</a>
          <a href="#audit" className="nav-cta">Get a free audit</a>
        </div>
      </nav>
    </header>
  );
}
