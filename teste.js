var links =[]
/*for(i=1;i<100;i++){
    
}*/
let url ='viacep.com.br/ws/01001000/json/'

let ajax = new XMLHttpRequest();


ajax.send()
for(i=1;i<100;i++){
    ajax.open('GET',url)

    ajax.onreadystatechange=()=>{
        if(ajax.status ==200 && ajax.readyState ==4){
            links.push(`Requisição via ajax ${ajax.responseText}`)
        }
    }
    
    ajax.send()
}

console.log(links)