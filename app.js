window.onload = function()
{
    var search = document.querySelector('button'); 
    var input = document.querySelector('input'); 
    var result = document.getElementById('#result');  
    search.addEventListener('click',function(element)
    {  
        var  httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8888/info2180-lab4/superheroes.php?q=";  
        httpRequest.onreadystatechange = function()
        {
            if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
                var response =  httpRequest.responseText; 
                if(input.value != ""){
                    result.innerHTML = response
                }else{
                    result.innerHTML = this.responseText; 
                }

            }
                  
        }
    
        httpRequest.open("GET", "http://localhost:8888/info2180-lab4/superheroes.php?q="+input.value, true); 
        httpRequest.send();  
    
        
        
    });
   
}
        
