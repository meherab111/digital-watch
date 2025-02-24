let clockElem = document.getElementById("clock");

const funcTime = () => {
  const clockValue = new Date();

  clockElem.innerText = clockValue.toLocaleTimeString();
};

setInterval(funcTime, 1000);
