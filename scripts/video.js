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

// Create DisplayCatagories
const displayCatagoise = (data) => {
    // add Data in html
    console.log(data);
    
}


loadCatagoise();