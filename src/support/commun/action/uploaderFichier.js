import getLocateur from '../../mapping/fonctions/locateurs'


/**
 * Uploader un fichier
 * @param  {String} fichier - chemin du fichier a uploader
 * @param  {String} locateur - locateur de l'element dans lequel uploader
 */
export default (fichier, locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        const path = require('path');
        const filePath = path.join(__dirname, fichier);
        $(locateur).setValue(filePath);
    
};
