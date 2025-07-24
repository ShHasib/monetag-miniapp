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
// Referral System Code
const urlParams = new URLSearchParams(window.location.search);
const ref = urlParams.get('ref');
if (ref) {
  localStorage.setItem('referrer', ref);
  document.getElementById('ref').innerText = "Referred by: " + ref;
}
function submitWithdraw() {
  const phone = prompt("Enter your bKash/Nagad number:");
  const ref = localStorage.getItem("referrer") || "None";
  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify({
      phone: phone,
      points: localStorage.getItem("points") || 0,
      referrer: ref
    }),
    headers: { "Content-Type": "application/json" }
  }).then(() => alert("Withdraw request submitted ✅"));
}
