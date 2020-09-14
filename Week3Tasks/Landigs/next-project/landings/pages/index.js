
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      
      <section className="message">
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique ullamcorper luctus. Nunc varius
          ullamcorper felis. Nulla nibh ipsum, rutrum.
        </p>
      </section>
      <section className="posts container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section className="featured-video">
        <img
          className="featured-video-thumbnail"
          src="./assets/featured-video.png"
        />
        <div className="featured-video-overlay">
          <div>
            <img src="./assets/icons/play.png" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
              Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.
            </p>
          </div>
        </div>
      </section>
      <section className="message">
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique ullamcorper luctus. Nunc varius
          ullamcorper felis. Nulla nibh ipsum, rutrum.
        </p>
      </section>
      <section className="footer-massage">
        <div className="left-column container">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
          </p>
          <div className="button">
            <a>VIEW OUR PROJECTS</a>
          </div>
        </div>
        <div className="right-column">
          <img src="./assets/image.png" />
        </div>
      </section>
      <Footer />
    </>
  );
}
