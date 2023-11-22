function validateWeight() {
    let weightInput = document.getElementById("weight");
    let weightError = document.getElementById("weight-error");

    if (!weightInput.checkValidity()) {
        weightError.innerHTML = "Enter a weight with at least 2 digits, and the first digit should not be zero (0)";
    } else {
        weightError.innerHTML = "";
    }
}

function validateHeight() {
    let heightInput = document.getElementById("height");
    let heightError = document.getElementById("height-error");

    if (!heightInput.checkValidity()) {
        heightError.innerHTML = "Enter a height with at least 3 digits, and the first digit should not be zero (0)";
    } else {
        heightError.innerHTML = "";
    }
}

function calculateBMI() {
    let weightInput = document.getElementById("weight");
    let heightInput = document.getElementById("height");
    let weightError = document.getElementById("weight-error");
    let heightError = document.getElementById("height-error");

    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);

    if (!isNaN(weight) && !isNaN(height) && weight >= 10 && height >= 100) {
        // Menghitung BMI
        let bmi = weight / Math.pow(height / 100, 2);

        // Menentukan kategori BMI
        let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        // Menampilkan hasil pada modal
        let modal = document.getElementById("result-modal");
        modal.innerHTML = "<span style='color: #10A3B4;'>Your BMI is </span><br><br>" +
                          "<span style='color: #F89F73; font-size:50px;'>" + bmi.toFixed(1) + "</span><br>" +
                          "<br><span style='color: #10A3B4;'>which means you are </span>" +
                          "<span style='color:#F89F73;'>" + category + "</span><br><br>";
        
        // Create and append the close button
        let closeButton = document.createElement("button");
        closeButton.className = "btn";
        closeButton.textContent = "Re-Calculate";
        closeButton.onclick = closeModal;
        modal.appendChild(closeButton);

        modal.style.display = "block";

        // Menghapus pesan kesalahan jika ada
        weightError.innerHTML = "";
        heightError.innerHTML = "";
    } else {
        weightError.innerHTML = "Enter a weight with at least 2 digits, and the first digit should not be zero (0)";
        heightError.innerHTML = "Enter a height with at least 3 digits, and the first digit should not be zero (0)";
    }
}

function closeModal() {
    document.getElementById("result-modal").style.display = "none";
}