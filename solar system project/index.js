let e = document.getElementById("planets")
// console.log(" selected value " , e.options[e.selectedIndex].value)
if (!e.options[e.selectedIndex].value) {
    document.getElementById("des").innerHTML = "<h2>"+"What is Beautiful Place is this !!!!!"+"</h2>"
}
function calculateMass(planetName , gValue) {
    document.getElementById("des").innerHTML = "The Weight of an Object on "
    let value = "<b>" + planetName + "</b>";
    document.getElementById("planet-name").innerHTML = value;
    let earthMass = document.getElementById("mass").value;
    let mercuryMass = ((Number(earthMass) / 9.81) * gValue).toFixed(3);
    document.getElementById("mass-des").innerHTML = mercuryMass;
}

function planetImage(event) {
    let img = document.getElementById("image");
    let e = document.getElementById("planets")
    switch (e.options[e.selectedIndex].value) {
        case 'Mercury':
            img.src = './images/mercury.png';
            calculateMass(e.options[e.selectedIndex].value, 3.27)
            break;
        case 'Venus':
            img.src = './images/venus.png';
            calculateMass(e.options[e.selectedIndex].value, 8.87)
            break;
        case 'Earth':
            img.src = './images/earth.png';
            calculateMass(e.options[e.selectedIndex].value, 9.81)
            break;
        case 'Mars':
            img.src = './images/mars.png';
            calculateMass(e.options[e.selectedIndex].value, 3.72076)
            break;
        case 'Jupitor':
            img.src = './images/jupiter.png';
            calculateMass(e.options[e.selectedIndex].value, 24.58)
            break;
        case 'Saturn':
            img.src = './images/saturn.png';
            calculateMass(e.options[e.selectedIndex].value, 8.96)
            break;
        case 'Uranus':
            img.src = './images/uranus.png';
            calculateMass(e.options[e.selectedIndex].value, 8.69)
            break;
        case 'Neptun':
            img.src = './images/neptune.png';
            calculateMass(e.options[e.selectedIndex].value, 10.7)
            break;
        case 'Moon':
            img.src = './images/moon.png';
            calculateMass(e.options[e.selectedIndex].value, 1.6)
        default:
            break;
    }
}