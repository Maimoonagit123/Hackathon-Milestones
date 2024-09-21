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
    var ResumeHtml = "\n   <h2><b><u> Editable Resume</u></b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\"> ").concat(email, "</span></p>\n<p><b>linkenIn:</b><span contenteditable=\"true\"> ").concat(linkedIn, "</span></p>\n<p><b>Contact:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n<p><b>Date Of Birth:</b><span contenteditable=\"true\"> ").concat(dateofbirth, "</span></p>\n<p><b>Gender:</b><span contenteditable=\"true\"> ").concat(gender, "</span></p>\n\n<h3><b>Education:</b>\n<p contenteditable=\"true\">").concat(education, "</p></h3>\n\n<h3><b>Experience:</b> \n<p contenteditable=\"true\">").concat(experience, "</p></h3>\n\n<h3><b>Skills:</b>\n<p contenteditable=\"true\">").concat(skills, "</p></h3>");
    if (resumeForm) {
        resumeForm.innerHTML = ResumeHtml;
    }
    else {
        console.log('Resume is not found');
    }
});
