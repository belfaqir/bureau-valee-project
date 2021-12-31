import cliquerSurSiBesoin from "../action/cliquerSurSiBesoin";
import actualiserPage from "../navigation/actualiserPage";
import getUrl from '../../mapping/fonctions/url'

import attendreSecondes from "./attendreSecondes";

/**
 * Acceder a une URL
 * @param  {String} urlAVisiter - URL a visiter
 */
export default (urlAVisiter) => {

        //Recuperation du locateur reel si alias donne
        if (!urlAVisiter.startsWith("/")) {
            urlAVisiter = getUrl(urlAVisiter)
        }
        if(urlAVisiter=="baseUrl"){
            urlAVisiter=config.baseUrl
        }

        // Acces a la page
        try{
            browser.url(urlAVisiter);
        }
        catch{
            try{
                console.log("accederPage - Tentative 2")
                attendreSecondes(2)
                browser.url(urlAVisiter);
            }
            catch{
                try{
                    console.log("accederPage - Tentative 3")
                    attendreSecondes(2)
                    browser.url(urlAVisiter);
                }
                catch{
                    console.log("accederPage - Tentative 3")
                    attendreSecondes(2)
                    browser.url(urlAVisiter);
                }
            }
        }


};
