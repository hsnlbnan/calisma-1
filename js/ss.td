curl -X POST  
     -H "accept: application/json" 
     -H "GUID: A3A7-CD3A-FEB6-15A3" 
     -H "Content-Type: application/json-patch+json" 
     -d "{ \}"

     $.ajax({
    type: 'post',
    url: "https://api.akilliticaretim.com/api/Product/ListProducts/1",        
    data: "userName": "user", "password": "123456",           

    success:function(response)
    {
        console.log("Success!!");
    },

    error : function(xhr, status, error)
    {
        console.log("Status of error message" + status + "Error is" + error);
    }   

});