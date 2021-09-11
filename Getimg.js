
function Getimg(){
    
    var ajax = new XMLHttpRequest()
    let links = []

    function PegarLink(){     
        return new Promise((resolve,reject)=>{
           let url2 ="https://source.unsplash.com/900x900/?persona"
           ajax.open('GET',url2)
           
            ajax.onreadystatechange=()=>{
               if(ajax.status ==200 && ajax.readyState ==4){
                   links.push(`Requisição via ajax ${ajax.responseURL}`)
                   resolve(links) 
               }
               
           }
           ajax.send()       
        })     
   }
   
   async function link(){
       for(i=0;i<10;i++){
          await PegarLink().then(links=>console.log(links))
       }
       return links
   }
   return link()
}

module.exports = Getimg