document.getElementById('pawnForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const crypto = document.getElementById('crypto').value;
  const amount = parseFloat(document.getElementById('amount').value);
  let rate = 0;

  if (crypto === "BTC") rate = 60000;
  else if (crypto === "ETH") rate = 3000;
  else if (crypto === "USDT") rate = 1;

  const estimatedLoan = amount * rate * 0.7;
  document.getElementById('result').textContent = `Estimasi pinjaman Anda: $${estimatedLoan.toFixed(2)}`;
});
