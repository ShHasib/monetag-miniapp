// রেফারেল ট্র্যাক করা
const params = new URLSearchParams(window.location.search);
const ref = params.get("ref");
if (ref) {
  document.getElementById("refId").textContent = ref;
  localStorage.setItem("ref_id", ref);
}

// র‍্যান্ডম পয়েন্ট (ডেমো)
let points = Math.floor(Math.random() * 50 + 10);
document.getElementById("points").textContent = points;

// উইথড্র
function withdraw() {
  const number = prompt("📱 Enter your bKash/Nagad/Rocket number:");
  if (number) {
    alert("✅ Withdraw request submitted!\nNumber: " + number);
    // চাইলে Firebase বা Google Sheet-এ সংযুক্ত করা যাবে
  }
}
