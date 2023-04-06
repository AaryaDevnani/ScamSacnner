// const togg = document.getElementById("tot1");
// const togg2 = document.getElementById("tot2");
// const btn1 = document.getElementById("togg1");
// const btn2 = document.getElementById("togg2");
const bg = document.getElementById("bg");
const nf = document.getElementById("notFake");
const ii = document.getElementById("iIcon");
const ti = document.getElementById("tIcon");
const refreshButton = document.getElementById("refreshBtn");


function predictionComplete(prediction){
    console.log(prediction)
    // console.log(prediction)
}

  chrome.runtime.sendMessage("Loaded", async function (response) {
    let res = await response;
    let prediction = res.prediction;
    let userData = res.userData;
    let username = res.username;
    let fullname = res.fullname;
    let platform = res.platform
    console.log(res)
    predictionComplete(prediction);
    if(platform == "Instagram"){
        document.getElementById("followers").innerHTML = userData["#followers"];
        bg.style.background = "#f09433";
        bg.style.background = "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";
        bg.style.background = "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";
        bg.style.background = "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";
        bg.style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )";
        ti.style.display = "none";
        ii.style.display = "block";
    }
    else if(platform == "Twitter"){
        document.getElementById("followers").innerHTML = userData["followers_count"];
        bg.style.background = "none";
        bg.style.backgroundColor = "rgb(134, 237, 251)";
        ii.style.display = "none";
        ti.style.display = "block";
    }
    document.getElementById("username").innerHTML = username;
    document.getElementById("name").innerHTML = fullname;

    if( prediction == "Bot Account"){
        document.getElementById("botOrNot").innerHTML = "This user is Fake";
        nf.style.color = "rgb(150, 14, 14)"
    }
    else{
        document.getElementById("botOrNot").innerHTML = "This user is Real";
        nf.style.color = "color: rgb(14, 150, 104)"
    }
    
  });