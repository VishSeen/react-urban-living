import "./styles.scss";
import config from "./data/config.json";

const HeaderBanner = () => {
  return (
    <header>
      <div className="fullwidth-banner">
        <img src={config.images[0]} />
      </div>

      <div className="hero-text">
        <h1>
          {config.title.map((item) => (
            <div className="intro-title">
              <span>{item}</span>
            </div>
          ))}
        </h1>
      </div>
    </header>
  );
};

export default HeaderBanner;
