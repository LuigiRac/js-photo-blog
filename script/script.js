"use strict"
console.clear();


const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";

// const endPoint = baseUrl + resource;
const params = { "_limit": 6 };
// console.log(endPoint + "?_limit=6");


axios.get(baseUrl + resource, { params }).then((res) => {
    console.log(res);
});
