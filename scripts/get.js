function get(url){
    return fetch(url)
.then(function(response){
    console.log("response is ", response);
    return response.json();
})
.then(function(data){
    //chuckSays.innerHTML = data.value;
    //console.log(data.value);
    return data;
    
});
}