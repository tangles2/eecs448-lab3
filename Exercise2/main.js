
NextImage = function(){
  let tmp = document.getElementById("image").getAttribute('src')

  if (tmp == "imgsrc/Devon.jpeg") {
    document.getElementById("image").src = "imgsrc/billself.jpg"
  }else if (tmp == "imgsrc/billself.jpg") {
    document.getElementById("image").src = "imgsrc/ku_bkc_championship_chalmer_t650.jpg"
  }else if (tmp == "imgsrc/ku_bkc_championship_chalmer_t650.jpg") {
    document.getElementById("image").src = "imgsrc/trob.jpg"
  }else if (tmp == "imgsrc/trob.jpg") {
    document.getElementById("image").src = "imgsrc/teahan.jpg"
  }else if (tmp == "imgsrc/teahan.jpg") {
    document.getElementById("image").src = "imgsrc/Devon.jpeg"
  }
}

LastImage = function(){
  let tmp = document.getElementById("image").getAttribute('src')

  if (tmp == "imgsrc/Devon.jpeg") {
    document.getElementById("image").src = "imgsrc/teahan.jpg"
  }else if (tmp == "imgsrc/teahan.jpg") {
    document.getElementById("image").src = "imgsrc/trob.jpg"
  }else if (tmp == "imgsrc/trob.jpg") {
    document.getElementById("image").src = "imgsrc/ku_bkc_championship_chalmer_t650.jpg"
  }else if (tmp == "imgsrc/ku_bkc_championship_chalmer_t650") {
    document.getElementById("image").src = "imgsrc/billself.jpg"
  }else if (tmp == "imgsrc/billself.jpg") {
    document.getElementById("image").src = "imgsrc/Devon.jpeg"
  }
}
