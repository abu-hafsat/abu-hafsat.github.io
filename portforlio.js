const button1 = document.getElementById("btn-about");
const projectButton = document.getElementById("btn-project");
const contactButton = document.getElementById("btn-contact");

button1.addEventListener('click', function () {
    document.getElementById('text-header').innerText = 'About me';
    document.getElementById('text').style.backgroundColor = 'aliceblue';
    document.getElementById('tex-2').style.display = 'none ';
    document.getElementById('tex-3').style.display = 'none ';
    document.getElementById('tex').style.display = 'flex ';
    document.getElementById('tex').innerText = ' My Name is Abdulrahman Jibril, a Professional MassCommunication Graduate, also an experienced and proficient Frontend Developer. with successfull Development skills of Interactive Web. and any Users Interface "UI"....';
    document.getElementById('tex').style.color = 'burlywood'    
    document.getElementById('text-header').style.color = 'burlywood'    
});

projectButton.addEventListener("click", function(){
    document.getElementById('text-header').innerText = 'My Projects';
    document.getElementById('text-header').style.color = 'burlywood';
    document.getElementById('text').style.backgroundColor = 'aliceblue';
    document.getElementById('tex-2').style.display = ' none';
    document.getElementById('tex-3').style.display = 'none ';
    document.getElementById('tex').style.display = 'none ';
    document.getElementById('tex').style.color = 'burlywood';

});

contactButton.addEventListener("click", function(){
    document.getElementById('text-header').innerText = 'Contact Me';
    document.getElementById('text-header').style.backgroundColor = 'aliceblue';
    document.getElementById('text-header').style.padding = '20px';
    document.getElementById('text-header').style.borderRadius = '20px';
    document.getElementById('tex').innerText = 'email: arabulasal@gmail.com';
    document.getElementById('tex-2').innerText = 'watssApp: 08038727983';
    document.getElementById('tex-3').innerText = 'facebook: Abu Hafsat Assalafi';
    document.getElementById('tex').style.backgroundColor = 'aliceblue'
    document.getElementById('tex-2').style.backgroundColor = 'aliceblue'
    document.getElementById('tex-3').style.backgroundColor = 'aliceblue'
    document.getElementById('tex-2').style.display = 'flex';
    document.getElementById('tex-3').style.display = 'flex';
    document.getElementById('tex').style.display = 'flex';
    document.getElementById('tex').style.justifyContent = 'center';
    document.getElementById('tex-2').style.justifyContent = 'center';
    document.getElementById('tex-3').style.justifyContent = 'center';
    document.getElementById('text').style.backgroundColor = 'burlywood'
});
