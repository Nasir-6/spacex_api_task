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

    // Let's try create and append to all-launch-container
    allLaunchContainer = document.querySelector("#all-launch-container");
    
    const launch = document.createElement('section');
    launch.classList.add('launch');

    const launchName = document.createElement('h2');
    launchName.innerText = allLaunches[0].name
    launch.appendChild(launchName)

    const launchNumber = document.createElement('h3');
    launchNumber.innerText = allLaunches[0].flight_number
    launch.appendChild(launchNumber)

    const launchDate = document.createElement('h3');
    launchDate.innerText = allLaunches[0].date_utc.split('T')[0]
    launch.appendChild(launchDate)

    const launchImg = document.createElement('img');
    launchImg.src = allLaunches[0].links.patch.small
    launch.appendChild(launchImg)

    const launchDetailTitle = document.createElement('p');
    launchDetailTitle.innerText = "Launch Details:"
    launch.appendChild(launchDetailTitle)

    const launchDetails = document.createElement('p');
    launchDetails.innerText = allLaunches[0].details
    launch.appendChild(launchDetails)

    const launchArticle = document.createElement('a');
    launchArticle.innerText = "Article Link"
    launchArticle.href = allLaunches[0].links.article
    launch.appendChild(launchArticle)

    allLaunchContainer.appendChild(launch);

}

renderData();