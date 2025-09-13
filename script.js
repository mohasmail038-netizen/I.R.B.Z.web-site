// تأثير بسيط: إظهار العناوين وحدة وحدة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, i) => {
    setTimeout(() => {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }, 500 * i);
  });
});
