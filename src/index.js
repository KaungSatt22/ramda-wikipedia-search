import 'bootstrap/dist/css/bootstrap.min.css';
import {pipe,ifElse,isEmpty} from 'ramda'
import GetURL from './getUrl';
import GetInputValue from './getinputvalue';
import Result from './results';

const render = markup => {
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = markup;
}

const URLempty = () => {};

const UrlFetch = pipe(
  GetURL,
  url => 
    fetch(url)
      .then(res=> res.json())
      .then(Result)
      .then(render)
  
)
const ValidateData = pipe(
  GetInputValue,
  ifElse(isEmpty,URLempty,UrlFetch)
)

const input = document.querySelector('input');
input.addEventListener('keyup',ValidateData)