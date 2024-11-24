"use strict"
console.clear();


const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

// const endPoint = baseUrl + resource;
const params = { "_limit": 6 };
// console.log(endPoint + "?_limit=6");
const boxCard = document.getElementById("container-card");
// console.log(boxCard);

const overlay = document.getElementById("overlay");


axios.get(baseUrl + resource, { params }).then((res) => {
    // console.log(res.data);
    const resData = res.data;

    for (let i = 0; i < resData.length; i++) {
        const userData = resData[i];
        const card = document.createElement("div")
        card.innerHTML = `
                <img class="pin" src="img/pin.svg" alt="">
                <img src="${userData.url}" alt="${userData.title}" style="width:100%">
                <div class="card-container debug">
                
                    <p>${userData.title}</p>
                </div>`
        card.className = "card";
        card.id = userData.id;
        console.log(card);
        boxCard.appendChild(card);
        // console.log(userData);
        card.addEventListener("click", function () {

            getOverlay();
        });
        function getOverlay() {
            let existingOverlay = document.getElementById('overlay-elements');
            if (existingOverlay) {
                existingOverlay.remove()
            }
            const shadow = document.getElementById("shadow");
            shadow.style.display = "block";


            const overlayEl = document.createElement("div");
            overlayEl.id = "overlay-elements";

            overlayEl.innerHTML = `
            <button class="btn">
                    CHIUDI
                </button>
                <img src="${userData.url}" alt="" style="width: 300px;">
            `
            overlay.appendChild(overlayEl);
            overlay.style.display = 'flex';

            const closeBtn = document.querySelector(".btn");
            closeBtn.addEventListener("click", () => {
                overlayEl.remove();
                shadow.style.display = "none";
            })

        }
    }
    // console.log(boxCard);


});





