window.onload = function()
{
    var search = document.querySelector('.btn'); 
    search.addEventListener('click',function(element)
    {  
        var  httpRequest = new XMLHttpRequest();
        var url = "http://localhost:8888/info2180-lab4/superheroes.php";  
        httpRequest.onreadystatechange = function()
        {
            if(httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200){
                var response =  httpRequest.responseText; 
                alert(response);
            }
            // else{
                            
            //     alert('There was a problem with the request.'); 
           // }        
        }
    
        httpRequest.open('Get', url, true); 
        httpRequest.send();  
    
        
        
    });
   
}
        
