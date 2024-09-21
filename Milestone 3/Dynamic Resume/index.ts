const myResume = document.getElementById('Resume') as HTMLFormElement;
const  resumeForm = document.getElementById('Resume-Display') as HTMLDivElement;
myResume.addEventListener('submit', (event: Event)=>{

    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('Email') as HTMLInputElement).value
    const linkedIn = (document.getElementById('LinkenIn') as HTMLInputElement).value
    const phone = (document.getElementById('Contact') as HTMLInputElement).value
    const dateofbirth = (document.getElementById('Date of Birth') as HTMLInputElement).value
    const gender =(document.getElementById('Gender') as HTMLButtonElement).value
    const education = (document.getElementById('Education') as HTMLInputElement).value
    const experience= (document.getElementById('Experience') as HTMLInputElement).value
    const skills = (document.getElementById('Skills') as HTMLInputElement).value

    
   const ResumeHtml = `
   <h2><b><u>Resume</u></b></h2>
<h3><b>Personal Information</b></h3>
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>linkenIn:</b> ${linkedIn}</p>
<p><b>Contact:</b> ${phone}</p>
<p><b>Date Of Birth:</b> ${dateofbirth}</p>
<p><b>Gender:</b> ${gender}</p>

<h3><b>Education:</b><p> ${education}</p></h3>

<h3><b>Experience:</b> <p>${experience}</p></h3>

<h3><b>Skills:</b><p> ${skills}</p></h3`

if(resumeForm){
   resumeForm.innerHTML=ResumeHtml

}else{
    console.log('Resume is not found')
}

})
