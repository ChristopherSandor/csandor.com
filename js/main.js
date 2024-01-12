

let width;
let height;

window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
    sizeCheck();
}

function sizeCheck(){

    if(width >= 992){
        try{
            document.getElementById("adjustmentIMG").classList.remove("alignCenterIMG");
            document.getElementById("adjustmentIMG").classList.add("imgFiller");
        } catch {
            console.log(width);
        }
    }
    else{
        try{
            document.getElementById("adjustmentIMG").classList.remove("imgFiller");
            document.getElementById("adjustmentIMG").classList.add("alignCenterIMG");
        } catch {
            console.log(width);
        }
    }
}

// for the social sizes:
