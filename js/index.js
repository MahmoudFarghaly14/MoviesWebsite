let 
btns = document.querySelectorAll('.btns li'),
img = document.querySelector('.image img'),
srcs = [
    "images/watch.jpg" ,
    "images/team-03.jpg" ,
    "images/team-04.jpg" ,
    "images/team-05.png" ,
    "images/team-06.png" 
];
document.getElementsByClassName("btn")[0].addEventListener("click" , ()=>{
    img.src = srcs[0]
})
document.getElementsByClassName("btn")[1].addEventListener("click" , ()=>{
    img.src = srcs[1]
})
document.getElementsByClassName("btn")[2].addEventListener("click" , ()=>{
    img.src = srcs[2]
})
document.getElementsByClassName("btn")[3].addEventListener("click" , ()=>{
    img.src = srcs[3]
})
document.getElementsByClassName("btn")[4].addEventListener("click" , ()=>{
    img.src = srcs[4]
})
/* adding class active to link clicked and remove class active from other links */ 

function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        var current = this;
        for (var i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].classList.remove('active');
          } else if (current.classList.contains('active') === true) {
            current.classList.remove('active');
          } else {
            current.classList.add('active')
          }
        }
        e.preventDefault();
      });
    };
};
toggleItem(btns);


