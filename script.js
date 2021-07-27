var queryURL = "https://randomuser.me/api/?results=20&nat=us";

//function displayEmployee() {
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      //console.log(response.results);
        var employeeList = response.results;
    
        $('#table_id').dataTable( {
            "aaData": employeeList,
            "columns": [
                { "data": "name", "render": function ( data, type, row, meta ) {
                    return data.first + " " + data.last;
                }},
                { "data": "picture.thumbnail", "render": function ( data, type, row, meta ) {
                    return '<img src="'+data+'">';
                }},
                { "data": "dob.age"},
                { "data": "email" },
                { "data": "phone" },
              
            ]
        });
        console.log(employeeList);
    }); 
