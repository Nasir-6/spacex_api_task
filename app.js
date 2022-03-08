console.log("JS is working");

let allLaunches = [];

const loadData = async () => {
  allLaunches = await fetch("https://api.spacexdata.com/v5/launches").then((result) => result.json());
};



// ====== This is code for building and rendering one example launch 0!!! =======

// const renderData = async () => {
//     await loadData();   // Need await to ensure it doesn't move on until it loads data
//     console.log(allLaunches);

//     console.log(allLaunches[0].name)
//     console.log(allLaunches[0].flight_number)
//     console.log(allLaunches[0].date_utc)
    // Use split to grab date and exclude Time
//    console.log(allLaunches[0].date_utc.split('T')[0])
//     console.log(allLaunches[0].links.patch.small)
//     console.log(allLaunches[0].details)
//     console.log(allLaunches[0].links.article)

//     // Let's try create and append to all-launch-container
//     allLaunchContainer = document.querySelector("#all-launch-container");

//     const launch = document.createElement('section');
//     launch.classList.add('launch');

//     const launchName = document.createElement('h2');
//     launchName.innerText = allLaunches[0].name
//     launch.appendChild(launchName)

//     const launchNumber = document.createElement('h3');
//     launchNumber.innerText = `Flight Number: ${allLaunches[0].flight_number}`
//     launch.appendChild(launchNumber)

//     const launchDate = document.createElement('h3');
//     launchDate.innerText = `Date: ${allLaunches[0].date_utc.split('T')[0]}`
//     launch.appendChild(launchDate)

//     const launchImg = document.createElement('img');
//     launchImg.src = allLaunches[0].links.patch.small
//     launch.appendChild(launchImg)

//     const launchDetailTitle = document.createElement('p');
//     launchDetailTitle.innerText = "Launch Details:"
//     launch.appendChild(launchDetailTitle)

//     const launchDetails = document.createElement('p');
//     launchDetails.innerText = allLaunches[0].details
//     launch.appendChild(launchDetails)

//     const launchArticle = document.createElement('a');
//     launchArticle.innerText = "Article Link"
//     launchArticle.href = allLaunches[0].links.article
//     launch.appendChild(launchArticle)

//     allLaunchContainer.appendChild(launch);

// }



// This is same as above but using for loop to render all the launches
const renderData = async () => {
  await loadData(); // Need await to ensure it doesn't move on until it loads data
  console.log(allLaunches);

  console.log(allLaunches[0].name);
  console.log(allLaunches[0].flight_number);
  console.log(allLaunches[0].date_utc);
  // Use split to grab date and exclude Time
  console.log(allLaunches[0].date_utc.split("T")[0]);
  console.log(allLaunches[0].links.patch.small);
  console.log(allLaunches[0].details);
  console.log(allLaunches[0].links.article);

  // Let's try create and append to all-launch-container
  allLaunchContainer = document.querySelector("#all-launch-container");

  // loop through all launches and render each launch 
  for (const oneLaunch of allLaunches) {
    const launch = document.createElement("section");
    launch.classList.add("launch");

    const launchName = document.createElement("h2");
    launchName.innerText = oneLaunch.name;
    launch.appendChild(launchName);

    const launchNumber = document.createElement("h3");
    launchNumber.innerText = `Flight Number: ${oneLaunch.flight_number}`;
    launch.appendChild(launchNumber);

    const launchDate = document.createElement("h3");
    launchDate.innerText = `Date: ${oneLaunch.date_utc.split("T")[0]}`;
    launch.appendChild(launchDate);

    const launchImg = document.createElement("img");
    launchImg.src = oneLaunch.links.patch.small;
    launch.appendChild(launchImg);

    const launchDetailTitle = document.createElement("p");
    launchDetailTitle.innerText = "Launch Details:";
    launch.appendChild(launchDetailTitle);

    const launchDetails = document.createElement("p");
    launchDetails.innerText = oneLaunch.details;
    launch.appendChild(launchDetails);

    const launchArticle = document.createElement("a");
    launchArticle.innerText = "Article Link";
    launchArticle.href = oneLaunch.links.article;
    launch.appendChild(launchArticle);

    allLaunchContainer.appendChild(launch);
  }
};

renderData();
