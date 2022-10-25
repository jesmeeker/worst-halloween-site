import { getParkAreas, getAttractions, getServices, getGuests, getServiceAreas } from "./database.js";

let areas = getParkAreas()
let attractions = getAttractions()
let services = getServiceAreas()
let guests = getGuests()

//export and define a function that creats an HTML String
//Park Area Name followed by Attractions in the Area and Service Tags

export const parkAreasList = () => {
    let parkAreasHTML = `<article class="areaInformation">`
    
    for (const area of areas) {
        parkAreasHTML += `<element class="areasForEach"><h3 id="area--${area.id}">${area.name}</h3>`
        // parkAreasHTML += `<h4>Attractions</h4>`

        for (const attraction of attractions) {
            if (area.id === attraction.parkAreasId) {
                parkAreasHTML += `<div class="attraction-name">${attraction.name}</div>
                <ul class="comma-list">`
                for (const service of services) {

                    if (service.attractionsId === attraction.id)
                    
                    parkAreasHTML += `<li>${service.name}</li>`
                    
                }
                parkAreasHTML += `</ul>`
            }   
            
        }
        parkAreasHTML += `</element>`
    }
    parkAreasHTML += `</article>`
    return parkAreasHTML
}



document.addEventListener(
    "click", 
    (clickEvent) => {
       
        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("area")) {
            
            const [,areaId] = itemClicked.id.split("--")
            
            for (const area of areas) {
                if (area.id === parseInt(areaId)) {
                    let guestsInArea = []
                    for (const guest of guests) {
                        if (guest.parkAreasId === area.id && guest.currentGuest === true) {
                            guestsInArea.push(guest)
                            
                        }
                    }
                    window.alert(`There are currently ${guestsInArea.length} guests in the ${area.name} Section of the park.`)
            }
         }
    }
}
)