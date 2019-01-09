var crypto = require('crypto')

let algorithm = 'aes-256-ecb',
    password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY',
    iv = '60iP0h6vJoEa',
    sol ='fhsafhdsjakGd'
    var ivstring = iv.toString('hex').slice(0, 16)

function hash(phrase,sol)
{
var m = crypto.createHmac('sha512',sol)
        .update(phrase)
        .digest('hex')
return (m)
}

function encrypt(text,sol) {
    var cipher = crypto.createCipheriv(algorithm, password, sol)
    var encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex');
    var tag = cipher.getAuthTag(sol);
    return {
      content: encrypted,
      tag: tag
    };
  }

  function decrypt(encrypted) {
    var decipher = crypto.createDecipheriv(algorithm, password, sol)
        decipher.setAuthTag(encrypted.tag);
    var dec = decipher.update(encrypted.content, 'hex', 'utf8')
        dec += decipher.final('utf8');
    return dec;
  }

var z= hash(password,sol)
  console.log('sha512 metosd hex '+ z)
var hw = encrypt(z,sol)
    console.log(hw)
var mv =decrypt(hw)
    console.log('Расшифровшик ' + mv);

const buf = Buffer.from(sol);

console.log(crypto.randomFillSync(buf).toString('hex'));

crypto.randomFillSync(buf, 8);
console.log(buf.toString('hex'));

// The above is equivalent to the following:
crypto.randomFillSync(buf, 8, 2);
console.log(buf.toString('hex'));
