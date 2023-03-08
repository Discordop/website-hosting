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
        let deleteElement = document.getElementsByClassName('mobile_div_nav');
        deleteElement[0].remove();
        let element = document.getElementsByClassName('navigation_bar');
        element[0].style.borderBottom = "5px"
    } else {
        console.log(`navbar is ${navBarToggled}`)
        var navigationBar = document.getElementsByClassName('navigation_bar');
        navigationBar[0].insertAdjacentHTML("afterend", `
        <div class="mobile_div_nav">
        <div class="break"></div>
        <div class="mobile_div_nav">
        <nav>
        <ul class="nav_links">
            <li><a href="./pages/services.html">Services</a></li>
            <li><a href="#">Billing</a></li>
            <li><a href="#">Game Pannel</a></li>
            <li><a href="#">Server Status</a></li>
        </ul>
    </nav>
    </div>`)
        let element = document.getElementsByClassName('navigation_bar');
        element[0].style.borderBottom = "1000px";
    }
})                         
