import json 
import requests 

payload = {
  "name": "API", 
  "job":"API Testing" 
} 


res = requests.put(URI) 

json_res = res.json()  

print(json_res("Content-Type")) 

assert res.json()["job"] == 'Python Dev' 








