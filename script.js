function tampilkanUcapan() {
    const nama = document.getElementById('nama').value;
    const messageElement = document.getElementById('message');
    const birthdayMessage = document.getElementById('birthday-message');
    const nameInput = document.getElementById('name-input');

    if (nama.trim() === '') {
        alert('Mohon masukkan nama');
        return;
    }

    const ucapan = [
        `Selamat ulang tahun, ${nama}! Semoga selalu bahagia dan sukses!`,
        `Hari spesial anda tiba, ${nama}! Semoga mendapat keberkahan di tahun ini.`,
        `${nama}, di hari istimewa ini, semoga semua impian anda terwujud!`,
        `Banyak hal luar biasa menanti anda, ${nama}. Selamat ulang tahun!`
    ];

    const randomUcapan = ucapan[Math.floor(Math.random() * ucapan.length)];

    messageElement.textContent = randomUcapan;
    nameInput.style.display = 'none';
    birthdayMessage.style.display = 'block';
}

function goToVideo() {
    window.location.href = 'video.html'; // Ganti dengan nama file video yang sesuai
}

function reset() {
    document.getElementById('nama').value = '';
    document.getElementById('birthday-message').style.display = 'none';
    document.getElementById('name-input').style.display = 'block';
}