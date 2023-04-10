import React from "react";

export default function Home() {
  return (
    <body>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
          </p>
        </section>

        <section className="class-selection">
          <img
            src="character-image-placeholder.jpg"
            alt="Character Image"
            id="character-image"
          />
          <div className="class-buttons">
            <button className="class-button" data-class="supply-chain">
              Supply Chain
            </button>
            <button className="class-button" data-class="father">
              Father
            </button>
            <button className="class-button" data-class="veteran">
              Veteran
            </button>
            <button className="class-button" data-class="developer">
              Developer
            </button>
            <button className="class-button" data-class="future">
              Future
            </button>
            <button className="class-button" data-class="analyst">
              Analyst
            </button>
          </div>
        </section>

        <section className="right-box">
          <p>Write something here</p>
        </section>
      </main>
    </body>
  );
}
