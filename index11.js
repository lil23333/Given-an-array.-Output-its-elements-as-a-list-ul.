
let parent = document.querySelector('#parent');
let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
  let arr = ['lala', 'tada', 'dohh'];
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    parent.appendChild(li);
  }

});






 