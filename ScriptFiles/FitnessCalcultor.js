function calculateBMI() {
  const weight = $("#weight").val();
  const height = $("#height").val() / 100; // Convert height to meters
  const age = $("#age").val();
  const gender = $('input[name="gender"]:checked').val();
  const activityLevel = $("#activityLevel").val();

  const bmi = calculateBMIValue(weight, height);
  const bmiCategory = getBMICategory(bmi);

  const bmiResult = `<strong>Your BMI:</strong> ${bmi.toFixed(
    2
  )} (${bmiCategory})`;

  $("#bmiResult").html(`<div class="alert alert-info">${bmiResult}</div>`);
  calculateCalories(weight, height, age, gender, activityLevel);
}

function calculateBMIValue(weight, height) {
  return weight / (height * height);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  else if (bmi < 24.9) return "Normal Weight";
  else if (bmi < 29.9) return "Overweight";
  else return "Obese";
}

function calculateCalories(weight, height, age, gender, activityLevel) {
  const bmr = calculateBMR(weight, height, age, gender);
  const tdee = calculateTDEE(bmr, activityLevel);

  const goal = $("#goal").val();
  let calorieResult = "";

  switch (goal) {
    case "maintenance":
      calorieResult = `<strong>Maintenance Calories:</strong> ${tdee.toFixed(
        2
      )} kcal/day`;
      break;
    case "weightGain":
      calorieResult = `<strong>Weight Gain Calories:</strong> ${(
        tdee + 500
      ).toFixed(2)} kcal/day`;
      break;
    case "weightLoss":
      calorieResult = `<strong>Weight Loss Calories:</strong> ${(
        tdee - 500
      ).toFixed(2)} kcal/day`;
      break;
  }

  $("#calorieResult").html(
    `<div class="alert alert-success">${calorieResult}</div>`
  );
}

function calculateBMR(weight, height, age, gender) {
  if (gender === "male") {
    return 10 * weight + 6.25 * height * 100 - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height * 100 - 5 * age - 161;
  }
}

function calculateTDEE(bmr, activityLevel) {
  switch (activityLevel) {
    case "sedentary":
      return bmr * 1.2;
    case "light":
      return bmr * 1.375;
    case "moderate":
      return bmr * 1.55;
    case "active":
      return bmr * 1.725;
    default:
      return bmr;
  }
}
