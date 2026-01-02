
// 谷歌地图
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

// 运费计算器
function calculate() {
    'calculate fastLine'

    var fastFinalTotal; //极速最终价格


    var packageLength  = parseInt(document.getElementById('packageLength').value);
    var packageWidth   = parseInt(document.getElementById('packageWidth').value);
    var packageHeight  = parseInt(document.getElementById('packageHeight').value);
    var packageWeight  = parseInt(document.getElementById('packageWeight').value);
    var volume = packageLength * packageWidth * packageHeight;
    var fastWeight = Math.ceil(packageWeight/100); //向上取整
    var fastWeightPrice = fastWeight * 1.2;
    var fastVolumePrice = (packageLength * packageWidth * packageHeight) / 5000 * 10 * 1.2; //体积重
    var fastTotal = Math.max(fastWeightPrice,fastVolumePrice); //取较高价格



    if (packageLength > 120 || packageWidth > 120 || packageHeight > 120 ){
        fastFinalTotal = fastTotal * 90 / 100 + 180;
        console.log("超费180")
    } else if (fastTotal >= 24) {
        fastFinalTotal = fastTotal * 90/100;
        console.log("九折")
    } else {
        fastFinalTotal = fastTotal;
        console.log(0)
    }

// *****

    var savingFinalTotal; //
    var savingWeightPrice;
    var savingWeight = Math.ceil(packageWeight/1000); //向上取整

    if (savingWeight < 3) {
        savingWeightPrice = 15;
        console.log("不足3公斤")
    } else {
        savingWeightPrice = savingWeight * 5;
    }


    var savingVolumePrice = (packageLength * packageWidth * packageHeight) / 6000 * 5; //体积重
    var savingTotal = Math.max(savingWeightPrice,savingVolumePrice); //取较高价格
    var savingOverSize = packageLength + 2 * (packageWidth + packageHeight);

    if (packageLength > 110){
        savingFinalTotal = savingTotal + 20;
        console.log("超110");
    } else if (savingOverSize > 300) {
        savingFinalTotal = savingTotal + 100;
        console.log("超加100");
        console.log(savingOverSize);
    } else {
        savingFinalTotal = savingTotal;
    }
// *****

    
    

    // 显示计算结果 display final price
    document.getElementById('volume').value = volume;
    document.getElementById('fastFinalTotal').value = fastFinalTotal;
    document.getElementById('savingFinalTotal').value = savingFinalTotal;
    return false; // to prevent form submission
}

function init() {
    'calculate fastLine';

    var theCalculator = document.getElementById('theCalculator');
    theCalculator.onsubmit = calculate;
}
window.onload = init;
