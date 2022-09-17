import "./header.css";

function Header(props) {
  return (
    <>
      {" "}
      <div className="container">
        <img src={props.src} alt="backgroundimage" className="bgImage" />
        <div className="overlay">
          <div>
            <div class="text">
              <h2>Local. Natural. Sustainable</h2>

              <form class="example" action="action_page.php">
                <input type="text" placeholder="Search..." name="search" />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
