document.addEventListener('DOMContentLoaded', function() {
    // Cari semua tombol salin URL
    const copyButtons = document.querySelectorAll('.copy-url-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ambil URL dari data-url atribut
            const url = this.getAttribute('data-url');
            copyUrl(url);
        });
    });
});

// Fungsi untuk menyalin URL dan menampilkan SweetAlert
function copyUrl(url) {
    // Buat elemen input sementara untuk menyalin URL
    var tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);

    // Pilih dan salin URL
    tempInput.select();
    document.execCommand("copy");

    // Hapus elemen input sementara
    document.body.removeChild(tempInput);

    // Tampilkan SweetAlert untuk memberi tahu pengguna bahwa URL telah disalin
    Swal.fire({
        icon: 'success',
        title: 'URL Tersalin!',
        text: 'URL telah berhasil disalin ke clipboard.',
        confirmButtonText: 'OK',
        buttonsStyling: false,
        customClass: {
            confirmButton: 'sweet-button'
        }
    });
      }
