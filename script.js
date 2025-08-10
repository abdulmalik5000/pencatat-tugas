let tasks = []; // Array untuk menyimpan tugas

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
    alert("Tugas sudah dicatat");
    displayTasks();
    document.getElementById('taskForm').reset(); // Reset form setelah submit
}

// Fungsi untuk menampilkan tugas
function displayTasks() {
    const taskTable = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    taskTable.innerHTML = ''; // Kosongkan tabel sebelum menampilkan
    tasks.forEach((task, index) => {
        const row = taskTable.insertRow();
        row.insertCell(0).innerText = task.namaSiswa;
        row.insertCell(1).innerText = task.kelas;
        row.insertCell(2).innerText = task.nik;
        row.insertCell(3).innerText = task.tanggal;
        row.insertCell(4).innerText = task.namaTugas;
        row.insertCell(5).innerText = task.catatan;
        row.insertCell(6).innerHTML = `
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="confirmDelete(${index})">Hapus</button>
            <button onclick="confirmPermanentDelete(${index})">Hapus Permanen</button>
        `;
    });
}

// Fungsi untuk konfirmasi hapus
function confirmDelete(index) {
    const taskName = tasks[index].namaTugas;
    if (confirm(`Jajaringgit menyatakan: Apakah anda yakin ingin menghapus catatan tugas ${taskName}?`)) {
        tasks.splice(index, 1); // Hapus tugas
        displayTasks(); // Perbarui tampilan
    }
}

// Fungsi untuk konfirmasi hapus permanen
function confirmPermanentDelete(index) {
    const taskName = tasks[index].namaTugas;
    if (confirm(`Jajaringgit menyatakan: Apakah anda yakin ingin menghapus permanen catatan tugas ${taskName}?`)) {
        tasks.splice(index, 1); // Hapus tugas secara permanen
        displayTasks(); // Perbarui tampilan
    }
}

// Fungsi untuk mengedit tugas
function editTask(index) {
    const task = tasks[index];
    document.getElementById('namaSiswa').value = task.namaSiswa;
    document.getElementById('kelas').value = task.kelas;
    document.getElementById('nik').value = task.nik;
    document.getElementById('tanggal').value = task.tanggal;
    document.getElementById('namaTugas').value = task.namaTugas;
    document.getElementById('catatan').value = task.catatan;
    // Hapus file upload untuk edit
    document.getElementById('fileUpload').value = '';

    // Ganti fungsi submit untuk update
    const submitButton = document.querySelector('form button[type="submit"]');
    submitButton.onclick = function() {
        updateTask(index);
    };
}

// Fungsi untuk memperbarui tugas
function updateTask(index) {
    const taskData = {
        namaSiswa: document.getElementById('namaSiswa').value,
        kelas: document.getElementById('kelas').value,
        nik: document.getElementById('nik').value,
        tanggal: document.getElementById('tanggal').value,
        namaTugas: document.getElementById('namaTugas').value,
        catatan: document.getElementById('catatan').value,
        file: document.getElementById('fileUpload').files[0] // Menyimpan file upload
    };

    tasks[index] = taskData; // Update tugas
    alert("Tugas telah diperbarui");
    displayTasks();
    document.getElementById('taskForm').reset(); // Reset form setelah update
    const submitButton = document.querySelector('form button[type="submit"]');
    submitButton.onclick = submitTask; // Kembalikan fungsi submit ke default
}

// Memuat tugas dari localStorage dan menampilkan
window.onload = function() {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    displayTasks();
};
