function handleButtonClicked() {
  window.alert("wooo hoo! You clicked the buton 😃");

  let a = 2;
  a++;
}

const button = document.body.querySelector("button");
button.onclick = handleButtonClicked;
