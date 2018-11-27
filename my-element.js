// Import and extend the LitElement base class.
import { LitElement, html } from '@polymer/lit-element'; 
import '@polymer/paper-checkbox/paper-checkbox.js'

class MyElement extends LitElement {

  static get properties(){
    return {
      feeling: String,
      firstName: String   
    }
  }

  _didRender(){
    console.log('did render');
  }

  _firstRendered(){
    console.log('first rendered');
    addEventListener('sayHello', () => {
      console.log('Say -> Hello');
    })
  }

  sayHi(){
    alert('Hiiiiii my friend');
    this.dispatchEvent(new CustomEvent('sayHello', { bubbles: true, composed: true}));
  }

  // Return your template from lit-element's `render` function.
  _render({feeling, firstName}){
    return html`
      <style>
        h1 {
          border-radius: 25px;
          background: #73AD21;
          padding: 20px; 
          width: 300px;
          height: 75px; 
        }
        div {
          background-color: #C0C0C0;
          padding: 20px;
        }
        :host {
          color: white;
        }
        button {
          display: inline-block;
          margin: 10px 10px 0 0;
          padding: 15px 45px;
          font-size: 20px;
          font-family: "Bitter",serif;
          line-height: 1.8;
          appearance: none;
          box-shadow: none;
          border-radius: 0;
          background-color: #6496c8;          
        }
        button:focus {
          outline: none
        }
      </style>      
      <h1>Polymer es: ${feeling}</h1>
      <div class="test">
        <p>Mi nombre es: <b> ${firstName}</b></p> <br>
        <slot name="children"></slot> <br>
        <slot name="anotherChildren"></slot> <br>
        <paper-checkbox style="--paper-checkbox-label-color: green">Listo para usarse</paper-checkbox>
      </div>
      <nav>
        <button on-click="${this.sayHi}">Say Hi!!</button>
      </nav>
    `;
  }

}
// Register the new element with the browser.
window.customElements.define('my-element', MyElement);
