$('#cs313').on('click', ()=>{
    swal({
            icon:"info",
            title:"This class conducted in offline",
            text:"Thank you",
            button:"close"          
    });
    
});
$('#cs317').on('click', ()=>{
swal("This class conduted in online","Google Classroom Code: XYZ5Q")
    .then(() => {
  swal("Thank You","","success");
});    
});