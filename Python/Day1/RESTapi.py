import requests

import json

response = requests.get("https://api.github.com/users/27-AB")

print(response.json())
