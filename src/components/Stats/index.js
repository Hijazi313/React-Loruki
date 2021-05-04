import "./styles.css";
const Stats = () => {
  return (
    <section class="stats">
      <div class="container">
        <h3 class="stats-header text-center my-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          similique cum quam aliquid ex exercitationem saepe et ea!
        </h3>

        <div class="grid grid-3 text-center my-4">
          <div>
            <i class="fas fa-server fa-3x"></i>
            <h3>100,343</h3>
            <p class="text-secondary">Deployment</p>
          </div>
          <div>
            <i class="fas fa-project-diagram fa-3x"></i>
            <h3>234,343,232</h3>
            <p class="text-secondary">Projects</p>
          </div>
          <div>
            <i class="fas fa-upload fa-3x"></i>
            <h3>987 TB</h3>
            <p class="text-secondary">Published</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
