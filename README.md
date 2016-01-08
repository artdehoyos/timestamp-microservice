# Timestamp-Microservice
## Use
Pass a date, either as a Unix timestamp or a natural-language date, receive JSON with both formats. Input should be sent as part of the URL.
## Examples
### Example Input
* https://my.domain.com/January%207%202016
* https://my.domain.com/1452124800
### Example Output
* {"natural":"January 7, 2016","unix":"1452124800"}
