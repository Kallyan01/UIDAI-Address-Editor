let e=document.getElementsByTagName("button");
// function cc(){
    // e.style.backgroundColor="red";
// };
// for(var i=1;i<3;i++){
    //var A=[A,B]
//for(var i=0;i<2;i++){
A.addEventListener("mouseover",function()
{
    e[0].style.background="red";
});

// B.addEventListener("mouseover",function()
// {
    // e[1].style.background="red";
// });
A.addEventListener("mouseout",function()
{
    e[0].style.background="blue";
});
B.addEventListener("mouseover",function()
 {
    e[1].style.background="red";
});
B.addEventListener("mouseout",function()
{
    e[1].style.background="blue";
});
