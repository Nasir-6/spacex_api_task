console.log("JS is working");

let allLaunches = [];


const loadData = async () => {
  allLaunches = await fetch("https://api.spacexdata.com/v5/launches")
    .then((result) => result.json())
};


const renderData = async () => {
    await loadData();   // Need await to ensure it doesn't move on until it loads data
    console.log(allLaunches);

    console.log(allLaunches[0].name)
    console.log(allLaunches[0].flight_number)
    console.log(allLaunches[0].date_utc)
    console.log(allLaunches[0].date_utc.split('T')[0])
    console.log(allLaunches[0].links.patch.small)
    console.log(allLaunches[0].details)
    console.log(allLaunches[0].links.article)


}

renderData();