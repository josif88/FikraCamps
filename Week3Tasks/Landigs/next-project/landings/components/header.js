const Header = () => {
  return (
    <>
      <header>
        <img src="./assets/cover.png" />
        <div className="overlay">
          <div className="banner container">
            <logo>
              <h2>Landings</h2>
            </logo>
            <ul className="main-menu">
              <li>WORK</li>
              <li>FEATURES</li>
              <li>BLOG</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="cover">
            <div className="heading">
              <h1>Lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <p>eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="button">
                
                  <a>VIEW OUR PROJECTS</a>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
