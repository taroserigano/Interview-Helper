What's App / FB Messenger 


Scalable 
Resilient 
Secure 




API Gateway 
-can directly integrate with SQS without having EC2 in between 




Message API 
-needs to be web socket 


Message queue
-SQS (scalable, resilient - auto-duplicates in different zones) 
-DLQ - unprocessed messages can be processed in the backend 
(Dead Letter Queues) store the msgs that other queues couldn't process due to errors 


backend- 
EC2 - ASG in multi-AZ



DynamoDB 
-can horizontally scale 
-pay as you go 




SENT status 
-1. first SQS will send back response - sent 
-2. msg stored in DB, backend send the response to Sender as "sent" 

READ status 
-when receiver opens app and opens the msg, "read" status will be sent to SQS, stored in DB, and then notify the Sender 




LAST ONLINE 
-while app is active, every 10 secs, call API to healthcheck to SQS, 
-backend will read the status 




SECURITY 



SSL - communication

KMS - on DB, EC2m SQS 







































