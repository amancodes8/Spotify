const navlist = document.getElementById('navlist');

const navitems = document.getElementById('navitems');

const xmark = document.getElementById('xmark');

xmark.addEventListener('click', function(){
    navlist.classList.toggle('hidden');
});

navitems.addEventListener('click', function(){
    navlist.classList.toggle('hidden');
});

