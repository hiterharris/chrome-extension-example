async function fetchData() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/venue?name=Spectrum%20Center&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        await console.log(result?.data);
        document.getElementById("concerts").innerHTML = result?.data?.map(item => `<li>${item?.name}</li>`).join('');
    } catch (error) {
        console.error(error);
    }
}

fetchData();