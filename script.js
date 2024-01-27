document.addEventListener("DOMContentLoaded", function () {
    
    const aboutText = "Hey there! I'm Pranali Sawadh, a second-year IT student with a passion for technology. From programming languages like Python to network administration and cybersecurity, I'm diving deep into the world of IT. I love problem-solving and thrive in collaborative environments. Let's connect and explore the endless possibilities in technology together!";

    document.getElementById("aboutText").innerText = aboutText;
    const email = "2022bit033@sggs.ac.in"
    document.getElementById("email").innerText = email;
    


    document.getElementById("instabutton").addEventListener("click", function(){
        var instagramLink = "https://www.instagram.com/pranali_1226?utm_source=qr&igsh=b3BqN2hkdG1yajQ3";
        window.open(instagramLink,"_blank");

    });
    document.getElementById("gitbutton").addEventListener("click", function(){
        var gitLink = "https://github.com/pranali2606";
        window.open(gitLink,"_blank");

    });

    document.getElementById("linkdinbutton").addEventListener("click" ,function(){
        var linkdinlink = "https://www.linkedin.com/in/pranali-sawadh-17a8a6291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
        window.open(linkdinlink,"_blank");
    });


    
    const bottom = [
        { name: "Human following bot", description: "This project was done by me in the first year of my college in ths i used arduino and arduino IDE for programming my bot.This project took around 2 months to get completed and it was successfully presented by me and was kept in college exhibition." },
        { name: "MultiGas Sensor", description: "This project was done by me in SIH2023 PSID-1368.This was a team project in which we used different gas sensor and made a multi gas sensor.This projected was selected and we got second prize from GOI.This was the major project that was successfully completed by me and my Teammates which got us recognition in our college." }
        
    ];

    const projects = document.getElementById("projects");
    bottom.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projects.appendChild(projectDiv);
    });
});

function toggleHide(){
    if(aboutText.style.display !="none"){
    aboutText.style.display = "none";
    }
    else{
        aboutText.style.display = "block";
    }

}