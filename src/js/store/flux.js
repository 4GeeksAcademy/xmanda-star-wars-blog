const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}


			],
			characters: [],
			vehicles: [],
			planets: [],
			characterDetails: [],
			vehicleDetails: [],
			planetDetails: [],

		},
		actions: {

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((response) => response.json())
					.then((data) => setStore({ characters: data.results }))
					.catch((err) => console.log(err));
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then((response) => response.json())
					.then((data) => setStore({ vehicles: data.results }))
					.catch((err) => console.log(err));
			},

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then((response) => response.json())
					.then((data) => setStore({ planets: data.results }))
					.catch((err) => console.log(err));
			},

			getCharacterData: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(response => response.json())
					.then((data) => {
						console.log(data);
						setStore({ characterDetails: data.result.properties });
					})
					.catch(err => err)
					
			},
			getVehicleData: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then(response => response.json())
					.then((data) => {
						console.log(data);
						setStore({ vehicleDetails: data.result.properties });
					})
					.catch(err => err)
					
			},
			getPlanetData: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(response => response.json())
					.then((data) => {
						console.log(data);
						setStore({ planetDetails: data.result.properties });
					})
					.catch(err => err)
					
			},

		}

	}
};

export default getState;
