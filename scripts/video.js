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