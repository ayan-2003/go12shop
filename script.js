/*clicking the hambuger button*/
const bar= document.getElementById('bar');  
/*inputing the close button*/
const close= document.getElementById('close');       

/*by clicking the hambuger button it will show the navbar*/
const nav= document.getElementById('navbar');

/*activiting the bar menu*/
if(bar) {
    bar.addEventListener('click', () => {               /*performing arrow function after click*/
        nav.classList.add('active');
    })
}

/*making the close button activating*/
if(close) {
    close.addEventListener('click', () => {               
        nav.classList.remove('active');                /*removing the navbar by clicking the close button*/
    })
}

