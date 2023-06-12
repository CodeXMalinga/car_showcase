export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '3ece19c0a3mshe07f53997618d08p16f7fdjsn49496bd74d68',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }


const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
});

const result = await response.json();

return result;
}