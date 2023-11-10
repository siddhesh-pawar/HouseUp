
    var listings = [];

    function submitForm() {
        
        var apartmentName = document.getElementById('apartmentName').value;
        var location = document.getElementById('location').value;
        var apartmentNo = document.getElementById('apartmentNo').value;

     
        var newListing = {
            apartmentName: apartmentName,
            location: location,
            apartmentNo: apartmentNo
        };
        listings.push(newListing);

 
        document.getElementById('apartmentForm').reset();
        
    }
    export {listings};