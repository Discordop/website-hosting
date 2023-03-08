const button = document.querySelector('.menu_button');
console.log("test");
var navBarToggled = false;
button.addEventListener('click', () => {
    if (!navBarToggled) {
        navBarToggled = true;
    } else {
        navBarToggled = false
    }

    if (!navBarToggled) {
        console.log(`navbar is ${navBarToggled}`)
        let element = document.getElementById('nav_bar_id');
        console.log(element.style.paddingBottom);
        element.style.paddingBottom = "0px"
    } else {
        console.log(`navbar is ${navBarToggled}`)
        let element = document.getElementById('nav_bar_id');
        console.log(element.style.paddingBottom)
        element.style.paddingBottom = "100px"
    }
})                         
