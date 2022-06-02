class SkillComponent extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    this.innerHTML = /*template*/ `
          <style>
              .content{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              .design,.front_end,.back_end,.tool{
                margin-top: 1rem;
              }
              .skill-contrainer{
                display:flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                margin-top: 1rem;
                width:400px;
              }
              .skill-card{
                  background-color: var(--blue);
                  color: var(--light);
                  text-decoration: none;
                  border-radius:4px;
                  padding:5px;
                  margin: 10px;
              }
          </style>
          <main class="content">
              <section class="design">
                <h3 class="H3_Bai_Jamjuree_25px_bold text-center">Design</h3>
                <div class="skill-contrainer">
                    <a href="#" class="skill-card">#Figma</a>
                    <a href="#" class="skill-card">#Balsamiq Mockups</a>
                </div>
              </section>
              <section class="front_end">
                <h3 class="H3_Bai_Jamjuree_25px_bold text-center">Front End</h3>
                <div class="skill-contrainer">
                    <a href="#" class="skill-card">#Ionic</a>
                    <a href="#" class="skill-card">#Angular</a>
                    <a href="#" class="skill-card">#Vue.js</a>
                </div>
              </section>
              <section class="back_end">
                <h3 class="H3_Bai_Jamjuree_25px_bold text-center">Back End</h3>
                <div class="skill-contrainer">
                    <a href="#" class="skill-card">#Lumen</a>
                    <a href="#" class="skill-card">#Node.js</a>
                </div>
              </section>
              <section class="tool">
                <h3 class="H3_Bai_Jamjuree_25px_bold text-center">Tools</h3>
                <div class="skill-contrainer">
                    <a href="#" class="skill-card">#Git</a>
                    <a href="#" class="skill-card">#Github</a>
                    <a href="#" class="skill-card">#Gitlab</a>
                    <a href="#" class="skill-card">#Bitbucket</a>
                    <a href="#" class="skill-card">#Tello</a>
                    <a href="#" class="skill-card">#Jira</a>
                </div>
              </section>
              <br/>
              <br/>
          </main>
      `;
  }
}

customElements.define("skill-component", SkillComponent);
