
    var content1 = document.querySelector(".content")
    var content2 = document.querySelector(".content2")
    var content3 = document.querySelector(".content3")

    var next1 = document.querySelector(".next1");
    var next2 = document.querySelector(".next2");
    var next3 = document.querySelector(".next3");

    var back1 = document.querySelector(".back1");
    var back2 = document.querySelector(".back2");
    

    next1.onclick= function(){
            content1.style.left = "-1220px";
            content2.style.left = "1px";
          
        }
        back1.onclick= function(){
            content1.style.left = "1px";
            content2.style.left = "1220px";
            // progress.style.width = "120px";
        }
        next2.onclick= function(){
            content2.style.left = "-1220px";
            content3.style.left = "1px";
        }
        back2.onclick= function(){
            content2.style.left = "1px";
            content3.style.left = "1220px";
        }

