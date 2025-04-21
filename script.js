// Change text content
document.getElementById('changeTextBtn').onclick = function () {
    const heading = document.getElementById('main-heading');
    heading.textContent = 'You changed the heading!';
  };
  
  // Add or remove a box
  document.getElementById('toggleBoxBtn').onclick = function () {
    const container = document.getElementById('boxContainer');
    const existingBox = document.querySelector('.box');
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement('div');
      box.classList.add('box');
      container.appendChild(box);
    }
  };
  
  // Change background color of box (if it exists)
  document.getElementById('changeColorBtn').onclick = function () {
    const box = document.querySelector('.box');
    if (box) {
      box.style.backgroundColor =
        box.style.backgroundColor === 'lightgray' ? 'lightgreen' : 'lightgray';
    }
  };

    // Change background color of page (if it exists)
    document.getElementById('changeBackgroundColorBtn').onclick = function () {
        const body = document.querySelector('body');
        if (body) {
          body.style.backgroundColor =
            body.style.backgroundColor === 'white' ? 'cyan' : 'white';
        }
      };
  