// Load header
fetch('header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

// Load footer
fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);





class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
        <nav>
          <ul>
            <li><a href=index.html>Home</a></li>
            <li><a href=about.html>About</a></li>
            <li><a href=contact.html>Contact</a></li>
          </ul>
        </nav>
      </header>`;
    }
  }
  customElements.define("header", Header);
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <footer>
        &copy; 2022 My Company
      </footer>`;
    }
  }
  customElements.define("footer", Footer);
