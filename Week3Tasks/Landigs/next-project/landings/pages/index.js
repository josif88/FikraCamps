import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <section class="message">
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique ullamcorper luctus. Nunc varius
          ullamcorper felis. Nulla nibh ipsum, rutrum.
        </p>
      </section>
      <section class="posts container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <section class="featured-video">
        <img
          class="featured-video-thumbnail"
          src="./assets/featured-video.png"
        />
        <div class="featured-video-overlay">
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
      <section class="message">
        <h3>Lorem ipsum dolor sit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique ullamcorper luctus. Nunc varius
          ullamcorper felis. Nulla nibh ipsum, rutrum.
        </p>
      </section>
      <section class="footer-massage">
        <div class="left-column container">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
          </p>
          <div class="button">
            <a>VIEW OUR PROJECTS</a>
          </div>
        </div>
        <div class="right-column">
          <img src="./assets/image.png" />
        </div>
      </section>
      <Footer />
    </>
  );
}
