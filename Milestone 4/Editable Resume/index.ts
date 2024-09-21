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
   <h2><b><u> Editable Resume</u></b></h2>
<h3><b>Personal Information</b></h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
<p><b>linkenIn:</b><span contenteditable="true"> ${linkedIn}</span></p>
<p><b>Contact:</b><span contenteditable="true"> ${phone}</span></p>
<p><b>Date Of Birth:</b><span contenteditable="true"> ${dateofbirth}</span></p>
<p><b>Gender:</b><span contenteditable="true"> ${gender}</span></p>

<h3><b>Education:</b>
<p contenteditable="true">${education}</p></h3>

<h3><b>Experience:</b> 
<p contenteditable="true">${experience}</p></h3>

<h3><b>Skills:</b>
<p contenteditable="true">${skills}</p></h3>`

if(resumeForm){
   resumeForm.innerHTML=ResumeHtml

}else{
    console.log('Resume is not found')
}

})
