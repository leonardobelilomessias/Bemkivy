
let banco =[
    {'nome':'lucas','categoria':'motorista','descricao':'motorista particular','avaliacao':4.8},
    {'nome':'marcelo','categoria':'vidraceiro','descricao':'Coloco box e espelhos na sua casa','avaliacao':4.9},
    {'nome':'junior','categoria':'pedreiro','descricao':'Faço reformas e construçoes','avaliacao':2.7},
    {'nome':'brenda','categoria':'cozinheira','descricao':'Faço almoco, sirvo em festas e eventos','avaliacao':4.2},
    {'nome':'leonardo','categoria':'Programador','descricao':'Crio aplicativos e sistemas ','avaliacao':5.0},
    {'nome':'augusto','categoria':'vidraceiro','descricao':'Coloco box e espelhos na sua casavidraceiro com 15 anos de experiencia','avaliacao':4.9},
]

let profissionais = document.querySelector('#profissionais')

let corpopesquisa =document.getElementById('profissionais')
function fide(buscador){
    let indices =[]
    let resultado =[]
    let contador = 0
    for(item of banco){
        if(item.categoria.toLowerCase() == buscador){
            console.log('achei')
            indices.push(contador)
        }
       contador++ 
    }
    if(indices.length ==0){
        corpopesquisa.innerHTML='<h3 style="color:red">Profissional não encontrado</h3>'
    }
    for(item of indices){
        
        resultado.push(banco[item])
    }
    for(item of resultado){
        let profissional = document.createElement('article')
        profissional.setAttribute('id','profissional')
        profissionais.appendChild(profissional)
        let foto = document.createElement('img')
        foto.setAttribute('src','./1.jpg')
        foto.setAttribute('width','200px')
        foto.setAttribute('height','150px')
        profissional.appendChild(foto)
        let inf = document.createElement('div')
        inf.setAttribute('id','infoProfissional')
        profissional.appendChild(inf)
       
        for(let i = 0 ; i < 4;i++){
        let p = document.createElement('p')
         let span = document.createElement('span')
         if(i==0){span.innerHTML =`<h3 class="nome1">${item.nome}</h3>`}
         else if(i==1){ span.innerHTML = `<p>categoria: </p>${item.categoria}`}
         else if(i ==2){span.innerHTML = `<p>Descrição: </p>${item.descricao}`}
         else{span.innerHTML = `<p>Avaliação :</p>${item.avaliacao}`}
         p.appendChild(span)
         inf.appendChild(p)
        }
         
       
    }
}

let btnBusca = document.getElementById('btnBuscar')

btnBusca.onclick=()=>{
    corpopesquisa.innerHTML =''
    let buscar = document.getElementById('buscar').value
    
    if(buscar.trim() ==''){
        corpopesquisa.innerHTML ='<h3>Por favor digite um proficional valido</h3>'
    }else{
        fide( buscar.toLowerCase().trim())
    }
    
       
}
