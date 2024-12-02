document.addEventListener('DOMContentLoaded', function () {
    // Elemen navigasi
    const homeLink = document.getElementById('home-link');
    const profileLink = document.getElementById('profile-link');
    const filesSection = document.getElementById('files');
    const profileSection = document.getElementById('profile');

    // Menampilkan Daftar File ketika menu "Beranda" diklik
    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        filesSection.style.display = 'block'; // Tampilkan Daftar File
        profileSection.style.display = 'none'; // Sembunyikan Profil
    });

    // Menampilkan Profil Developer ketika menu "Profil" diklik
    profileLink.addEventListener('click', function (event) {
        event.preventDefault();
        profileSection.style.display = 'block'; // Tampilkan Profil
        filesSection.style.display = 'none'; // Sembunyikan Daftar File
    });

    // Menampilkan Daftar File secara default ketika halaman pertama kali dimuat
    filesSection.style.display = 'block';
    profileSection.style.display = 'none';

    // Cari semua tombol salin URL
    const copyButtons = document.querySelectorAll('.copy-url-btn');

    // Tambahkan event listener untuk setiap tombol salin URL
    copyButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Ambil URL dari data-url atribut
            const url = this.getAttribute('data-url');
            copyUrl(url);
        });
    });

    // Dropdown Menu
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function () {
            const isVisible = dropdownContent.style.display === 'block';
            dropdownContent.style.display = isVisible ? 'none' : 'block';
        });
    }

    // Event listener untuk menyembunyikan dropdown saat klik di luar
    document.addEventListener('click', function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

// Fungsi untuk menyalin URL dan menampilkan SweetAlert
function copyUrl(url) {
    // Buat elemen input sementara untuk menyalin URL
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);

    // Pilih dan salin URL
    tempInput.select();
    document.execCommand('copy');

    // Hapus elemen input sementara
    document.body.removeChild(tempInput);

    // Tampilkan SweetAlert dengan animasi
    Swal.fire({
        icon: 'success',
        title: 'URL Tersalin!',
        text: 'URL telah berhasil disalin ke clipboard.',
        confirmButtonText: 'OK',
        buttonsStyling: false,
        customClass: {
            confirmButton: 'sweet-button'
        },
        showClass: {
            popup: 'animate__animated animate__fadeIn'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    });
    }
