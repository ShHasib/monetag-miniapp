// Withdraw button click
document.addEventListener("DOMContentLoaded", function () {
  const withdrawBtn = document.getElementById("withdrawBtn");

  if (withdrawBtn) {
    withdrawBtn.addEventListener("click", function () {
      window.location.href = "withdraw.html";
    });
  }
});
