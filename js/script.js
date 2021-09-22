var icon = document.querySelector('.burgerIconWrapper');
icon.onclick = function()
{    
    var x = document.querySelector('.dropdownMenuWrapper');    
    if (x.style.display === "none" || x.style.display === '') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
