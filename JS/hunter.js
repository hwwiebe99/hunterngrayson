const menu = document.getElementsByClassName("menus");
const canseeme = document.getElementsByClassName("canseeme");
const holder = document.getElementById("holder")





function mouseover(elements)
{

    for(i=0; i <elements.length; i++)
    {
        elements[i].addEventListener('mouseenter', function() { 
            const menu = document.getElementsByClassName("menus");   
            for(i = 0; i <menu.length; i++)
                {
                    menu[i].hidden = false;
                } 
        });
        elements[i].addEventListener('mouseleave', function() {     
            const menu = document.getElementsByClassName("menus");   
            for(i = 0; i <menu.length; i++)
                {
                    menu[i].hidden = true;
                }
        });
    }
}
mouseover(canseeme);
mouseover(menu);