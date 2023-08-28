var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname)
{
for(tablink of tablinks)
{
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents)
{
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() 
{
if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
} 
else 
{
    navbar.classList.remove("sticky");
}                
}