console.log("JS is working");

let allLaunches = [];


const loadData = async () => {
  allLaunches = await fetch("https://api.spacexdata.com/v5/launches")
    .then((result) => result.json())
};


const renderData = async () => {
    await loadData();
    console.log(allLaunches);
}

renderData();