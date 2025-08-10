// Fungsi untuk menambahkan tugas
function submitTask() {
    const taskData = {
        namaSiswa: document.getElementById('namaSiswa').value,
        kelas: document.getElementById('kelas').value,
        nik: document.getElementById('nik').value,
        tanggal: document.getElementById('tanggal').value,
        namaTugas: document.getElementById('namaTugas').value,
        catatan: document.getElementById('catatan').value,
        file: document.getElementById('fileUpload').files[0] // Menyimpan file upload
    };
    
    // Simpan data ke array dan tampilkan notifikasi
    tasks.push(taskData);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Simpan ke localStorage
    alert("Tugas sudah dicatat");
    displayTasks();
    document.getElementById('taskForm').reset(); // Reset form setelah submit
}

// Fungsi untuk konfirmasi hapus
function confirmDelete(index) {
    const taskName = tasks[index].namaTugas;
    if (confirm(`Apakah anda yakin ingin menghapus catatan tugas ${taskName}?`)) {
        tasks.splice(index, 1); // Hapus tugas
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Simpan ke localStorage
        displayTasks(); // Perbarui tampilan
    }
}

// Fungsi untuk konfirmasi hapus permanen
function confirmPermanentDelete(index) {
    const taskName = tasks[index].namaTugas;
    if (confirm(`Apakah anda yakin ingin menghapus permanen catatan tugas ${taskName}?`)) {
        tasks.splice(index, 1); // Hapus tugas secara permanen
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Simpan ke localStorage
        displayTasks(); // Perbarui tampilan
    }
}
