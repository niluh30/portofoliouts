
// ===== SIMPAN PROFIL =====

const formProfil = document.getElementById("formProfil");

formProfil.addEventListener("submit", function(event) {

    event.preventDefault();

    // Mengambil data dari formulir

    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let hobi = document.getElementById("hobi").value;
    let instagram = document.getElementById("instagram").value;

    // Memasukkan data ke tampilan profil

    document.getElementById("hasilNim").textContent = nim;
    document.getElementById("hasilNama").textContent = nama;
    document.getElementById("hasilAlamat").textContent = alamat;
    document.getElementById("hasilHobi").textContent = hobi;
    document.getElementById("hasilInstagram").textContent = instagram;

    // Menampilkan profil

    const tampilan = document.getElementById("tampilanProfil");

    tampilan.hidden = false;

    // Mengarahkan halaman ke hasil profil

    tampilan.scrollIntoView({
        behavior: "smooth"
    });

});


// ===== EDIT PROFIL =====

function editProfil() {

    document.getElementById("profil").scrollIntoView({
        behavior: "smooth"
    });

}
