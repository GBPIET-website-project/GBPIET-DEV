const getLinksData = async(type)=> {
    
}

function redirectTo(url){
    window.location.href=url;
}
function showNews(){
    document.getElementById("parent1").style.display="block";
    document.getElementById("parent2").style.display="none";
    document.getElementById("parent3").style.display="none";
    document.getElementById("b1").style.backgroundColor = "antiquewhite"
    document.getElementById("b2").style.backgroundColor = "white"
    document.getElementById("b3").style.backgroundColor = "white"
    


}
function showTenders(){
    document.getElementById("parent1").style.display="none";
    document.getElementById("parent3").style.display="none";
    document.getElementById("parent2").style.display="block";
    document.getElementById("b2").style.backgroundColor = "antiquewhite"
    document.getElementById("b1").style.backgroundColor = "white"
    document.getElementById("b3").style.backgroundColor = "white"




}
function showQuicklinks(){
    document.getElementById("parent1").style.display="none";
    document.getElementById("parent2").style.display="none";
    document.getElementById("parent3").style.display="block";
    document.getElementById("b3").style.backgroundColor = "antiquewhite"
    document.getElementById("b1").style.backgroundColor = "rgba(255, 255, 255, 0.905)"
    document.getElementById("b2").style.backgroundColor = "rgba(255, 255, 255, 0.905)"



}