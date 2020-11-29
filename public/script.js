$("#getDatabase").click(function(){
    console.log("Oi");
    $.ajax({
        url: "http://localhost:8081/getDatabase",
        method: "GET",
        dataType:"json",
        success: function(data){
            console.log(data)
            $('#databaseInfo').empty()
            $('#databaseInfo').append(JSON.stringify(data))
        }
    })
});