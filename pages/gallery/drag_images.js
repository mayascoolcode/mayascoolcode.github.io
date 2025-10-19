// drag_images.js
// Makes .draggable-item elements draggable (mouse and touch)


(function() {
  const parent = document.body;
  let activeItem = null, offsetX = 0, offsetY = 0, startX = 0, startY = 0;

  // Randomize initial position of .photo elements
  function randomizePositions() {
    const items = parent.querySelectorAll('.photo_video');
    const parentRect = parent.getBoundingClientRect();
    items.forEach(item => {
      // Get item size (after image loads)
      const setRandomPosition = () => {
        const rect = item.getBoundingClientRect();
        const maxLeft = Math.max(0, parentRect.width - rect.width);
        const maxTop = Math.max(0, parentRect.height - rect.height);
        const left = Math.random() * maxLeft;
        const top = Math.random() * maxTop;
        item.style.position = 'absolute';
        item.style.left = left + 'px';
        item.style.top = top + 'px';
      };
      // If image is loaded, set position; else, wait for load
      const img = item.querySelector('img');
      if (img && !img.complete) {
        img.addEventListener('load', setRandomPosition);
      } else {
        setRandomPosition();
      }
    });
  }

  window.addEventListener('DOMContentLoaded', randomizePositions);
  window.addEventListener('resize', randomizePositions);

  function onDragStart(e, item) {
    activeItem = item;
    item.classList.add('dragging');
    if (e.type.startsWith('touch')) {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    } else {
      startX = e.clientX;
      startY = e.clientY;
    }
    const rect = item.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    offsetX = startX - rect.left;
    offsetY = startY - rect.top;
    document.body.style.userSelect = 'none';
  }

  function onDragMove(e) {
    if (!activeItem) return;
    let clientX, clientY;
    if (e.type.startsWith('touch')) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const parentRect = parent.getBoundingClientRect();
    let newLeft = clientX - parentRect.left - offsetX;
    let newTop = clientY - parentRect.top - offsetY;
    // Clamp within body
    newLeft = Math.max(0, Math.min(newLeft, parentRect.width - activeItem.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, parentRect.height - activeItem.offsetHeight));
    activeItem.style.left = newLeft + 'px';
    activeItem.style.top = newTop + 'px';
  }

  function onDragEnd() {
    if (activeItem) activeItem.classList.remove('dragging');
    activeItem = null;
    document.body.style.userSelect = '';
  }

  // Mouse events
  parent.querySelectorAll('.photo').forEach(item => {
    item.addEventListener('mousedown', e => {
      e.preventDefault();
      onDragStart(e, item);
    });
  });
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);

  // Touch events
  parent.querySelectorAll('.photo').forEach(item => {
    item.addEventListener('touchstart', e => {
      onDragStart(e, item);
    }, {passive: false});
  });
  document.addEventListener('touchmove', onDragMove, {passive: false});
  document.addEventListener('touchend', onDragEnd);
})();

(function() {
  const parent = document.body;
  let activeItem = null, offsetX = 0, offsetY = 0, startX = 0, startY = 0;

  function onDragStart(e, item) {
    activeItem = item;
    item.classList.add('dragging');
    if (e.type.startsWith('touch')) {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    } else {
      startX = e.clientX;
      startY = e.clientY;
    }
    const rect = item.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    offsetX = startX - rect.left;
    offsetY = startY - rect.top;
    document.body.style.userSelect = 'none';
  }

  function onDragMove(e) {
    if (!activeItem) return;
    let clientX, clientY;
    if (e.type.startsWith('touch')) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    const parentRect = parent.getBoundingClientRect();
    let newLeft = clientX - parentRect.left - offsetX;
    let newTop = clientY - parentRect.top - offsetY;
    // Clamp within body
    newLeft = Math.max(0, Math.min(newLeft, parentRect.width - activeItem.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, parentRect.height - activeItem.offsetHeight));
    activeItem.style.left = newLeft + 'px';
    activeItem.style.top = newTop + 'px';
  }

  function onDragEnd() {
    if (activeItem) activeItem.classList.remove('dragging');
    activeItem = null;
    document.body.style.userSelect = '';
  }

  // Mouse events
  parent.querySelectorAll('.photo_video').forEach(item => {
    item.addEventListener('mousedown', e => {
      e.preventDefault();
      onDragStart(e, item);
    });
  });
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);

  // Touch events
  parent.querySelectorAll('.photo_video').forEach(item => {
    item.addEventListener('touchstart', e => {
      onDragStart(e, item);
    }, {passive: false});
  });
  document.addEventListener('touchmove', onDragMove, {passive: false});
  document.addEventListener('touchend', onDragEnd);
})();