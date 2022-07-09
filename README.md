![Screenshot 2022-07-09 at 23-27-31 Contact Form ExpressJs NodeJs](https://user-images.githubusercontent.com/80452137/178125776-0b526828-19a6-4b48-862b-a2dafca08e23.png)

<p align="center">
simple easy to use contact form using ExpressJs & NodeJs
</p>
<p align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="50" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width="50" height="50"/>
</p>

## Installation & Setup

```sh
- git clone https://github.com/elregalo/star-wars-contact-form.git
- cd star-wars-contact-form
- add your email details to .env file
```

## Development

```sh
- npm run dev
- open your browser at type (http://127.0.0.1:8080), fill form and click send
```

## Curl

```sh
- curl -X POST \
  'http://127.0.0.1:8080/contact' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '{
 "fullNames": "John Doe",
 "email": "john@doe.com",
 "mobile": "+27000000000",
 "message": "something worked..."
}'
```

## Author

```plain
-Moobi Kabelo(@elregalo)
```
