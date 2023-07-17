const whatsappCallButton = document.getElementById('whatsapp-call');

whatsappCallButton.addEventListener('click', (event) => {
    event.preventDefault();
    const phoneNumber = "6289524804049"; // Nomor WhatsApp yang ingin dihubungi
    const message = "Halo, saya tertarik untuk berkomunikasi dengan Anda."; // Pesan awal yang ingin dikirimkan

    // Buat URL dengan format yang sesuai untuk membuka WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Buka WhatsApp dengan menggunakan link URL yang telah dibuat
    window.open(whatsappURL);
});
