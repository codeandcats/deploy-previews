(function () {
  document.getElementById("root").innerText = "⚡️ The greatest website ⚡️";
  
  let bgHue = 0;
  
  function updateBg() {
    bgHue = (bgHue + 1) % 360;
    document.body.style.backgroundColor = `hsl(${bgHue} 70% 40%)`;
  }

  setInterval(updateBg, 25);
})();
