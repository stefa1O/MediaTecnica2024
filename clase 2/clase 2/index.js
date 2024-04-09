import { kuromi } from './data/data.js'

console.log(kuromi)

const items = document.getElementById('item')
const templatedcard = document.getElementById ('template-card').content;
const fragment = document.createDocumentFragment();

const LoadData = (kuromi) =>{
    kuromi.forEach(data=> {
        const{id,name,image} =data
        templatedcard.querySelector('h5').textContent = name
        templatedcard.querySelector('img').setAttribute('src',image)
        const clone = templatedcard.cloneNode(true)
        fragment.appendChild(clone)
    });
    items.appendChild(fragment)
}


document.addEventListener('DOMContentLoaded', ()=>{
    LoadData(kuromi)
})
