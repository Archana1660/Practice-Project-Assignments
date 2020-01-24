//Event Bubbling
var innerMostLayerB = document.getElementById("innerMostBubbling");
innerMostLayerB.addEventListener("click", ()=>alert(`Bubbling: Clicked on inner most layer`));

var innerLayerB = document.getElementById("innerBubbling");
innerLayerB.addEventListener("click", ()=> alert(`Bubbling: Clicked on inner layer`));

var outerMostLayerB = document.getElementById("outerMostBubbling");
outerMostLayerB.addEventListener("click", ()=>alert(`Bubbling: Clicked on outer most layer`));

//Event Capturing

var outerMostLayerC = document.getElementById("outerMostCapturing");
outerMostLayerC.addEventListener("click", ()=> alert(`Capturing: Clicked on OUTER MOST CAPTURING layer`), true);

var innerLayerC = document.getElementById("innerCapturing");
innerLayerC.addEventListener("click", ()=>alert(`Capturing: Clicked on INNER CAPTURING layer`), true);

var innerMostLayerC = document.getElementById("innerMostCapturing");
innerMostLayerC.addEventListener("click", ()=>alert(`Capturing: Clicked on INNER MOST CAPTURING layer`), true);
