const input = document.querySelector(".search");
const submit = document.querySelector(".submit");
const item = document.getElementsByClassName("container__list-item");
const category = document.getElementsByClassName("category");
const button = document.getElementsByClassName("button");
const list = document.querySelector(".container__list");
const remove = document.getElementById("remove1");


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// console.log("1");
 }
 else {
     
     input.addEventListener('keypress',function()
     {
     
        var itemFirst = 0; 
        var arritem = [];
        var count = 0;
        for(var i = 0 ; i < item.length ; i++)
        {
            for(var j = 0 ; j < item[i].children[2].childElementCount ; j++)
            {
                if(item[i].children[2].children[j].dataset.role !== input.value)
                {
                    
                }
                else 
                {
                    count++;
                    break;
                }
            }
            if(count <= 0)
            {
             item[i].style.display = "none";
             count = 0;
            }
            else 
            {
                itemFirst = i;
                arritem.push(itemFirst);
                count = 0;
            }
        }
        
      
     
         item[arritem[0]].style.marginTop = "-37rem";
         // console.log(item[0].button[0].getAttribute("data-role"));
     });
 }

remove.addEventListener("click",function(){
  input.value = "";
});
