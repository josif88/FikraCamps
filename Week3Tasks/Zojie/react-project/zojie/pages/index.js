import Header from '../components/header';
import Cover from '../components/cover';
import Card from '../components/card';
export default function Home() {
  return <div>
    <Header />
    <Cover />
    <main>
      <section className="about">
        <div className="about-pragragh container">
          <h2>ABOUT ZOJIE'S FARM</h2>
          <p>
            We are constantly in search for innovative solutions that makes the
            farmers lives easier while increasing their opportunities. We
            achieve these in various ways - reducing their production costs,
            increasing their harvest volumes and providing a better, bigger and
            more sustainable market for them.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="posts-container">
           <Card/>
           <Card/>
           <Card/>
          </div>
        </div>
      </section>
    </main>
  </div>;
}