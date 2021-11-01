window.onload = function()
{
    var search = document.querySelector('button'); 
    var input = document.querySelector('input'); 
    var result = document.querySelector('#result');  
    search.addEventListener('click',function(element)
    {  
        var  httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8888/info2180-lab4/superheroes.php?q=";  
        formInput = input.value;
        formInput= formInput.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
        formInput.trim(); 

        httpRequest.onreadystatechange = function()
        {
            if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
                var response =  httpRequest.responseText; 
                
                if(formInput != ""){
                    result.innerHTML = response
                }else{
                    result.innerHTML = this.responseText; 
                }

            }

                  
        }

        function sanitizeString(str) {
            response = response.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
            return response.trim();
         }
    
        httpRequest.open("GET", "http://localhost:8888/info2180-lab4/superheroes.php?q="+input.value, true); 
        httpRequest.send();  
    
        
        
    });
   
}
        
