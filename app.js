let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', postTwo);

// async function postOne(e) {

//     const body = {

//         "start": "2023-04-18 17:00:00",
//         "finish": "2023-04-18 17:30:00",
//         "full_name": "Test Api 2",
//         "mobile": "123456789",
//         "resource_id": "968189"

//     };
//     try {
//         let res = await fetch("");

//         let data = await res;
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

// }



async function postTwo(data) {
    const body = {
        "start": "2023-04-22T15:00",
        "finish": "2023-04-22T15:18",
        "full_name": "Test Add Booking 12",
        "mobile": "123456",
        "resource_id": "968197"
    };
    try {
        const req = await fetch(
            'https://www.supersaas.com/api/bookings.json?schedule_id=674910&checksum=8ad695a42e58aa550cb2f7723250fcce',
            {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            });
        const res = await req;
        console.log(res);
    } catch (err) {
        console.error(`ERROR: ${err.message}`);
    }
}
