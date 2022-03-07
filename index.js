//--------------------------> Fetch by the Api

const key = "u3Shg2O4KKM2qxJV9U88r9zaqalM0RNj";

async function fetchData(){
    try{
        let url = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`)
        let data = await url.json();

        console.log(data.data);

        showData(data.data);
    }
    catch(err){
        console.log("err:",err);
    }
}
fetchData()

//------------------------------------------------->

var home = document.getElementById("gifContain");

function showData(arr){
    arr.forEach(function(el){

    // var borderDiv = document.createElement("div");
    // borderDiv.setAttribute("id","borderDiv");

    var main = document.createElement("div");
    main.setAttribute("id","main");

    var img = document.createElement("img");
    img.setAttribute("id","imgDiv");
     img.src = el.images.original.url;

    var title = document.createElement("h3");
    title.setAttribute("id","desDiv");
    title.innerHTML = el.title

    main.append(img,title);

    home.append(main)

    //home.append(borderDiv);

    })
}