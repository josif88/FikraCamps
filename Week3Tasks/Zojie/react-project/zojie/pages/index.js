import Header from '../components/header';

export default function Home() {
  return <div>
    <Header/>

    <main>
      <div class="cover">
        <image src="./assets/eduardo-prim-377966-unsplash.png" />
        <div class="overlay">
          <div class="container message-container">
            <small>AGRICULTURE FOR EVERYONE</small>
            <h2>
              An online agricultural platform aimed at teaching best
              agricultural practices to farmers everywhere.
            </h2>
            <div class="buttons-container">
              <div class="button">Sign Up</div>
              <div class="button">Watch our tutorials</div>
            </div>
          </div>
        </div>
      </div>
      <section class="about">
        <div class="about-pragragh container">
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
        <div class="container">
          <div class="posts-container">
            <div class="card">
              <div class="card-container">
                <div class="icon-container">
                  <img class="card-image" src="./assets/farmer (1).png" />
                </div>
                <h4>INPUTS</h4>
                <p>Delivering best input deals to farmers’ communities</p>
              </div>
            </div>

            <div class="card">
              <div class="card-container">
                <div class="icon-container">
                  <img class="card-image" src="./assets/farmer (1).png" />
                </div>
                <h4>INPUTS</h4>
                <p>Delivering best input deals to farmers’ communities</p>
              </div>
            </div>
            <div class="card">
              <div class="card-container">
                <div class="icon-container">
                  <img class="card-image" src="./assets/farmer (1).png" />
                </div>
                <h4>INPUTS</h4>
                <p>Delivering best input deals to farmers’ communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>;
}
