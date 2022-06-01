class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /* template */ `
        <style>
            .header{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top:34px;
            }
            .name{
                margin-top: 13px;
            }
            .ig{
                margin-top: 6px;
                color: var(--gray);
            }
            .detail{
                margin-top: 6px;
            }
            .menu{
                width: 400px;
                margin: 1.5rem 0;
            }
            .menu > ul{
                display: flex;
                justify-content: space-around;
            }
            .menu > ul, li {
                list-style-type: none;
            }

            .menu > ul > li > a {
                color: var(--blue);
            }
        </style>
        <section class="header">
            <img src="assets/images/profile-image.png" alt="image for profile" class="avatar" width="119" height="119">
            <h3 class="H3_Bai_Jamjuree_25px name">Sutthipong Nuanam</h3>
            <h5 class="H5_Bai_Jamjuree_20px ig">@amiearth</h5>
            <p class="Paragraph_Bai_Jamjuree_16px detail">sutthiphongnuanma@gmail.com , 086-4280331</p>

            <section class="menu">
                <ul>
                    <li>
                        <a href="index.html">ประวัติ</a>
                    </li>
                    <li>
                        <a href="skill.html">ทักษะ</a>
                    </li>
                    <li>
                        <a href="https://medium.com/amiearth" target="_blank">บทความ</a>
                    </li>
                </ul>
            </section>
        </section>
    `;
  }
}

customElements.define("header-component", Header);
