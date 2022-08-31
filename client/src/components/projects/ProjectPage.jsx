import "../../styles/projectPage.scss";
import { FaReact, FaSass } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const ProjectPage = () => {
  return (
    <main className="main showcase">
      <section>
        <h2 className="showcase__title">THE PROJECT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptate velit eum quis nam iste nulla minima necessitatibus
          temporibus odit odio quas, nesciunt, eos cumque officiis suscipit
          neque voluptatibus! Fugiat explicabo quaerat nisi culpa eum maiores,
          debitis quisquam repellat quo odit ex cupiditate tenetur non quas
          maxime possimus esse voluptas excepturi unde illo reprehenderit et
          itaque praesentium ea. Consectetur quod labore in similique nobis
          voluptatibus praesentium odit error ut dolor?
        </p>
        <div className="showcase__info">
          <div className="showcase__group">
            <h4>Used technologies:</h4>
            <div className="showcase__content">
              <FaReact size="70px" />
              <FaSass size="70px" />
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used tools:</h4>
            <div className="showcase__content">
              <SiPostman size="70px" />
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used colors:</h4>
            <div className="showcase__content">
              <div className="showcase__color">#5483d8</div>
              <div className="showcase__color">#5483d8</div>
              <div className="showcase__color">#5483d8</div>
              <div className="showcase__color">#5483d8</div>
              <div className="showcase__color">#5483d8</div>
              <div className="showcase__color">#5483d8</div>
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used fonts:</h4>
            <div className="showcase__content"></div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="showcase__title">TEAM</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos,
          repellendus deleniti perferendis dolor nisi? Delectus, consequatur
          ratione. Doloremque dolores hic aspernatur adipisci odio, quia quos
          nam ducimus accusantium molestias!
        </p>
      </section>
    </main>
  );
};

export default ProjectPage;
