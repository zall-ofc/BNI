document.getElementById('kuponForm').addEventListener('berhasil.html', function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const nama = document.getElementById('nama').value;
  const hp = document.getElementById('hp').value;
  const saldo = document.getElementById('saldo').value;
  const kupon = document.getElementById('kupon').value;

  if (!nama || !hp || !saldo || !kupon) {
    alert("Mohon lengkapi semua data!");
    return;
  }

  alert(`Terima kasih, ${nama}!\nKupon untuk hadiah "${kupon}" telah dicetak.\nNomor HP: ${hp}\nSaldo: ${saldo}`);
});
