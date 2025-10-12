document.querySelectorAll('button[data-target]').forEach(btn => {
  btn.onclick = function() {
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).style.display = '';
  };
});

