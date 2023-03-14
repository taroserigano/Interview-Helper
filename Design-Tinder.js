----Desgin Tinder---- 







S3 
-stores img 
-invoke lambda whenver profile gets created --> stores user info in Dynamo DB with URL to the media in s3 



LOCATION 

Altitude/Latitude 


Elastic Search 

-saves altitude/latitude 





USER-----> API Gateway------> Lamdba (updates geo location) ------> DB 


SEARCH 

USER-----> API Gateway------> Lamdba (updates geo location) ------> DB 





Recommended Matches 


caching 

-pre-calculate matches and stores in REDIS 
-invoke lamdba to fetch the data when user logs in 



























