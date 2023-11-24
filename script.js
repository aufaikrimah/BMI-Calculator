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

        let bmi = weight / Math.pow(height / 100, 2);

        let category = "";

        let imagePath = "";

        if (bmi < 18.5) {
            category = "Oh no, you seem to be underweight:(";
            imagePath = "./img/underweight.png";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Yay, your weight is within the normal range!!";
            imagePath = "./img/normal.png";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Wow, it looks like you might be overweight!!";
            imagePath = "./img/overweight.png";
        } else {
            category = "Woops, it seems like you might have obesity:(";
            imagePath = "./img/obesity.png";
        }

        let modal = document.getElementById("messageModal");
        modal.innerHTML = "<strong style='color: #10A3B4; font-size:1.2rem;'><img src='" + imagePath + "' alt='BMI Icon'><br><br>" + category + "</strong><br><br><br>" +
                         "<span style='color: #10A3B4; font-size:1rem;'>Your BMI : </span><br>" +
                          "<strong style='color: #F89F73; font-size:3rem;'>" + bmi.toFixed(1) + "</strong><br>" ;
        
        weightError.innerHTML = "";
        heightError.innerHTML = "";

        let modalElement = new bootstrap.Modal(document.getElementById('okModal'));
        modalElement.show();

    } else {
        weightError.innerHTML = "Enter a weight with at least 2 digits, and the first digit should not be zero (0)";
        heightError.innerHTML = "Enter a height with at least 3 digits, and the first digit should not be zero (0)";
    }
}

function clearFormAndCloseModal() {

    document.getElementById("bmiForm").reset();

    let modal = new bootstrap.Modal(document.getElementById('okModal'));
    modal.hide();
}