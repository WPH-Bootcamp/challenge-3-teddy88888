"use strict";
// 1. Impor paket prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

/**
 * Meminta masukan dari pengguna (menggunakan prompt-sync) dan memastikan masukan tersebut adalah angka yang valid.
 * Proses akan berulang hingga masukan yang diberikan dapat diubah menjadi angka.
 *
 * @param {string} promptMessage Pesan yang akan ditampilkan kepada pengguna.
 * @returns {number} Angka yang valid yang dimasukkan oleh pengguna.
 */
function getValidNumberInput(promptMessage) {
  let userInput;
  let parsedNumber;
  let isValid = false;

  while (!isValid) {
    // Gunakan fungsi prompt yang sudah diimpor
    userInput = prompt(promptMessage);

    // Cek jika masukan adalah string kosong atau dibatalkan (walaupun prompt-sync biasanya tidak mengembalikan null)
    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan tidak boleh kosong. Silakan masukkan angka.");
      continue;
    }

    // Coba konversi masukan ke angka
    parsedNumber = Number(userInput);

    // Periksa apakah hasil konversi adalah NaN (Not a Number)
    if (isNaN(parsedNumber)) {
      console.log(
        `❌ "${userInput}" bukan angka yang valid. Silakan coba lagi.`
      );
    } else {
      // Masukan valid, keluar dari loop
      isValid = true;
      return parsedNumber;
    }
  }
}

console.log("Aplikasi Dimulai...");
const usia = getValidNumberInput("Masukkan usia Anda (Angka saja): ");
const berat = getValidNumberInput("Masukkan berat badan Anda (kg): ");

console.log("--- Hasil ---");
console.log(`Usia Anda: ${usia} tahun.`);
console.log(`Berat badan Anda: ${berat} kg.`);

console.log("Aplikasi Perhitungan Gaji Bersih");
const gajiKotor = getValidNumberInput("Masukkan Gaji Kotor Bulanan Anda: Rp ");

console.log(`\n🎉 Data berhasil divalidasi!`);
console.log(
  `Gaji Kotor yang tercatat adalah: Rp ${gajiKotor.toLocaleString("id-ID")}`
);

console.log("Aplikasi Kalkulator Sederhana");

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let userInput;

  while (true) {
    // Loop berjalan terus hingga return
    userInput = prompt(promptMessage);

    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan operator tidak boleh kosong.");
      continue;
    }

    const operator = userInput.trim();

    if (validOperators.includes(operator)) {
      return operator; // Berhasil, kembalikan nilai dan hentikan loop
    } else {
      console.log(
        `❌ Operator "${operator}" tidak valid. Harap masukkan salah satu dari: ${validOperators.join(
          ", "
        )}.`
      );
    }
  }
}

// INI ADALAH BARIS YANG BENAR UNTUK MEMANGGIL FUNGSI ANDA:
const operatorPilihan = getValidOperatorInput(
  "Masukkan operator (+, -, *, /): "
);

console.log(`Anda memilih operator: ${operatorPilihan}`);

function getValidNumberInput(promptMessage) {
  let userInput;
  let validatedNumber;
  while (true) {
    userInput = prompt(promptMessage);
    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan tidak boleh kosong.");
      continue;
    }
    validatedNumber = Number(userInput);
    if (isNaN(validatedNumber)) {
      console.log(`❌ "${userInput}" bukan angka yang valid.`);
    } else {
      return validatedNumber;
    }
  }
}

// --- FUNGSI 2: MENDAPATKAN OPERATOR VALID ---
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let userInput;

  while (true) {
    userInput = prompt(promptMessage);
    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan operator tidak boleh kosong.");
      continue;
    }
    const operator = userInput.trim();
    if (validOperators.includes(operator)) {
      return operator;
    } else {
      console.log(
        `❌ Operator "${operator}" tidak valid. Harap masukkan salah satu dari: ${validOperators.join(
          ", "
        )}.`
      );
    }
  }
}

// --- FUNGSI 3: MELAKUKAN PERHITUNGAN ---
function calculate(num1, operator, num2) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      // Penanganan khusus untuk pembagian dengan nol
      if (num2 === 0) {
        return "Error: Pembagian dengan nol tidak diizinkan.";
      }
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2; // Modulo (Sisa bagi)
      break;
    case "**":
      result = num1 ** num2; // Pangkat (Eksponen)
      break;
    default:
      return "Error: Operator tidak dikenal.";
  }
  return result;
}

// --- PROGRAM UTAMA ---

console.log("====================================");
console.log("       🚀 KALKULATOR NODE.JS 🚀      ");
console.log("====================================");

// 1. Ambil Angka Pertama
const number1 = getValidNumberInput("Masukkan angka pertama: ");

// 2. Ambil Operator
const selectedOperator = getValidOperatorInput(
  "Masukkan operator (+, -, *, /, %, **): "
);

// 3. Ambil Angka Kedua
const number2 = getValidNumberInput("Masukkan angka kedua: ");

// 4. Lakukan Perhitungan
const finalResult = calculate(number1, selectedOperator, number2);

// 5. Tampilkan Hasil
console.log("\n====================================");
console.log(`Perhitungan: ${number1} ${selectedOperator} ${number2}`);
console.log(`Hasilnya adalah: ${finalResult}`);
console.log("====================================");

function add(a, b) {
  return a + b;
}

// 3. MAIN CALCULATOR LOGIC (Switch & If/Else)

// =====================================
// BAGIAN 1: IMPOR DAN FUNGSI UTILITY (Wajib di awal file)
// =====================================

// --- Fungsi Validasi Angka ---
function getValidNumberInput(promptMessage) {
  let userInput;
  while (true) {
    userInput = prompt(promptMessage);

    // Tambahkan kondisi keluar untuk loop utama
    if (
      (userInput && userInput.trim().toLowerCase() === "exit") ||
      (userInput && userInput.trim().toLowerCase() === "keluar")
    ) {
      return "EXIT_SIGNAL"; // Sinyal khusus untuk menghentikan program utama
    }

    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan tidak boleh kosong. Silakan masukkan angka.");
      continue;
    }

    const validatedNumber = Number(userInput);

    if (isNaN(validatedNumber)) {
      console.log(
        `❌ "${userInput}" bukan angka yang valid. Harap masukkan nilai numerik.`
      );
    } else {
      return validatedNumber;
    }
  }
}

// --- Fungsi Validasi Operator ---
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let userInput;

  while (true) {
    userInput = prompt(promptMessage);

    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan operator tidak boleh kosong.");
      continue;
    }

    const operator = userInput.trim();

    if (validOperators.includes(operator)) {
      return operator;
    } else {
      console.log(
        `❌ Operator "${operator}" tidak valid. Harap masukkan salah satu dari: ${validOperators.join(
          ", "
        )}.`
      );
    }
  }
}

// =================================
// BAGIAN 2: FUNGSI ARITMATIKA DASAR
// =================================

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function modulo(a, b) {
  return a % b;
}
function power(a, b) {
  return a ** b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

// =================================
// BAGIAN 3: FUNGSI LOGIKA UTAMA
// =================================

function continuousCalculator() {
  console.log("==================================================");
  console.log("          🚀 KALKULATOR BERULANG NODE.JS 🚀       ");
  console.log(" Ketik 'exit' atau 'keluar' untuk menghentikan program.");
  console.log("==================================================");

  // Gunakan while(true) untuk perulangan tak terbatas
  while (true) {
    let result;

    // 1. Ambil Angka Pertama
    const number1 = getValidNumberInput("\nAngka 1: ");

    // Cek sinyal keluar
    if (number1 === "EXIT_SIGNAL") {
      console.log("\n👋 Program kalkulator dihentikan. Sampai jumpa!");
      break; // Keluar dari perulangan while(true)
    }

    // 2. Ambil Operator
    const selectedOperator = getValidOperatorInput(
      "Operator (+, -, *, /, %, **): "
    );

    // 3. Ambil Angka Kedua
    const number2 = getValidNumberInput("Angka 2: ");

    // Cek sinyal keluar (jika pengguna memutuskan keluar di tengah jalan)
    if (number2 === "EXIT_SIGNAL") {
      console.log("\n👋 Program kalkulator dihentikan. Sampai jumpa!");
      break;
    }

    // 4. Gunakan SWITCH untuk memanggil fungsi yang sesuai dan menyimpan hasilnya
    switch (selectedOperator) {
      case "+":
        result = add(number1, number2);
        break;
      case "-":
        result = subtract(number1, number2);
        break;
      case "*":
        result = multiply(number1, number2);
        break;
      case "/":
        result = divide(number1, number2);
        break;
      case "%":
        result = modulo(number1, number2);
        break;
      case "**":
        result = power(number1, number2);
        break;
      default:
        result = "Error: Operator tidak dikenal."; // Seharusnya tidak terjadi karena validasi
    }

    // 5. Tampilkan Hasil
    console.log("--------------------------------------------------");
    console.log(`Perhitungan: ${number1} ${selectedOperator} ${number2}`);
    console.log(`HASIL: ${result}`);
    console.log("--------------------------------------------------");
  }
}

// Jalankan fungsi utama kalkulator
continuousCalculator();

// 4. Data Type Analysis & Conditional Output
// =====================================
// BAGIAN 1: IMPOR DAN FUNGSI UTILITY
// =====================================

// --- Fungsi Validasi Angka (getValidNumberInput) ---
function getValidNumberInput(promptMessage) {
  let userInput;
  while (true) {
    userInput = prompt(promptMessage);

    // Sinyal Keluar
    if (
      (userInput && userInput.trim().toLowerCase() === "exit") ||
      (userInput && userInput.trim().toLowerCase() === "keluar")
    ) {
      return "EXIT_SIGNAL";
    }

    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan tidak boleh kosong. Silakan masukkan angka.");
      continue;
    }

    const validatedNumber = Number(userInput);

    if (isNaN(validatedNumber)) {
      console.log(`❌ "${userInput}" bukan angka yang valid.`);
    } else {
      return validatedNumber;
    }
  }
}

// --- Fungsi Validasi Operator (getValidOperatorInput) ---
function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let userInput;
  while (true) {
    userInput = prompt(promptMessage);
    if (userInput === null || userInput.trim() === "") {
      console.log("❌ Masukan operator tidak boleh kosong.");
      continue;
    }
    const operator = userInput.trim();
    if (validOperators.includes(operator)) {
      return operator;
    } else {
      console.log(
        `❌ Operator "${operator}" tidak valid. Harap masukkan salah satu dari: ${validOperators.join(
          ", "
        )}.`
      );
    }
  }
}

// =================================
// BAGIAN 2: FUNGSI ARITMATIKA DASAR
// =================================

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function modulo(a, b) {
  return a % b;
}
function power(a, b) {
  return a ** b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

// =================================
// BAGIAN 3: ANALISIS HASIL BARU
// =================================

function analyzeResult(result) {
  console.log("\n--- ANALISIS HASIL ---");

  // Gunakan typeof untuk menentukan tipe data
  const resultType = typeof result;
  console.log(`Tipe Data Hasil: ${resultType}`);

  // --- KASUS 1: HASIL ADALAH ANGKA ---
  if (resultType === "number") {
    let classification = "";

    // Cek Positif, Negatif, atau Nol (if/else if/else)
    if (result > 0) {
      classification = "Positive (Positif)";
    } else if (result < 0) {
      classification = "Negative (Negatif)";
    } else {
      classification = "Zero (Nol)";
    }

    // Cek Integer atau Floating-point
    const integerType = Number.isInteger(result)
      ? "Integer (Bilangan Bulat)"
      : "Floating-Point (Desimal)";

    // Cek Ganjil/Genap (Operator Ternary)
    const parity = result % 2 === 0 ? "Even (Genap)" : "Odd (Ganjil)";

    console.log(`Nilai Klasifikasi: ${classification}`);
    console.log(`Tipe Numerik: ${integerType}`);

    // Kondisi kompleks menggunakan && dan ||
    if (result > 0 && result % 2 === 0) {
      console.log("Kondisi Kompleks: Positive and Even (Positif dan Genap) ✅");
    } else if (result < 0 || result === 0) {
      console.log(
        "Kondisi Kompleks: Negatif atau Nol (dihitung sebagai bukan positif) ➖"
      );
    }

    if (Number.isInteger(result)) {
      console.log(`Ganjil/Genap: ${parity}`);
    }

    // --- KASUS 2: HASIL ADALAH STRING (ERROR) ---
  } else if (resultType === "string") {
    console.log(`Pesan Error: ${result}`);

    // --- KASUS 3: UNDEFINED / NULL (menggunakan Nullish Coalescing Operator ??) ---
  } else {
    // Ini menangani undefined atau null jika terjadi
    const defaultMessage =
      result ??
      "Result is undefined or null, something went wrong! (Hasil tidak terdefinisi/null, ada kesalahan!)";
    console.log(`Status Hasil Tidak Terduga: ${defaultMessage}`);
  }
}

// =================================
// BAGIAN 4: FUNGSI UTAMA (MAIN LOOP)
// =================================

function continuousCalculator() {
  console.log("==================================================");
  console.log("  🚀 KALKULATOR DENGAN ANALISIS HASIL (Node.js) 🚀");
  console.log(" Ketik 'exit' atau 'keluar' untuk menghentikan program.");
  console.log("==================================================");

  while (true) {
    console.log("\n--- PERHITUNGAN BARU ---");

    // 1. Ambil Angka Pertama
    const number1 = getValidNumberInput("Angka 1: ");
    if (number1 === "EXIT_SIGNAL") break;

    // 2. Ambil Operator
    const selectedOperator = getValidOperatorInput(
      "Operator (+, -, *, /, %, **): "
    );

    // 3. Ambil Angka Kedua
    const number2 = getValidNumberInput("Angka 2: ");
    if (number2 === "EXIT_SIGNAL") break;

    // 4. Lakukan Perhitungan
    let finalResult;
    switch (selectedOperator) {
      case "+":
        finalResult = add(number1, number2);
        break;
      case "-":
        finalResult = subtract(number1, number2);
        break;
      case "*":
        finalResult = multiply(number1, number2);
        break;
      case "/":
        finalResult = divide(number1, number2);
        break;
      case "%":
        finalResult = modulo(number1, number2);
        break;
      case "**":
        finalResult = power(number1, number2);
        break;
    }

    // 5. Tampilkan dan Analisis Hasil
    console.log("\n====================================");
    console.log(
      `HASIL AKHIR: ${number1} ${selectedOperator} ${number2} = ${finalResult}`
    );
    console.log("====================================");

    analyzeResult(finalResult);

    // 6. Mekanisme Keluar Interaktif (Exit Mechanism)
    console.log("\n------------------------------------");
    const continuePrompt = prompt(
      "Lanjutkan perhitungan lain? (ya/tidak, atau 'y'/'n'): "
    );

    // Gunakan if statement dengan break untuk keluar (case-insensitive)
    if (
      (continuePrompt && continuePrompt.trim().toLowerCase() === "no") ||
      (continuePrompt && continuePrompt.trim().toLowerCase() === "n")
    ) {
      console.log("\n👋 Program kalkulator dihentikan. Sampai jumpa!");
      break;
    }
  }
}

// Jalankan fungsi utama
continuousCalculator();

// 5. Exit Mechanism (Loops & Conditionals)

// ... (Kode kalkulator, fungsi validasi, dan fungsi perhitungan di atas)

function continuousCalculator() {
  // ... (Kode inisiasi dan console.log di awal)

  while (true) {
    // ... (Kode untuk mengambil input Angka 1, Operator, Angka 2)
    // ... (Kode untuk melakukan perhitungan dan analisis hasil)

    // ------------------------------------
    // BAGIAN KRITIS: MEKANISME KELUAR
    // ------------------------------------

    console.log("\n------------------------------------");
    // Meminta masukan apakah ingin melanjutkan perhitungan
    const continuePrompt = prompt(
      "Lanjutkan perhitungan lain? (ya/tidak, atau 'y'/'n'): "
    );

    // Menggunakan if statement dan break untuk keluar (case-insensitive)
    if (
      (continuePrompt && continuePrompt.trim().toLowerCase() === "no") ||
      (continuePrompt && continuePrompt.trim().toLowerCase() === "n")
    ) {
      console.log("\n👋 Program kalkulator dihentikan. Sampai jumpa!");
      break; // Perintah ini menghentikan perulangan while(true)
    }
    // Jika pengguna memasukkan 'ya', 'y', atau input lain, loop akan berlanjut ke iterasi berikutnya.
  }
}

// ... (Panggilan fungsi continuousCalculator() di akhir file)

//6. Code Readability & `'use strict'`
