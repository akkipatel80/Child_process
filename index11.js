const bcrypt = require("bcryptjs");
const hashPass = (password) => {
    try {
        let pass = bcrypt.hashSync(password, 10)
        process.send(pass)
        return
   } catch (err) {
        process.send({error: err.message})
   }
}

process.on("message", (data) => {
    console.log(data);
    hashPass(data.password);
})