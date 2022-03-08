console.log("JS is working");

let allLaunches = [];


const loadData = async () => {
  allLaunches = await fetch("https://api.spacexdata.com/v5/launches")
    .then((result) => result.json())
};


const renderData = async () => {
    await loadData();   // Need await to ensure it doesn't move on until it loads data
    console.log(allLaunches);

    console.log(allLaunches[0].flight_number)


}

renderData();