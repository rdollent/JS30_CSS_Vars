window.onload = runThis;

function runThis() {
  const bd = document.documentElement.style;
  let ctrlBlur = document.getElementsByClassName('blur');
  let ctrlSpace = document.getElementsByClassName('spacing');
  let ctrlBase = document.getElementsByClassName('base');
  ctrlBlur[0].addEventListener("mousemove", function(e) {
  bd.setProperty('--blur', ctrlBlur[0].value + ctrlBlur[0].dataset.unit);
  });
  ctrlBlur[0].addEventListener("change", function(e) {  //for touch
  bd.setProperty('--blur', ctrlBlur[0].value + ctrlBlur[0].dataset.unit);
  });
  ctrlSpace[0].addEventListener("mousemove", function(e) {
  bd.setProperty('--pad', ctrlSpace[0].value + ctrlSpace[0].dataset.unit);
  });
  ctrlSpace[0].addEventListener("change", function(e) { //for touch
  bd.setProperty('--pad', ctrlSpace[0].value + ctrlSpace[0].dataset.unit);
  });
  ctrlBase[0].addEventListener("change", function(e) {
  bd.setProperty('--base-color', ctrlBase[0].value);
  });
}
