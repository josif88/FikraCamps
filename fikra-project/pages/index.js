import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="home-cover">
          <img className="home-cover-image" src="./images/home-cover.png" />
          <div className="overlay">
            <div className="container">
              <h1>Simple Blog.</h1>
              <p>A blog created by FikraCamps</p>
            </div>
          </div>
        </section>
        <section className="featured-posts container">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
      <Footer />
    </div>
  );
}
