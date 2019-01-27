import { setting } from './setting';

function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', setting.api_url + url, true);
  xhr.send();
}

export function getData(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}