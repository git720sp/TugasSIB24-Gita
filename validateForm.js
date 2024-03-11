function validateForm() {
            var nama = document.getElementById("nama").value;
            var email = document.getElementById("email").value;
            var no_hp = document.getElementById("no_hp").value;
            var jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
            var prodi = document.getElementById("prodi").value;
            var alamat = document.getElementById("alamat").value;
            var foto = document.getElementById("foto").value;
    
            if (nama == "" || email == "" || no_hp == "" || jenis_kelamin == null || prodi == "Pilih" || alamat == "" || foto == "") {
                alert("Silahkan isi semua data terlebih dahulu.");
                return false;
            } else {
                alert("Terima kasih telah mendaftar! Silahkan cek email untuk melakukan verifikasi.");
                return true;
            }
        }