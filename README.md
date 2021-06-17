Simple application to generate a fake newspaper-like image with dragons (hence the daily dragon name).

## Setup
Clone the repo and install dependencies using `npm install`.

Inside `data` folder create folders for months and days according to the following structure

- month number
  - day number

So let's say it's September 8 you would have

- 9
  - 8

Inside the day folder you'll need to create 3 files:
`name.txt` - This is where the Dragon name will live
`body.html` - The main text body. This is in HTML format.
`image.png` - The dragon image

## How to use

Once you have the data in place, just run `npm run build`
