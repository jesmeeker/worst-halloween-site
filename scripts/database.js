
/////comments are being made.....


const database = {
    parkAreas: [
        {id: 1, name: "Northeast"},
        {id: 2, name: "Northern"},
        {id: 3, name: "Northwest"},
        {id: 4, name: "Southwest"},
        {id: 5, name: "Southern"},
        {id: 6, name: "Southeast"},
    ], 
    guests: [
        {id: 1, firstName: "Jane", lastName: "Smith", currentGuest: true, parkAreasId: 1},
        {id: 2, firstName: "Janet", lastName: "Doe", currentGuest: true, parkAreasId: 2},
        {id: 3, firstName: "John", lastName: "Meeker", currentGuest: true, parkAreasId: 3},
        {id: 4, firstName: "Jon", lastName: "McKelvey", currentGuest: true , parkAreasId: 4},
        {id: 5, firstName: "Jonathan", lastName: "Stewart", currentGuest: false , parkAreasId:5 },
        {id: 6, firstName: "Jessica", lastName: "Philips", currentGuest: true , parkAreasId: 5},
        {id: 7, firstName: "Caleb", lastName: "DiGinero", currentGuest: true , parkAreasId: 6},
        {id: 8, firstName: "Justin", lastName: "German", currentGuest: true , parkAreasId: 2},
        {id: 9, firstName: "Levi", lastName: "Grupa", currentGuest: true , parkAreasId: 3},
        {id: 10, firstName: "Zoe", lastName: "Tweedall", currentGuest: true , parkAreasId: 5},
        {id: 11, firstName: "Jason", lastName: "Call", currentGuest: false , parkAreasId: 1},
        {id: 12, firstName: "Linda", lastName: "Shelton", currentGuest: true , parkAreasId: 2},
        {id: 13, firstName: "Jonathan", lastName: "Vanderslice", currentGuest: true , parkAreasId:3},
        {id: 14, firstName: "Roxann", lastName: "Laub", currentGuest: true , parkAreasId: 4},
        {id: 15, firstName: "Breanna", lastName: "Giles", currentGuest: true , parkAreasId: 2},
        {id: 16, firstName: "Maddie", lastName: "Curry", currentGuest: false , parkAreasId: 2},
        {id: 17, firstName: "Olivia", lastName: "Stephenson", currentGuest: false , parkAreasId: 1},
        {id: 18, firstName: "Lisa", lastName: "Hayner", currentGuest: true , parkAreasId: 4},
        {id: 19, firstName: "Zach", lastName: "Goins", currentGuest: true , parkAreasId: 5},
        {id: 20, firstName: "Paul", lastName: "Clements", currentGuest: true , parkAreasId: 6},
        {id: 21, firstName: "Caitlin", lastName: "Tate", currentGuest: true , parkAreasId: 2},
        {id: 22, firstName: "Julia", lastName: "Frodigh", currentGuest: false , parkAreasId: 3},
        {id: 23, firstName: "Ellie", lastName: "Mugford", curretGuest: false , parkAreasId: 1},
        {id: 24, firstName: "Sara", lastName: "Rishel", currentGuest: true , parkAreasId: 2},
        {id: 25, firstName: "Kelly", lastName: "Price", currentGuest: true , parkAreasId: 5},
        {id: 26, firstName: "Karen", lastName: "Spindler", currentGuest: true , parkAreasId: 6},
        {id: 27, firstName: "Kathleen", lastName: "Primeaux", currentGuest: true , parkAreasId: 2},
        {id: 28, firstName: "Jenny", lastName: "Santrock", currentGuest: false , parkAreasId: 1},
        {id: 29, firstName: "Mitchel", lastName: "Cooney", currentGuest: true , parkAreasId: 5},
        {id: 30, firstName: "Thomas", lastName: "Kline", currentGuest: true , parkAreasId: 6},
        {id: 31, firstName: "Joe", lastName: "Winegar", currentGuest: true , parkAreasId: 4},
        {id: 32, firstName: "Hadleigh", lastName: "Martino", currentGuest: true , parkAreasId: 2},
        {id: 33, firstName: "James", lastName: "Riddle", currentGuest: false , parkAreasId: 2},
        {id: 34, firstName: "Faye", lastName: "Edwards", currentGuest: false , parkAreasId: 1},
        {id: 35, firstName: "Louis", lastName: "Miller", currentGuest: true , parkAreasId: 1},
        {id: 36, firstName: "Chip", lastName: "Brown", currentGuest: true , parkAreasId: 1},
        {id: 37, firstName: "Kristen", lastName: "Johnson", currentGuest: true , parkAreasId: 2},
        {id: 38, firstName: "Lainey", lastName: "Watts", currentGuest: true , parkAreasId: 1},
        {id: 39, firstName: "Jack", lastName: "Zubarev", currentGuest: false , parkAreasId: 1},
        {id: 40, firstName: "Rob", lastName: "Connolly", currentGuest: true , parkAreasId: 6}
    ], 
    serviceAreas: [
        {id: 1, name: "Rafting", servicesId: 1, parkAreasId: 1, attractionsId: 1},       
        {id: 2, name: "Canoeing", servicesId: 2, parkAreasId: 1, attractionsId: 1},
        {id: 3, name: "Fishing", servicesId: 3, parkAreasId: 1, attractionsId: 1},
        {id: 4, name: "Hiking", servicesId: 4, parkAreasId: 2, attractionsId: 2},
        {id: 5, name: "Picnicking", servicesId: 5, parkAreasId: 2, attractionsId: 2},
        {id: 6, name: "Rock Climbing", servicesId: 6, parkAreasId: 2, attractionsId: 2},
        {id: 7, name: "Lodging", servicesId: 7, parkAreasId: 3, attractionsId: 3},
        {id: 8, name: "Lodging", servicesId: 7, parkAreasId: 3, attractionsId: 4},
        {id: 9, name: "Parking", servicesId: 8, parkAreasId: 3, attractionsId: 3},
        {id: 10, name: "Parking", servicesId: 8, parkAreasId: 3, attractionsId: 4},
        {id: 11, name: "Parking", servicesId: 8, parkAreasId: 3, attractionsId: 5},
        {id: 12, name: "Information", servicesId: 9, parkAreasId: 3, attractionsId: 3},
        {id: 13, name: "Information", servicesId: 9, parkAreasId: 3, attractionsId: 4},
        {id: 14, name: "Information", servicesId: 9, parkAreasId: 3, attractionsId: 5},
        {id: 15, name: "Picknicking", servicesId: 5, parkAreasId: 3, attractionsId: 3},
        {id: 16, name: "Picknicking", servicesId: 5, parkAreasId: 3, attractionsId: 4},
        {id: 17, name: "Fishing", servicesId: 3, parkAreasId: 4, attractionsId: 6},
        {id: 18, name: "Hiking", servicesId: 4, parkAreasId: 4, attractionsId: 6},
        {id: 19, name: "Information", servicesId: 9, parkAreasId: 5, attractionsId: 8},
        {id: 20, name: "Lodging", servicesId: 7, parkAreasId: 5, attractionsId: 7},
        {id: 21, name: "Parking", servicesId: 8, parkAreasId: 5, attractionsId: 7},
        {id: 22, name: "Parking", servicesId: 8, parkAreasId: 5, attractionsId: 8},
        {id: 23, name: "Parking", servicesId: 8, parkAreasId: 5, attractionsId: 9},
        {id: 24, name: "Food Vendors", servicesId: 10, parkAreasId: 6, attractionsId: 10},
        {id: 25, name: "Hiking", servicesId: 4, parkAreasId: 6, attractionsId: 10},
        {id: 26, name: "Picknicking", servicesId: 5, parkAreasId: 6, attractionsId: 10},
        {id: 27, name: "Zip Lines", servicesId: 11, parkAreasId: 6, attractionsId: 10}
    ], 
    services: [
        {id: 1, name: "Rafting"},
        {id: 2, name: "Canoeing"},
        {id: 3, name: "Fishing"},
        {id: 4, name: "Hiking"},
        {id: 5, name: "Picnicking"},
        {id: 6, name: "Rock Climbing"},
        {id: 7, name: "Lodging"},
        {id: 8, name: "Parking"},
        {id: 9, name: "Information"},
        {id: 10, name: "Food Vendors"},
        {id: 11, name: "Zip Lines"}
    ],
    attractions: [
        {id: 1, name: "Chamfort River", parkAreasId: 1},
        {id: 2, name: "Lost Wolf Hiking Trail", parkAreasId: 2},
        {id: 3, name: "Lodge", parkAreasId: 3},
        {id: 4, name: "Hotel", parkAreasId: 3},
        {id: 5, name: "Restaurant", parkAreasId: 3},
        {id: 6, name: "Gander River", parkAreasId: 4},
        {id: 7, name: "Campgrounds", parkAreasId: 5},
        {id: 8, name: "Office Park", parkAreasId: 5},
        {id: 9, name: "Playground", parkAreasId: 5},
        {id: 10, name: "Pine Bluffs Trails", parkAreasId: 6},
    ]
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkAreas => ({...parkAreas}))
}

export const getAttractions= () => {
    return database.attractions.map(attractions => ({...attractions}))
}

export const getServiceAreas = () => {
    return database.serviceAreas.map(serviceAreas => ({...serviceAreas}))
}

export const getServices = () => {
    return database.services.map(services => ({...services}))
}
