import { getGuests, getParkAreas } from "./database.js";


//COMMENTS FOR TESTING


let guests = getGuests();
let areas = getParkAreas();



export const currentGuestsList = () => {
    let currentGuestsHTML = `<ul class="guest-list">`

    for (const guest of guests) {
        if (guest.currentGuest === true) {
        currentGuestsHTML += `<li id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`
    }

    
}
    currentGuestsHTML += "</ul>"
    return currentGuestsHTML
}

document.addEventListener(
    "click", 
    (clickEvent) => {
       
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("guest")) {

            const [,guestId] = itemClicked.id.split("--")

            for (const guest of guests) {
                if (guest.id === parseInt(guestId)) {
                    for (const area of areas) {
                        if (guest.parkAreasId === area.id) {
            
                        window.alert(`${guest.firstName} ${guest.lastName} is registered in the ${area.name} section`)
                    }
                }
            }
         }
    }
}
)