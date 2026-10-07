export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Convertt · convertt.co</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:hello@convertt.co">hello@convertt.co</a>
        </div>
      </div>
    </footer>
  );
}
