const template = document.createElement('template');
template.innerHTML =`
<style>
.wrapper-container{
    /* background-color: aqua; */
    display: flex;
    flex-flow: row wrap;
    text-align: center;
}
.wrapper-container>*{
    padding: 10px;
    margin: 10px;
    flex: 1 100%;
    border-radius: 10px;
}
.header{
    background-color: red;
    height: 120px;
    text-align: left;
}
.footer{
    background-color: lightgreen;
    height: 80px;
}
.main{
    background-color: deepskyblue;
    height: 500px;
}
.aside1{
    background-color: gold;
}
.aside2{
    background-color: hotpink;
}

@media all and (min-width: 800px){
    .main{
        flex: 3;
    }
    .aside1{
        order: 1;
    }
    .aside2{
        order: 2;
    }
    .main{
        order: 2;
    }
    .footer{
        order: 4;
    }
}
@media all and (min-width: 600px){
    .aside{
        flex: 1;
    }
}

.dummy{
    background-color: aqua;
}
</style>
<div class="wrapper-container">
    <footer class="footer">
        <h1>Footer</h1>
    </footer>
</div>
`;
class FooterElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.shadowRoot.querySelector('h1').innerText = "Header"
    // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
    // this.shadowRoot.querySelector('p').innerText = " Lorem ipsum dokdfkdm";
    // this.innerHTML = `${this.getAttribute("name")}`;
  }
}
window.customElements.define("footer-tag", FooterElement);
