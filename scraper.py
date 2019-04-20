def scrape_sockets():
	from bs4 import BeautifulSoup 
	import requests
	import json

	URL = "https://www.worldstandards.eu/electricity/plug-voltage-by-country/"
	keys = ['country', 'voltage', 'frequency','types'] 

	response = requests.get(URL)
	soup = BeautifulSoup(response.text, 'html.parser')
	
	# print(soup.prettify())

	sockets = soup.table.find_all('tr')

	sockets_list = [tuple(string for string in row.stripped_strings) for row in sockets]
	sockets_map = [dict(zip(keys, socket)) for socket in sockets_list[1:]]
	
	with open('data.json', 'w') as file:
		file.write(json.dumps({ "data": sockets_map }))


def retrieve_country_codes():
	import requests
	import json

	URL = "http://country.io/names.json"
	response = requests.get(URL)

	with open('countries.json', 'w') as file:
		resjson = response.json()
		file.write(json.dumps(resjson))


if __name__ == "__main__": 
	import json 
	import sys
	import re

	if 'scrape' in sys.argv:
		scrape_sockets()
		retrieve_country_codes()

	formatted = {}

	with open('data.json') as sockets_file:
		with open('countries.json') as codes_file:
			sockets = json.load(sockets_file)
			countries = json.load(codes_file)

			for socket in sockets['data']:
				for abbr, country in countries.items():
					match = re.search(country, socket['country'])
					
					if match:
						formatted[abbr] = { 
							"country": country,
							"voltage": socket['voltage'],
							"frequency": socket['frequency'],
							"types": socket['types'].split(' / ') 
						}

			print("sockets:", len(sockets["data"]))
			print("countries:", len(countries))

	with open('./src/assets/sockets.json', 'w') as writefile:
		writefile.write(json.dumps(formatted))
		print("formatted:", len(formatted))


		