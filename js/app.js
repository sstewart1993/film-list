document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const handleFormSubmit = function(event){
    event.preventDefault()

    const newListItem = document.createElement('li');
    newListItem.textContent = `Title: ${event.target.title.value} Time: ${event.target.time.value} Genre:${event.target.genre.value}`
    newListItem.classList.add('black', 'bold');

    const list = document.querySelector('ul');
    list.appendChild(newListItem);

    event.target.title.value = ''
    event.target.time.value = ''
    event.target.genre.value = ''

  }

  const handleFormDelete = function(){
    // let list = [];
    let movieList = document.querySelector('ul');
    movieList.innerHTML= ""
    
    
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const list = document.querySelector('#delete');
  list.addEventListener('click', handleFormDelete)



})

