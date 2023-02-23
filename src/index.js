import $ from "jquery";

const CAT_ENDPOINT = "http://placekitten.com/";
const buildUrl = (x, y) => `${CAT_ENDPOINT}/${x}/${y}`;

function submitHandler(ev) {
  ev.preventDefault();
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  fetchCat(x, y);
}

function injectCat(response) {
  if (response.status === 200) {
    response.blob().then((img) => {
      const objURL = URL.createObjectURL(img);
      const image = document.createElement("img");
      image.src = objURL;
      document.getElementById("cat").append(image);
    });
  }
}

function fetchCat(x, y) {
  let url = buildUrl(x, y);
  fetch(url).then(injectCat);
}

$(function () {
  // this function is called when the dom is loaded + ready
  let catDiv = $("#cat");
  $("#submit").on("click", submitHandler);
});
