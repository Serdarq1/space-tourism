const moonBtn = document.getElementById("moon-btn")
const marsBtn = document.getElementById("mars-btn")
const europaBtn = document.getElementById("europa-btn")
const titanBtn = document.getElementById("titan-btn")
const moonNmae = document.getElementById("moon-name")
const moonDesc = document.getElementById("moon-desc")
const disValue = document.getElementById("dis-value")
const timeValue = document.getElementById("time-value")
const planetImg = document.getElementById("planet")

const crewPosition = document.getElementById("crew-position")
const crewName = document.getElementById("crew-name")
const crewDesc = document.getElementById("crew-desc")
const c1 = document.getElementById("nav-c1")
const c2 = document.getElementById("nav-c2")
const c3 = document.getElementById("nav-c3")
const c4 = document.getElementById("nav-c4")
const crewImg = document.getElementById("crew-image")

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const techMainText = document.getElementById("tech-main-txt")
const techDesc = document.getElementById("tech-desc")
const techImg = document.getElementById("tech-image")

const isIndexOpen = isIndexPage
const isCrewOpen = isCrewPage
const isDestinationOpen = isDestinationPage
const isTechnologyOpen = isTechnologyPage

if(isIndexOpen){

}else if(isCrewOpen){
    c1.onclick = function() { 
        crewPosition.textContent = "COMMANDER"
        crewName.textContent = "DOUGLAS HURLEY"
        crewDesc.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        crewImg.setAttribute("src", "assets/crew/image-douglas-hurley.webp")
        c1.style.backgroundColor = "white"

    }
    
    c2.onclick = function() { 
        crewPosition.textContent = "MISSION SPECIALIST"
        crewName.textContent = "MARK SHUTTLEWORTH"
        crewDesc.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        crewImg.setAttribute("src", "assets/crew/image-mark-shuttleworth.webp")
        c2.style.backgroundColor = "white"
    }
    
    c3.onclick = function() { 
        crewPosition.textContent = "PILOT"
        crewName.textContent = "VICTOR GLOVER"
        crewDesc.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        crewImg.setAttribute("src", "assets/crew/image-victor-glover.webp")
        c3.style.backgroundColor = "white"
    }

    c4.onclick = function() { 
        crewPosition.textContent = "FLIGHT ENGINEER"
        crewName.textContent = "ANOUSHEH ANSARI"
        crewDesc.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        crewImg.setAttribute("src", "assets/crew/image-anousheh-ansari.webp")
        c4.style.backgroundColor = "white"
    }
}else if(isDestinationOpen){
    moonBtn.onclick = function(){
        moonNmae.textContent = "MOON"
        moonDesc.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        disValue.textContent = "384,400 KM"
        timeValue.textContent = "3 DAYS"
        europaBtn.style.borderBottomColor = "transparent"
        marsBtn.style.borderBottomColor = "transparent"
        moonBtn.style.borderBottomColor = "white"
        titanBtn.style.borderBottomColor = "transparent"
        planetImg.setAttribute("src", "assets/destination/image-moon.png")
    }
    
    marsBtn.onclick = function(){
        moonNmae.textContent = "MARS"
        moonDesc.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        disValue.textContent = "225 MIL. KM"
        timeValue.textContent = "9 MONTHS"
        europaBtn.style.borderBottomColor = "transparent"
        marsBtn.style.borderBottomColor = "white"
        moonBtn.style.borderBottomColor = "transparent"
        titanBtn.style.borderBottomColor = "transparent"
        planetImg.setAttribute("src", "assets/destination/image-mars.png")
    }
    
    europaBtn.onclick = function(){
        moonNmae.textContent = "EUROPA"
        moonDesc.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        disValue.textContent = "628 MIL. KM"
        timeValue.textContent = "3 YEARS"
        europaBtn.style.borderBottomColor = "white"
        marsBtn.style.borderBottomColor = "transparent"
        moonBtn.style.borderBottomColor = "transparent"
        titanBtn.style.borderBottomColor = "transparent"
        planetImg.setAttribute("src", "assets/destination/image-europa.png")
    }
    
    titanBtn.onclick = function(){
        moonNmae.textContent = "TITAN"
        moonDesc.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        disValue.textContent = "1.6 BIL. KM"
        timeValue.textContent = "7 YEARS"
        europaBtn.style.borderBottomColor = "transparent"
        marsBtn.style.borderBottomColor = "transparent"
        moonBtn.style.borderBottomColor = "transparent"
        titanBtn.style.borderBottomColor = "white"
        planetImg.setAttribute("src", "assets/destination/image-titan.png")
    }
}else if(isTechnologyOpen){
    num1.onclick = function(){
        techMainText.textContent = "LAUNCH VEHICLE"
        techDesc.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        techImg.setAttribute("src", "./assets/technology/image-launch-vehicle-portrait.jpg")
    } 

    num2.onclick = function(){
        techMainText.textContent = "SPACEPORT"
        techDesc.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        techImg.setAttribute("src", "./assets/technology/image-spaceport-portrait.jpg")
    } 
    
    num3.onclick = function(){
        techMainText.textContent = "SPACE CAPSULE"
        techDesc.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        techImg.setAttribute("src", "./assets/technology/image-space-capsule-portrait.jpg")
    } 
}