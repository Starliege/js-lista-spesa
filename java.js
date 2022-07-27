// Lista spesa FOR

const listaSpesa = ['droga', 'coltelli', 'dignità', 'berlusca', 'amici', 'felicità', 'acquetta', 'liquidiodubbioso'];


const listaFor = document.querySelector('.listaFor')
for(let i=0; i<listaSpesa.length; i++){
    const listaVar = listaSpesa[i];

    const li = document.createElement('li');
    li.className = 'list-item';
    li.append(listaVar);
    listaFor.append(li);
}

// Lista spesa WHILE

const listaWhile = document.querySelector('.listaWhile')

let i=0;
while(i <= listaSpesa.length-1){
    
    const listVar = listaSpesa[i];
    const li = document.createElement('li');
    li.className = 'list-item';
    li.append(listVar);
    listaWhile.append(li);
    i++;
}