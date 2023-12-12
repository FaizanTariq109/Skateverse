  function hideSlogan() {
    document.querySelector('.slogan').classList.add('hidden');;
    document.querySelector('.rightIcons').classList.add('hidden');;
    document.querySelector('.searchContainer').style.width = '1162px';;
    document.querySelector('.searchNav').style.width = '1130px';;
  document.querySelector('.searchContainer').querySelector('.material-symbols-outlined').textContent = 'close';
  }

  function showSlogan() {
    document.querySelector('.searchNav').style.width = '340px';;
    document.querySelector('.searchContainer').style.width = '372px';;
    document.querySelector('.slogan').classList.remove('hidden');;
    document.querySelector('.rightIcons').classList.remove('hidden');;
  document.querySelector('.searchContainer').querySelector('.material-symbols-outlined').textContent = 'search';
  }

