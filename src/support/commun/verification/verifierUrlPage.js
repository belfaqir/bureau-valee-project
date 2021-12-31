import getUrl from '../../mapping/fonctions/url'
import attendreSecondes from '../navigation/attendreSecondes'
import getLocateur from '../../mapping/fonctions/locateurs'


/**
 * verifier l'url de la page
 * @param  {String} urlAttendue - URL a verifier
 */
export default (urlAttendue) => {

        var pageOK = false
        var attente = 0
        //Recuperation de l'url reel
        if (!urlAttendue.startsWith('/')) {
            urlAttendue = getUrl(urlAttendue)
        }
        if (urlAttendue == "baseUrl") {
            urlAttendue = config.baseUrl
        }


        // Recuperation de l'url courante
        var urlCourante = browser.getUrl()

        while (pageOK == false && attente < 3) {
            if (!urlCourante.includes(urlAttendue)) {
                attendreSecondes(10)
                attente++
            }
            else {
                pageOK = true
            }
        }

        // Recuperation de l'url courante
        urlCourante = browser.getUrl()
        urlCourante.replace("//", "/")

  

        if (!urlCourante.includes(urlAttendue)) {
            throw new Error("ERREUR - La page actuelle (" + urlCourante + ") ne contient pas l'url attendue (" + urlAttendue + ")")
        }
    

};
