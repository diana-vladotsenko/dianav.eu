function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "flex";
  modalImg.src = img.src;
  caption.innerText = img.alt;

  document.body.style.overflow = "hidden"; // Prevent scroll
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.body.style.overflow = ""; // Restore scroll
}

function toggleProjects() {
  const hiddenProjects = document.querySelectorAll('.hidden-project');
  const btn = document.getElementById('loadMoreBtn');
  
  hiddenProjects.forEach(project => {
    if (project.style.display === 'none' || project.style.display === '') {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  
  // Toggle button text
  if (btn.textContent === 'Load More Projects') {
    btn.textContent = 'Show Less';
  } else {
    btn.textContent = 'Load More Projects';
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
