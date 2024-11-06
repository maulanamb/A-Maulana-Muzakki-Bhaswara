let message = "Halo, Selamat datang";

alert(message);


let judul = "Daftar Mahasiswa Mata Kuliah Pemrograman Web"; 
let prodi = "Informatika";
let angkatan = 2022;

console.log(judul);
console.log(prodi+angkatan);

let mahasiswa = ["Leo Messi","Robert Lewandowski","Lamine Yamal","Klay Thompson","Kyrie Irving"];
mahasiswa[5]="Fadil Jaidi";
mahasiswa[6]="Vincent Orangdua";
console.log(mahasiswa);

let messagenilai = "Nilai Akhir Mata Kuliah Pemrograman Web";
console.log(messagenilai);

function isPass(Nilai) {
    return Nilai >= 70;
};

function isEligible(Semester, Nilai) {
    return Nilai >= 70 && Semester > 4;
}

let mhs0 = {
    NamaDepan: "Leo",
    NamaBelakang: "Messi",
    Semester: 3,
    Nilai: 90,
    Predikat: "A",
    get Status() {
        return isPass(this.Nilai) ? "Lulus" : "Tidak Lulus";
    },
    get keterangan() {
        return isEligible(this.Semester, this.Nilai) ?
            "Diperbolehkan mengambil Mata Kuliah Lanjutan" :
            "Tidak diperbolehkan mengambil Mata Kuliah Lanjutan";
    }
};

let mhs1 = {
    NamaDepan: "Robert",
    NamaBelakang: "Lewandowski",
    Semester: 5,
    Nilai: 85,
    Predikat: "A-",
    get Status() {
        return isPass(this.Nilai) ? "Lulus" : "Tidak Lulus";
    },
    get keterangan() {
        return isEligible(this.Semester, this.Nilai) ?
            "Diperbolehkan mengambil Mata Kuliah Lanjutan" :
            "Tidak diperbolehkan mengambil Mata Kuliah Lanjutan";
    }
};

let mhs2 = {
    NamaDepan: "Lamine",
    NamaBelakang: "Yamal",
    Semester: 3,
    Nilai: 72.5,
    Predikat: "B",
    get Status() {
        return isPass(this.Nilai) ? "Lulus" : "Tidak Lulus";
    },
    get keterangan() {
        return isEligible(this.Semester, this.Nilai) ?
            "Diperbolehkan mengambil Mata Kuliah Lanjutan" :
            "Tidak diperbolehkan mengambil Mata Kuliah Lanjutan";
    }
};

let mhs3 = {
    NamaDepan: "Klay",
    NamaBelakang: "Thompson",
    Semester: 5,
    Nilai: 82,
    Predikat: "A-",
    get Status() {
        return isPass(this.Nilai) ? "Lulus" : "Tidak Lulus";
    },
    get keterangan() {
        return isEligible(this.Semester, this.Nilai) ?
            "Diperbolehkan mengambil Mata Kuliah Lanjutan" :
            "Tidak diperbolehkan mengambil Mata Kuliah Lanjutan";
    }
};

let mhs4 = {
    NamaDepan: "Kyrie",
    NamaBelakang: "Irving",
    Semester: 5,
    Nilai: 92.5,
    Predikat: "A",
    get Status() {
        return isPass(this.Nilai) ? "Lulus" : "Tidak Lulus";
    },
    get keterangan() {
        return isEligible(this.Semester, this.Nilai) ?
            "Diperbolehkan mengambil Mata Kuliah Lanjutan" :
            "Tidak diperbolehkan mengambil Mata Kuliah Lanjutan";
    }
};

let mhs5 = {
    NamaDepan: "Fadil",
    NamaBelakang: "Jaidi",
    Semester: 3,
    Nilai: 77.5,
    Predikat: "B+",
    get Status() {
        return isPass(this.Nilai) ? "Lulus" : "Tidak Lulus";
    },
    get keterangan() {
        return isEligible(this.Semester, this.Nilai) ?
            "Diperbolehkan mengambil Mata Kuliah Lanjutan" :
            "Tidak diperbolehkan mengambil Mata Kuliah Lanjutan";
    }
};

let mhs6 = {
    NamaDepan: "Vincent",
    NamaBelakang: "Orangdua",
    Semester: 7,
    Nilai: 52.5,
    Predikat: "C-",
    get Status() {
        return isPass(this.Nilai) ? "Lulus" : "Tidak Lulus";
    },
    get keterangan() {
        return isEligible(this.Semester, this.Nilai) ?
            "Diperbolehkan mengambil Mata Kuliah Lanjutan" :
            "Tidak diperbolehkan mengambil Mata Kuliah Lanjutan";
    }
};

console.log(mhs0,mhs1,mhs2,mhs3,mhs4,mhs5,mhs6)