document.querySelectorAll('nav menu button').forEach(btn => {
          btn.addEventListener('click', () => {
            const year = btn.getAttribute('data-year');
            document.querySelectorAll('.drawing_year').forEach(div => {
              div.style.display = div.getAttribute('data-year') === year ? '' : 'none';
            });
            document.querySelectorAll('nav menu button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
          });
        });