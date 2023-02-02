const input = document.getElementById("button");

const alertPopup = () => {
  alert("I was clicked!");
};

const addingEventListener = () => {
  input.addEventListener("click", alertPopup);
};

addingEventListener();
