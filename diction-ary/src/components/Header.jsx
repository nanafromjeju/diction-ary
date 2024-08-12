import "../App.css";

function Header() {
  return (
    <div className="header">
      <h2 className="header-title">diction-ary</h2>

      <div className="header-controls">
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <input type="text" className="search-input" placeholder="" />
      </div>
    </div>
  );
}

export default Header;
