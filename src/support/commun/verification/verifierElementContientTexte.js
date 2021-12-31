import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element contient le texte attendu
 * @param  {String} locateur - element a verifier
 * @param  {String} texte - texte a verifier
 */
export default (locateur, texte) => {

        //Recuperation du locateur reel
        try {
            locateur = getLocateur(locateur)

            const element = $(locateur)

            //*RAU - Start : 10/06/2021
            //Cette modification est faite pour traiter le cas d'un element qui contient un texte affiche sur deux lignes

            //expect(element).toHaveTextContaining(texte);
            var textElement = element.getText().replace(/\r?\n/g, " ");
        }
        catch {
            try {
                locateur = getLocateur(locateur)

                const element = $(locateur)

                //*RAU - Start : 10/06/2021
                //Cette modification est faite pour traiter le cas d'un element qui contient un texte affiche sur deux lignes

                //expect(element).toHaveTextContaining(texte);
                var textElement = element.getText().replace(/\r?\n/g, " ");
            }
            catch {

            }
        }

        const element = $(locateur)

        //*RAU - Start : 10/06/2021
        //Cette modification est faite pour traiter le cas d'un element qui contient un texte affiche sur deux lignes
        
        //expect(element).toHaveTextContaining(texte);
        var textElement = element.getText().replace(/\r?\n/g, " ");
        
        if (textElement.toLowerCase().includes(texte.toLowerCase()) == false) {
            throw new Error("ERREUR - Le texte (" + textElement + ") affiche ne correspond pas à l'attendu (" + texte + ")");
        }
        //*RAU - End : 10/06/2021
    
};
