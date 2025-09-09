console.log('video script added');


function getTimeString(time) {
    // Year: considering 365 days (365 * 24 * 60 * 60 = 31536000 seconds)
    const year = parseInt(time / 31536000);

    // Remaining seconds after years
    let remaining = time % 31536000;

    // Month: 30 days (30 * 24 * 60 * 60 = 2592000 seconds)
    const month = parseInt(remaining / 2592000);
    remaining = remaining % 2592000;

    // Days
    const day = parseInt(remaining / 86400);
    remaining = remaining % 86400;

    // Hours
    const hour = parseInt(remaining / 3600);
    remaining = remaining % 3600;

    // Minutes
    const minute = parseInt(remaining / 60);

    // Seconds
    const second = remaining % 60;

    return `${year} year ${month} month ${day} day ${hour} hour ${minute} minute ${second} second ago`;
}

const removeActiveClass = () => {
    const buttons = document.getElementsByClassName('category_btn')
    console.log(buttons);
    for (let btn of buttons) {
        btn.classList.remove('active');
    }

}

// 1- Fetch, Load and show Catagorise on html
// Create loadCatagorige
const loadCatagoise = () => {

    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCatagoise(data.categories))
        .catch((error) => console.log(error));

}

const loadVideos = (searchText = "") => {

    // fetch the data
    fetch(
        `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
    )
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error));

}

const loadCatagoryVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            // sobaike active class remove korao
            removeActiveClass();
            //id er class k active korai
            const activeButton = document.getElementById(`btn_${id}`)
            activeButton.classList.add('active');
            displayVideos(data.category)
        })
        .catch((error) => console.log(error));

}

const loadDetails = async (videoId) => {
    console.log(videoId);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.video);
}
const displayDetails = (video) => {
    console.log(video);
    const detailContainer = document.getElementById('modal_content');

    detailContainer.innerHTML =
        `
    <img src=${video.thumbnail} />
    <p>${video.description} </p>
    `

    // way-1
    // document.getElementById("showModalData").click();
    // way-2
    document.getElementById("customModal").showModal();
}

// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = "";

    if (videos.length == 0) {
        videoContainer.classList.remove('grid');
        videoContainer.innerHTML =
            `
        <div class=" min-h-[300px] w-full flex flrx-col gap-5 justify-center items-center">
        <img src="asstes/Icon.png" />
        </div>

        <h2 class="text-center text-xl font-bold">
        No Content Here in this categery
        </h2>

        `;
        return;
    }
    else {
        videoContainer.classList.add('grid');
    }

    videos.forEach((video) => {
        // console.log(video);
        const card = document.createElement("div");
        card.classList = "card "
        card.innerHTML = `
        <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${video.others.posted_date?.length == 0 ? ""
                : `<span class =" absolute text-xs right-2 bottom-2 bg-black text-white rounded p-1 "> ${getTimeString(video.others.posted_date)} </span>`
            }
      
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
    </div>
    <div>
    <h2 class=" font-bold ">${video.title}</h2>
    <div class=" flex items-center gap-2 "> 
    <p class=" text-gray-400 "> ${video.authors[0].profile_name}  </p>

    ${video.authors[0].verified === true ? `<img class=" w-5 " src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" />
    </div>` : ""

            }

    <p> <button onclick="loadDetails('${video.video_id
            }')" class="btn btn-sm btn-error">details</button> </p>
    </div>
  </div>
        `
        videoContainer.appendChild(card);
    })
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// Create DisplayCatagories
const displayCatagoise = (categories) => {
    const categoryContainer = document.getElementById('catagories');

    categories.forEach((item) => {
        console.log(item);
        //create a button
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML =
            `
       <button id="btn_${item.category_id}" onClick="loadCatagoryVideos(${item.category_id})" class=" btn category_btn">
       ${item.category}
       </button>


       `

        // add button to catagory container
        categoryContainer.appendChild(buttonContainer);
    })

}

document.getElementById('search_input').addEventListener('keyup', (e) => {
    loadVideos(e.target.value);
    console.log(e.target.value);


})
loadCatagoise();
loadVideos();