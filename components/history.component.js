class HistoryComponent extends HTMLElement {
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
            .experience,.education,.licenses_certifications{
              margin-top: 1rem;
            }
            .sub-title{
              color:var(--gray);
            }
            .card-description{
              width: 280.97px;
            }
            .detail > a {
                color: var(--blue);
            }
        </style>
        <main class="content">
            <section class="experience">
              <h3 class="H3_Bai_Jamjuree_25px_bold text-center">Experience</h3>
              <div class="card">
                <img src="./assets/images/logos/mulberrysoft.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Full Time · Phayao Thailand</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">May 2018 - Present</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                    - Develop web application <br/>
                    - Develop web service API <br/>
                    - Develop mobile application <br/>
                  </p>
                </div>
              </div>
            </section>
            <section class="education">
              <h3 class="H3_Bai_Jamjuree_25px_bold text-center">Education</h3>
              <div class="card">
                <img src="./assets/images/logos/university_of_phayao.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">University Of Phayao</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">2013 - 2017</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                    ป.ตรี · Computer Engineering 
                  </p>
                </div>
              </div>
            </section>
            <section class="licenses_certifications">
              <h3 class="H3_Bai_Jamjuree_25px_bold text-center">Licenses & certifications</h3>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/5fc666c0-ace8-47f0-a0bc-2f778bd5aab7" target="_blank">How to Become a Better Programmer</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/9e620139-e35b-47a0-bccb-1c39452760b6" target="_blank">OOP The Right Way</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/19a3aec1-02c0-4360-8646-f789bf22fc36" target="_blank">Bitcoin, Blockchain, and Beyond</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/7c5a3897-d282-4cb3-b540-875f59afd29d" target="_blank">Intro to User Experience Design</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/179f3cd9-b2e7-4f41-ab76-bf76a489ebf3" target="_blank">ใช้เงินเป็นเห็นความสุข Money Wellness The Series</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/bedfc6be-0a44-4aad-8ce0-5b02b00a3b16" target="_blank">Essential CSS for Web Developers</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://drive.google.com/file/d/1O0Jd0Qpr9GCFPW8dpippUKVGeCY8BoBd/view?usp=sharing" target="_blank">Ionic React Fundamentals</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/0c6f947d-f27f-4c85-b515-7ba450b315a7" target="_blank">Mastering Web Development with React</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/9079cf03-0649-419a-9c24-649fef97b0a2" target="_blank">Modern JavaScript (ES6)</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/47a0b2fe-803e-432d-b67e-28b986be731c" target="_blank">UI Design with Figma</a> <br/>
                  </p>
                </div>
              </div>
              <div class="card">
                <img src="./assets/images/logos/skoodio.png" alt="logo" width="49" height="55" loading="lazy"/>
                <div class="card-description">
                  <p class="Paragraph_Bai_Jamjuree_16px title">Skooldio</p>
                  <p class="Paragraph_Bai_Jamjuree_16px sub-title">Course Online</p>
                  <p class="Paragraph_Bai_Jamjuree_16px detail">
                  - <a href="https://www.skooldio.com/certificate/6bfabb47-ea22-4881-b5dc-2671b869c018" target="_blank">Web Basics with HTML and CSS</a> <br/>
                  </p>
                </div>
              </div>
            </section>
            <br/>
        </main>
    `;
  }
}

customElements.define("history-component", HistoryComponent);
