class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("aaa");
    this.innerHTML = /*template */ `
        <style>
          .footer{
            width:100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .copyright{
            width: 100vw;
            height:51px;
            background-color: var(--dark);
            color: var(--light);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .contract{
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          .contract_button{
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            height: 51px;
            width:42%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--light);
            margin: 10px;
          }

          .github{
            background: var(--dark);
          }
          .twitter{
            background: var(--blue);
          }
        </style>
        
        <section class="footer">
          <section class="contract">
            <a href="https://github.com/earth774" target="_blank" class="contract_button github">Github</a>
            <a href="https://twitter.com/SutthiponGEarth" target="_blank" class="contract_button twitter">Twitter</a>
          </section>
          <section class="copyright">
            <h4 class="H4_Bai_Jamjuree_22px">© Amiearth 2021</h4>
          </section>
      `;
  }
}

customElements.define("footer-component", Footer);
