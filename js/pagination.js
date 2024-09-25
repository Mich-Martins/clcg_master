const prevBtn = document.querySelector('.pgn__prev');
const nextBtn = document.querySelector('.pgn__next');
const pageLinks = document.querySelectorAll('.pgn__num');

let currentPage = parseInt(document.querySelector('.pgn__num.current').textContent);

prevBtn.addEventListener('click', function() {
  if (currentPage > 1) {
    const prevPage = currentPage - 1;
    document.querySelector(`.pgn__num[href="#${prevPage}"]`).classList.add('current');
    document.querySelector('.pgn__num.current').classList.remove('current');
    currentPage = prevPage;
  }
});

nextBtn.addEventListener('click', function() {
  const pageCount = pageLinks.length;
  if (currentPage < pageCount) {
    const nextPage = currentPage + 1;
    document.querySelector(`.pgn__num[href="#${nextPage}"]`).classList.add('current');
    document.querySelector('.pgn__num.current').classList.remove('current');
    currentPage = nextPage;
  }
});
