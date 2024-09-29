function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate === '') {
        alert('Please select a valid birthdate.');
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    
    // Adjust age if birthdate hasn't occurred yet this year
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    document.getElementById('age-result').innerText = `Your age is: ${age} years`;
}