## Disclaimer
api ini saya buat hanya untuk belajar jadi bukan bagian dari best practice untuk membuat sebuah api

## How to use
Base url
```
 https://color-convert-api.vercel.app/
```
hanya method GET yang bisa dipakai membuat request convert (semua api berbasis pada url '/convert' dan bukan '/')

contoh:
```
 GET https://color-convert-api.vercel.app/convert/hex-rgb/ff55ff

 // hasil
 {
  "result":{
   "rgb"[255,85,255],
   "hex":"ff55ff",
   "status":200
  }
 }
```
semua hasil adalah json

### convert url 
|url | describe|
|-----|-----|
|`/rgb-hsl`| mengkonversi rgb dengan format `255-255-255` ke hsl contoh `/rgb-hsl/215-10-55`|
|`/rgb-hex`| mengkonversi rgb dengan format `255-255-255` ke hex contoh `/rgb-hex/215-10-55`|
|`/hex-rgb`| mengkonversi hex dengan format `ffffff` ke rgb contoh `/hex-rgb/ff5500`|
|`/hex-hsl`| mengkonversi hex dengan format `ffffff` ke hsl contoh `/hex-hsl/ff5500`|
|`/hsl-hex`| mengkonversi hsl dengan format `360-100-100` ke hex contoh `/hsl-hex/336-58-71`|
|`/hsl-rgb`| mengkonversi hsl dengan format `360-100-100` ke rgb contoh `/hsl-rgb/336-58-71`|
|`/keyword`| mengkonversi [keyword](https://github.com/ka-shifuka/simple-color-convert-api/blob/main/src/keyword.js)  ke rgb, hsl dan hex contoh `/keyword/blue`|

### How to install
jika kamu ingin menginstall color-convert-api secara local lakukan langkah berikut
`git clone https://github.com/ka-shifuka/simple-color-convert-api`
`cd simple-color-convert-api`
`pnpm install`
```
pnpm node // runing di nodejs
pnpm start // running di vercel secara local
pnpm deploy // deploy ke vercel pastikan memiliki akun vercel
```
pastikan vercel terinstall secara global
`pnpm add -g vercel`