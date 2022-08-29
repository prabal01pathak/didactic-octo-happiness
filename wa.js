const qrCode = require("qrcode-terminal")

let qr = ""
qrCode.generate(qr, { small: true })