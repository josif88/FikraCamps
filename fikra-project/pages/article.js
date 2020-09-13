import Header from "../components/header";
import Footer from "../components/footer";

const Article = () => {
  return (
    <div>
      <Header />
      <main>
        <section class="container">
          <section class="title">
            <div>
              <h2>First article title for this desgin</h2>
              <small>By FikraSpace</small>
            </div>
            <small>June 19, 2020</small>
          </section>
        </section>

        <section class="container">
          <img class="cover" src="./images/cover.jpg" />
          <section class="coverDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur libero id faucibus nisl tincidunt. Facilisi etiam
            dignissim diam quis enim lobortis. Elit eget gravida cum sociis
            natoque. Purus gravida quis blandit turpis. Est pellentesque elit
            ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque
            felis. Donec ac odio tempor orci. Nam aliquam sem et tortor
            consequat. Maecenas volutpat blandit aliquam etiam. Ac tortor
            dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit
            scelerisque mauris pellentesque pulvinar. Integer quis auctor elit
            sed vulputate mi sit.
          </section>
          <section>
            <p class="dot">...</p>
          </section>

          <section class="container">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Varius quam quisque id diam vel quam elementum pulvinar etiam. Est
              ultricies integer quis auctor. Eget dolor morbi non arcu risus
              quis varius quam. Eu mi bibendum neque egestas. Enim facilisis
              gravida neque convallis. Mauris nunc congue nisi vitae suscipit
              tellus mauris a diam. Augue mauris augue neque gravida in
              fermentum et sollicitudin. <b>Lacus sed turpis tincidunt id.</b>{" "}
              Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing
              enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus
              mattis molestie a iaculis at.
            </p>

            <p>
              Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus
              egestas. Proin sed libero enim sed faucibus turpis. Netus et
              malesuada fames ac turpis egestas maecenas. Odio facilisis mauris
              sit amet massa. Et tortor consequat id porta nibh venenatis cras
              sed felis. Et netus et malesuada fames ac turpis egestas. In
              ornare quam viverra orci sagittis eu volutpat odio facilisis.
              Aliquet risus feugiat in ante metus dictum at tempor. Faucibus
              interdum posuere lorem ipsum dolor sit. Tortor posuere ac ut
              consequat semper viverra nam libero. Interdum velit laoreet id
              donec ultrices tincidunt arcu non. Venenatis cras sed felis eget
              velit. Egestas diam in arcu cursus euismod quis viverra nibh.
              Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
              tincidunt. Commodo sed egestas egestas fringilla.{" "}
              <b>
                Id consectetur purus ut faucibus pulvinar elementum integer enim
                neque.
              </b>
            </p>

            <h3>
              Lobortis mattis aliquam faucibus purus. Amet est placerat in
              egestas erat imperdiet sed euismod nisi.
            </h3>
            <p>
              Lobortis mattis aliquam faucibus purus. Amet est placerat in
              egestas erat imperdiet sed euismod nisi. Pellentesque diam
              volutpat commodo sed. Id faucibus nisl tincidunt eget nullam. Sed
              faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut
              porttitor leo a diam sollicitudin tempor id. Turpis in eu mi
              bibendum neque egestas congue. Quisque sagittis purus sit amet
              volutpat consequat. At quis risus sed vulputate odio. Netus et
              malesuada fames ac turpis egestas sed tempus. Vel pretium lectus
              quam id Leo in.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Article;
