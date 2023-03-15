
DYNAMODB 

1. loginto aws account 
2. create table 
3. use aws-sdk, select region, table name region, etc 

https://stackoverflow.com/questions/31600746/connecting-node-js-app-to-dynamodb 



CloudTrail 

-records what's done on AWS and by whom

-Greater visibility into user acvitiy . CloudTrail records each API calls made, who and which IP address and when. 

-Cloudtrail stores all the logs in the S3 


CloudWatch - SNS 

-monitors overall AWS services and applications 

-we can monitor metrics and logs 

-send notifications when metrics exceeds threshold.

-Centralized management system - set up in each region 



Lambda Set up 

Add Trigger in Lambda console 
OR S3 console section 

Add the function, 
Add the event type like when POST 





-like API Gateway, has API set up section, where you can set up the Lambda function that you create and set up in Lambda section. 

-like for REST API, the API gateway gives endpoint that triggers lambda. 



S3 vs Blob 

S3 - you can scale 100 bucket per account limit, number of objects is limitless 

Blob - 100 bucket per account and 500 TB storage limit 

S3 - each object can be set for Standard or IA 

Blob - entire storage account must be Hot or Cool 



Security - S3 supports server side encryption 

Availability - S3 is wider 










