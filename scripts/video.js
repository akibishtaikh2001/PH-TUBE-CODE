console.log('video script added');
// 1- Fetch, Load and show Catagorise on html

// Create loadCatagorige
const loadCatagoise = () => {

    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCatagoise(data.categories))
        .catch((error) => console.log(error));

}

const loadVideos = () => {

    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error));

}

const cardDemo = {
    "category_id": "1001",
    "video_id": "aaab",
    "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
    "title": "Midnight Serenade",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
            "profile_name": "Noah Walker",
            "verified": false
        }
    ],
    "others": {
        "views": "543K",
        "posted_date": ""
    },
    "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos')
    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card "
        card.innerHTML = `
        <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;

        // add button to catagory container
        categoryContainer.appendChild(button);
    })

}


loadCatagoise();
loadVideos();