const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Ambil elemen yang akan dianimasikan
const card = document.querySelector('.card');
const question = document.querySelector('.question');
const buttonsContainer = document.querySelector('.buttons-container');
const messageContainer = document.getElementById('message-container');
const message = document.getElementById('message');

// Event listener untuk tombol "Tidak"
noBtn.addEventListener('mouseover', moveButton);   // Untuk pengguna Desktop
noBtn.addEventListener('touchstart', moveButton);  // TAMBAHAN: Untuk pengguna Mobile
noBtn.addEventListener('click', moveButton);       // Sebagai cadangan

function moveButton(event) {
    // Mencegah perilaku default browser saat disentuh (seperti zoom atau 'ghost click')
    event.preventDefault();

    // Mengubah posisi menjadi absolut saat pertama kali hover/klik
    noBtn.style.position = 'absolute';

    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Pastikan tombol tetap di dalam area kartu
    const newTop = Math.random() * (cardRect.height - btnRect.height);
    const newLeft = Math.random() * (cardRect.width - btnRect.width);

    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
}

// Event listener untuk tombol "Iya"
yesBtn.addEventListener('click', () => {
    // 1. Sembunyikan pertanyaan dan tombol
    question.classList.add('hidden');
    buttonsContainer.classList.add('hidden');

    // 2. Siapkan dan tampilkan pesan sukses
    message.textContent = 'Bagus! Terus tingkatkan rasa syukur dan semangatmu dalam bekerja!';
    messageContainer.style.height = 'auto'; // Atur tinggi agar pas dengan konten
    messageContainer.style.opacity = '1';

    // 3. (BONUS) Panggil efek confetti!
    confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
    });
});