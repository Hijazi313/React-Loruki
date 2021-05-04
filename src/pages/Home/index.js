import Stats from "../../components/Stats";
import "./style.css";
import CliImage from "./../../images/cli.png";
import Cloud from "./../../images/cloud.png";
import node from "./../../images/logos/node.png";
import clojure from "./../../images/logos/clojure.png";
import csharp from "./../../images/logos/csharp.png";
import go from "./../../images/logos/go.png";
import php from "./../../images/logos/php.png";
import python from "./../../images/logos/python.png";
import ruby from "./../../images/logos/ruby.png";

const languages = [
  {
    title: "Node.js",
    img: node,
  },
  {
    title: "Clojure",
    img: clojure,
  },

  {
    title: "C#",
    img: csharp,
  },
  {
    title: "Go",
    img: go,
  },
  {
    title: "PhP",
    img: php,
  },
  {
    title: "Python",
    img: python,
  },
  {
    title: "Ruby",
    img: ruby,
  },
];
function Home() {
  return (
    <>
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

      {/* Stats */}
      <Stats />

      {/*  CLI  */}
      <section class="cli">
        <div class="container grid">
          <img src={CliImage} alt="CLI iamge" />

          <div class="card">
            <h3>Easy to use cross Platform</h3>
          </div>
          <div class="card">
            <h3>Deploy in Seconds</h3>
          </div>
        </div>
      </section>

      {/*  CLOUD SECTION  */}

      <section class="cloud bg-primary my-2 py-2">
        <div class="container grid">
          <div class="text-center">
            <h2 class="lg">Extreme CLoud Hosting</h2>
            <p class="lead my-1">Cloud hosting that you have never seen</p>
            <a href="features.html" class="btn btn-dark">
              Read More
            </a>
          </div>
          <img src={Cloud} alt="" />
        </div>
      </section>

      {/*   Languages  */}

      <section class="languages">
        <h2 class="text-center my2">Supported Languages</h2>

        <div class="container flex">
          {languages.map((language) => (
            <div class="card">
              <h4>{language.title}</h4>
              <img src={language.img} alt={language.title} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
