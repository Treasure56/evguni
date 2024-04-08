const footer = document.querySelector("Footer");
if (footer) {
  footer.outerHTML = `
  
  <link rel="stylesheet" href="./assets/css/styles.css" />
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img
              src="./asset/img/logo4.png"
              alt="Bank Logo"
              class="footer-logo"
            />
          </div>
          <div class="col-md-3">
            <h5>Quick Links</h5>
            <ul class="footer-links">
              <li>
                <a href="#" class="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">Services</a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Useful Links</h5>
            <ul class="footer-links">
              <li>
                <a href="#" class="text-white text-decoration-none"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none"
                  >Terms of Service</a
                >
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    `;
}
