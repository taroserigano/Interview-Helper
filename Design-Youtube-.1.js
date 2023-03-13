-------YOUTUBE---------------



SQL -  can only vertically scale (better CPU) and can't horizontally scale like share the load with multiple DBs 


ENCODING 4k -> 720p/1080p:
AWS Elemental MediaConvert 


Amazon Rekognition 
has a machine learning capability to 
identify adult content by monitoring the content frame by frame 


S3 STEP Function 

fires lambda functions for each step once one step is completed. 

 
DynamoDB that has link to the video objects in S3 so users can seaarch 


CDN - content delivery network 

can globally deliver the static files very fast 
without having to access the original storage like S3 




SEARCHING 


when user enters search term, CDN checks if any caching exist, if not, it'll access the API Gateway that invoke Lambda method to retrieve the videos for the search term from Dynamo DB and show the list on the Screen 

WHEN CLICKED

*same  


HLS format video 

deliver chunks of video so the whole video won't have to be sent 


UNPOPULAR VIDEOS 
life cycle -> if access is less than 1000 after 30 days 
S3 -> S3 Infrequent Access -> S3 Glacier 

HTTPS for security over the network 























