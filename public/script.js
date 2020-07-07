const cards = document.querySelectorAll(".card");
//estrutura de repetição que percorre array data para info_content em details_recipes    
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', function() {
        window.location.href = `/details_recipes/${i}`;
});
}
//estrutura para mostrar ou esconder conteúdo na array data
const ingrediente = document.querySelectorAll('.info_content')
const showIng = document.querySelectorAll('.showhide-button')

function esconder(index) {
    showIng[index].addEventListener("click", function(){
        if (ingrediente[index].classList.contains('display')) {
            ingrediente[index].classList.remove('display');
            showIng[index].innerHTML = 'ESCONDER';
        } else {
            ingrediente[index].classList.add('display');
            showIng[index].innerHTML = 'MOSTRAR';
        }
    } )
}

for (i = 0; i < ingrediente.length; i++) {
    esconder(i);
}
