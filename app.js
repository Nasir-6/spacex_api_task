console.log("JS is working");

let allLaunches = [];



fetch("https://api.spacexdata.com/v5/launches")
.then(result => result.json())
.then((data) => allLaunches = data)
.then(() => console.log(allLaunches[0].flight_number));


// console.log(allLaunches);