const fs = require('fs')
const path = require('path')

//Recuperation du numero de commande a partir du tc
export default function getNumCommande(tc) {
    var dossierATraiter = "src/fichiers/jdd/phila"
    var numCommande = ""

    fs.readdirSync(dossierATraiter).forEach(fichier => {
        var data = fs.readFileSync(dossierATraiter + "/" + fichier).toString()

        if (data.includes(tc)) {
            numCommande = data.split(";")[1]
        }
    })

    return numCommande
}