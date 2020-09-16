const Header = () => {
  return (
    <div>
      <header>
        <div class="topnav" id="myTopnav">
          <a href="#" class="active">
            <img class="logo" src="./assets/logo.png" />
          </a>
          <a href="#">Who We Are</a>
          <a href="#">Impacts</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>

        <div class="header-breadcrumb container">
          <img class="logo" src="./assets/logo.png" />
          <div class="main-menu">
            <ul>
              <li>Home</li>
              <li>Who We Are</li>
              <li>Impacts</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;