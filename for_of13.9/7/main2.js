myDiv.innerHTML+=` <ul>
<li>brasil</li>
<li>usa</li>
<li>greece</li>
<li>itali</li>
<li>lob</li>
<li>israel</li>
</ul>`
const COLLECTION_LIST=document.querySelectorAll('li')
div2.innerHTML+=
`
    
<button id="btn">change</button>
`

btn.addEventListener('click',  ()=> {
    for (const iterator of COLLECTION_LIST) {
    iterator.innerHTML=iterator.textContent.toUpperCase()
}
} )

