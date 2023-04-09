// //
const nameList = ["Mariana", "Maria", "Helena", "Marieli","Heitor","Iasmin","Iza","Lucas","Thiago","Laura",]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");
const adicionar = document.getElementById("buttonadicionar");
const remover = document.getElementById("buttonremove");
const filtrar = document.getElementById("buttonfiltrar");
const selecionar = document.getElementById("buttonselecionar");
//searchField.addEventListener("input", inputHandler);

adicionar.addEventListener("click", adicionarnome);
remover.addEventListener("click", removernome);
filtrar.addEventListener("click", filtrarnome);
selecionar.addEventListener("click", selecionarnome);

this.fillList();

function fillList(list = nameList) {
    listEl.innerHTML = "";
    for(let i=0; i < list.length; i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}

function inputHandler(){
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    });
    
    fillList(filteredList);
}


function adicionar() { //criando a função;

    nameList.push(searchField.value); //adiciona

    searchField.value = ""; 
    searchField.focus();

    alert(" adicionado com sucesso!! :)")

}

function remover(){ 

    var entrada = searchField.value; 
    if(entrada==""){ //remove 
        nameList.pop(); 
    }
    else { // procura o nome dentro da lista;
        var indice = nameList.indexOf(entrada); 
        nameList.splice(indice,1); 

    }
    searchField.value = ""; 
    searchField.focus();
    
    alert("removido com sucesso!! :)"); 
    
}

function filtrar(){ 

    searchField.addEventListener("input", inputHandler);  //chamando a função
    alert("ativado!! :)") 
}



