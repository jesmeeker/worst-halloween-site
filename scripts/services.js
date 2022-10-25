import { getServices, getServiceAreas, getParkAreas } from "./database.js";

const services = getServices()
const serviceAreas = getServiceAreas()
const areas = getParkAreas()


export const serviceString = () => {

        let serviceStringHTML = ``
    
        for (const service of services) {
            serviceStringHTML += `<li id="services--${service.id}" class="services">${service.name}</li>`
        }
        return serviceStringHTML
    }


const matchingServiceAreas = (service) => {
    let matchingServiceAreas = []
    
    for (const serviceArea of serviceAreas) {
        
        if (serviceArea.servicesId === service.id) {
            matchingServiceAreas.push(serviceArea)
        }
    }
    return matchingServiceAreas
}



const createAreaString = (matchingServiceAreas) => {
    
    const serviceAreaNames = new Set()
  
        for (const area of areas) {
            for (const each of matchingServiceAreas) {

            if (area.id === each.parkAreasId) {

                serviceAreaNames.add(area.name)
        }      
    }
}
const names = Array.from(serviceAreaNames).join(', ');
return names
}


let array = matchingServiceAreas(services[7])
console.log("Array")
console.log(array)

let map = createAreaString(array)
console.log("Map-String")
console.log(map)





document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("services")) {
           
            const [,serviceID] = itemClicked.id.split("--")
            
            for (const service of services) { 
                if (service.id === parseInt(serviceID)) {
                    
                    const serviceAreas = matchingServiceAreas(service)
                    const areasString = createAreaString(serviceAreas)
                    

                    window.alert(`${service.name} is available in ${areasString}`)
                }
            }
        }
     
    }
)
            