import { getAttractions, getParkAreas, getServices, getGuests } from "./database.js";
import { currentGuestsList } from "./guests.js";
import { parkAreasList } from "./parkAreas.js";
import { serviceString } from "./services.js";

//// COMMENTS!!!!!!!!!!!! 

//MAKE IT MAKE SENSE 


const mainContainer = document.querySelector("#container")

const applicationHTML = `

<section class="Areas">
    
        <h2>Park Areas</h2>
        ${parkAreasList()}
    
</section>`


const asideContainer = document.querySelector("#guests")

const guestHTML = 
`
<section class="guests">
    <section>
    <h2>Guests</h2>
        ${currentGuestsList()}
</section>
</section>`

const servicesContainer = document.querySelector("#services")

const servicesHTML = 
`<div class="services"> Park Services:<ul class="comma-list">${serviceString()}
</ul>
</div>
`


mainContainer.innerHTML = applicationHTML
asideContainer.innerHTML = guestHTML
servicesContainer.innerHTML = servicesHTML

