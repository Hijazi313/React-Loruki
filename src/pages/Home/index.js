import "./style.css";

function Home() {
  return (
    <section class="showcase">
      <div class="container grid">
        <div class="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            perferendis eum exercitationem dolorum, expedita tenetur.
          </p>
          <a href="/features.html" class="btn btn-outline">
            Read More{" "}
          </a>
        </div>

        <div class="showcase-form card">
          <h2>Request A Demo</h2>
          <form action="">
            <div class="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <div class="form-control">
              <input type="text" name="email" placeholder="Email" required />
            </div>

            <input type="submit" value="Send" class="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home;
