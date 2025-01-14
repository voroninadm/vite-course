// import './style.scss';
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from '@/assets/js/modules/counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
        <svg style="width: 950px">
            <use href="#vite"></use>
        </svg>
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
       <svg>
            <use href="#javascript"></use>
        </svg>
    </a>
    <h1>Hello Vite!</h1>

<ul>
    <li>
    <a href="/index">to index page</a>
    </li>
</ul>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
