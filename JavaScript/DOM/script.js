const grandparent = document.getElementById('grandparent-id');
const parents = Array.from(document.getElementsByClassName('parent'));

//grandparent.style.backgroundColor = 'white'
//changeColor(grandparent)
//parents.forEach(changeColor)

const parentsFromGrand = Array.from(grandparent.children);
parentsFromGrand.forEach(changeColor)

function changeColor(element){
    element.style.backgroundColor = 'yellow';
}