"use strict"
console.clear();


const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

// const endPoint = baseUrl + resource;
const params = { "_limit": 6 };
// console.log(endPoint + "?_limit=6");
const boxCard = document.getElementById("container-card");
// console.log(boxCard);

axios.get(baseUrl + resource, { params }).then((res) => {
    // console.log(res.data);
    const resData = res.data;

    for (let i = 0; i < resData.length; i++) {
        const userData = resData[i];
        const card = `
        <div class="card">
                <img src="${userData.url}" alt="${userData.title}" style="width:100%">
                <div class="card-container debug">
                    <p>${userData.title}</p>
                </div>
            </div>`
        boxCard.innerHTML += card;
        console.log(userData);

    }


});




