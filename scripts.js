function changeLayout(){
    document.getElementById("slogan").style.display = "none"
    document.getElementById("left").style.flexDirection = "row"
    var x = document.getElementById("texto").style
    // x.backgroundColor = "black"
    x.margin = "none"
    x.width = "20%"
    x.height = "80%"
    x.marginLeft = "20px"
    x.marginRight = "60px"
    x.marginTop = "60px"
    var y = document.getElementById("imgFrame").style
    y.height = "77%"
    y.marginTop = "60px"
    y.marginLeft = "60px"
}

function stadium(){
    var x = document.getElementById("imgFrame").style;
    x.backgroundImage = "url('img/sonicsarena.jpg')";
    changeLayout()

}

function team(){
    var x = document.getElementById("imgFrame").style;
    x.backgroundImage = "url('img/team.jpg')";
    changeLayout()

}

function city(){
    var x = document.getElementById("imgFrame").style;
    x.backgroundImage = "url('img/city.jpg')";
    changeLayout()

}

// display: flex;
// background-color: #ae1929;
// width: 20%;
// height: 80%;
// justify-content: flex-start;
// margin-left:20px;
// margin-top:60px;
// margin-right:60px;