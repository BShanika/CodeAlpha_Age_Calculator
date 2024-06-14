function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');
    
    if (!dob) {
        result.style.display = "block";
        result.innerHTML = "Please enter your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        result.style.display = "block";
        result.innerHTML = "Invalid.Please enter valid date of birth.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust months and years if needed
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get days in previous month
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.style.display = "block";
    result.innerHTML = `<center>Your age is </center><br> ${years} years  ${months} months  ${days} days`;
}
