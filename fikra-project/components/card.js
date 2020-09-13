import Link from "next/link";

const Card = () => {
  return (
    <>
      <div class="post-card">
        <div class="post-thumbnail">
          <img class="img" src="./images/post-thump.png" />
        </div>
        <h3>FIRST BLOG TITL…</h3>
        <span>By FikraSpace</span>
        <div class="post-info">
          <Link href="article">
            <a>Reade article</a>
          </Link>
          <span>June 19, 2020</span>
        </div>
      </div>
    </>
  );
};

export default Card;
