const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '281eb1fdd5msh6c5168d0a74b1b8p1810c0jsncc5ebcd8e530',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));