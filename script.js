const link = document.querySelectorAll("a");

link.forEach((link) => {
  if ((link.href = window.location.href)) {
    link.classList.add("active");
  }
});
