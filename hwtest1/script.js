function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function r() {
  return getRandom(0, 256);
}

function clean() {
  document.querySelectorAll('.box').forEach((e) => e.remove());
}

function init() {
  clean();
  setTimeout(run, 500);
}

function run() {
  const boxes = [];
  const spread = 5;
  const boxSize = document.getElementById('input-boxsize').value;
  const numOfBoxes = document.getElementById('input-box-num').value;
  const body = document.getElementsByTagName('body')[0];
  const useGPU = document.getElementById('cb-use-gpu').checked;

  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  for (let i = 0; i < numOfBoxes; i += 1) {
    const newBox = document.createElement('div');
    const newColor = `rgb(${r()}, ${r()}, ${r()})`;
    newBox.style.backgroundColor = newColor;
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.position = 'absolute';
    newBox.style.top = `-${boxSize}px`;
    newBox.style.left = getRandom(0, viewportWidth - boxSize) + 'px';
    if (useGPU === true) newBox.style.transition = 'transform 3s linear';
    else newBox.style.transition = 'top 3s linear';
    newBox.classList.add('box');
    boxes.push(newBox);
    body.appendChild(newBox);
  }

  const initPlaceholder = document.getElementById('init-placeholder');
  if (initPlaceholder) initPlaceholder.remove();

  for (let i = 0; i < boxes.length; i += 1) {
    setTimeout(() => {
      if (useGPU === true) {
        const endPosition = `${viewportHeight}px`;
        boxes[i].style.transform = `translate3d(0, ${endPosition}, 0)`;
      } else {
        const endPosition = `${viewportHeight - boxSize}px`;
        boxes[i].style.top = endPosition;
      }
    }, getRandom(0, spread * 1000));
  }
}
