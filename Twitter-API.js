----TWITTER API ------


AUTHENTICATION 

-when login or signup, generates a token that gets stored in cookie 
-Store the cookie in header whenever you send HTTP req 



API THROTTLING-API Rate Limitter 

-use API Gateway 

API Gateway throttles requests to your API using the token bucket algorithm, where a token counts for a request. 




AWS throttling limits are applied across all accounts and clients in a region.

AWS WAF - Web Application Firewall 

set the limit between 100 - 50 million times per 5 mins, can detect and specify the IP address each time 


\





Tweets - /api/v/tweets 
         /api/v/:id/tweets
         /api/v/following/tweets 

        GET a list of tweets, 
        GET a list of specific user's tweets 
        GET a list of following tweets 

                /api/v/tweets 

        POST [text, media/timeline] 

Top Page - api/v/home 

        GET a list of general tweets 
        
Users 
        - api/v/users/:id/img   - GET - you can see the pic of the user 
        - api/v/users/:id/img   - POST - you can upload a new image  
        - api/v/users/:id       - POST - follow the user 

Trend 





















