import "./styles.css";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-5">
      <div class="container grid grid-3">
        <div>
          <h1>Loruki</h1>
          <p>Copyright &copy; 2021</p>
        </div>

        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/docs">Docs</a>
            </li>
          </ul>
        </nav>
        <div class="social">
          <a href="/">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="/">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="/">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="/">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
