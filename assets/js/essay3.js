let currentPage = 1;
const totalPages = 2;


function showPage(pageNumber) {
  const pages = document.querySelectorAll('.story-page');
  pages.forEach(page => page.style.display = 'none');
  document.getElementById(`page${pageNumber}`).style.display = 'block';
  updateButtonVisibility();
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function updateButtonVisibility() {
  if (currentPage === 1) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'inline-block';
  }

  if (currentPage === totalPages) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'inline-block';
  }
}

// Show the first page initially
showPage(currentPage);
