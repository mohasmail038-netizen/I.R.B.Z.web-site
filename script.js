// تفاعل بسيط مع الفورم
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح! شكرا لتواصلك مع اتحاد الزمالة.");
  this.reset();
});
