function FooterComponent() {
    return (
      <footer className="footer bg-secondary text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 style={{color:"orange"}}>Reserve</h3>
              <p className="font-weight-bold">
                When you have choice. Choose Reserve.
              </p>
              <p>
                Reserve offers bus ticket booking through its website, iOS and Android mobile apps for major cities.
              </p>
              <p>email@gmail.com</p>
            </div>
            <div className="col-md-3">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Useful Links</h4>
              <ul className="list-unstyled">
                <li>Careers</li>
                <li>FAQ</li>
                <li>T&amp;C</li>
                <li>Privacy</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h4>Follow Us</h4>
              <div className="d-flex">
                <div className="me-3">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default FooterComponent;
  