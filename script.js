// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
          const missionTarget = document.getElementById("missionTarget");
          for(i=0; i<json.length; i++){
              missionTarget.innerHTML = missionTarget.innerHTML +`
      <div class="planets">
    <h2>Mission Destination</h2>
    <ol>
       <li>Name: ${json[i].name}</li>
       <li>Diameter: ${json[i].diameter}</li>
       <li>Star: ${json[i].star}</li>
       <li>Distance from Earth: ${json[i].distancefromEarth}</li>
       <li>Number of Moons: ${json[i].numberofMoons}</li>
    </ol>
    </div>
   <div>            
   <img class="planets" src=${json[i].image}>
   </div>`;
          

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput= document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value ==="" || cargoMassInput.value ==="") {
         alert("All fields are required!");
         // stop the form submission
        
         event.preventDefault();
      }
   });
if (fuelLevelInput.value<10000){
   document.getElementById("faultyItems").style.visibility = "visible";
   document.getElementById("launchStatus").style.color = "red";
   document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
}
if (cargoMassInput.value>10000){
   document.getElementById("cargoStatus").style.visibility = "visible";
   document.getElementById("cargoStatus").innerHTML = "there is too much mass for the shuttle to take off."
   document.getElementById("launchStatus").style.color = "red";
   document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
}
else {
   document.getElementById("launchStatus").style.color = "green";
   document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
}


          };

   });
});
});