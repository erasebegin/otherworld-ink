const fs = require('fs')
fs.writeFileSync('./.env', `PAYPAL_API_ID=${process.env.PAYPAL_API_ID}\n`)