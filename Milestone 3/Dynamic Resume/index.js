var myResume = document.getElementById('Resume');
var resumeForm = document.getElementById('Resume-Display');
myResume.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var linkedIn = document.getElementById('LinkenIn').value;
    var phone = document.getElementById('Contact').value;
    var dateofbirth = document.getElementById('Date of Birth').value;
    var gender = document.getElementById('Gender').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    var ResumeHtml = "\n   <h2><b><u>Resume</u></b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b> ".concat(name, "</p>\n<p><b>Email:</b> ").concat(email, "</p>\n<p><b>linkenIn:</b> ").concat(linkedIn, "</p>\n<p><b>Contact:</b> ").concat(phone, "</p>\n<p><b>Date Of Birth:</b> ").concat(dateofbirth, "</p>\n<p><b>Gender:</b> ").concat(gender, "</p>\n\n<h3><b>Education:</b><p> ").concat(education, "</p></h3>\n\n<h3><b>Experience:</b> <p>").concat(experience, "</p></h3>\n\n<h3><b>Skills:</b><p> ").concat(skills, "</p></h3");
    if (resumeForm) {
        resumeForm.innerHTML = ResumeHtml;
    }
    else {
        console.log('Resume is not found');
    }
});
