let img  = document.querySelectorAll(".profileImg")

function Getimg(){
    var ajax = new XMLHttpRequest()
    function PegarLink(){     
        return new Promise((resolve,reject)=>{
           let url2 ="https://source.unsplash.com/900x900/?persona,person"
           ajax.open('GET',url2)
            ajax.onreadystatechange=()=>{
               if(ajax.status ==200 && ajax.readyState ==4){
                   linkImg = ajax.responseURL
                   resolve(linkImg) 
               }
           }
           ajax.send()       
        })     
   } 
   let item = 0
   async function link(){
       for(i=0;i<105;i++){
          await PegarLink().then(link=>{
            img[item].src =link
            ++item
          })
       }    
   }
   link()
}

Getimg()