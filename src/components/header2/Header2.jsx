import "./header2.css";

function Header(props) {
  return (
    <>
      {" "}
      <div className="container">
        <img src={props.src} alt="backgroundimage" className="bgImage" />
        <div className="overlay">
          <div>
            <div class="text">
              <h2>{props.heading}</h2>
              <h4>{props.text}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
