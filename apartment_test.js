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

export { listings, submitForm };


describe('submitForm', () => {
    beforeEach(() => {
       
        listings.length = 0;
    });

    test('should add a new listing to the listings array', () => {
       
        document.getElementById = jest.fn().mockReturnValueOnce({ value: 'AptName' })
                                                .mockReturnValueOnce({ value: 'Location' })
                                                .mockReturnValueOnce({ value: '123' });

      
        document.getElementById('apartmentForm').reset = jest.fn();

       
        submitForm();

        
        expect(listings).toEqual([
            {
                apartmentName: 'AptName',
                location: 'Location',
                apartmentNo: '123'
            }
        ]);

        
        expect(document.getElementById('apartmentForm').reset).toHaveBeenCalled();
    });
});
