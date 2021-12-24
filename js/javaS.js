let a;
        let date;
        let time;
        setInterval(() => {

            a = new Date();
            date = a.toLocaleDateString();
            time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            document.getElementById('time').innerHTML =  time + ' on ' + date;

        }, 1000);

navList = document.queryCommandValue('.navList')
burger = document.querySelector('.burger')
navbar = document.queryCommandValue('.navbar')
rightNav = document.queryCommandValue('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-vlass-resp');
    navbar.classList.toggle('h-nav-resp');


})
