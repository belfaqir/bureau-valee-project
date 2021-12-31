
Feature: authentification au site

        Scenario: s'autehtifier avec succes

            Given J'accede a la page "Bureau Valee"
             When J'ajoute le texte "78125" dans le champ "CodePostal"
              And Je clique sur "BoutonConfirmer"
              And Je clique sur "RefuserCookies"
              #And J'attends "3" secondes

              And Je clique sur "LienIdentifierVous"
              And Je verifie que je suis sur la page "Login"
             When J'ajoute le texte "imad.belfaqir@hardis-group.com" dans le champ "EmailLogin"
             When J'ajoute le texte "Hardis-group" dans le champ "PasswordLogin"
              And Je scroll jusqu'a l'element "MeConnecter"
              And Je clique sur "MeConnecter"
             # And J'attends "3" secondes
              And Je verifie que je suis sur la page "Account"
              And Je verifie que l'element "MenuTableauDeBord" est present
              And Je verifie que "MenuTableauDeBord" contient le texte "Mon tableau de bord"
              And Je verifie que l'element "MenuSeDeconnecter" est present
              #And J'attends "3" secondes
              And Je clique sur "MenuSeDeconnecter"
              And J'attends "6" secondes
              And Je verifie que je suis sur la page "Bureau Valee"
        
        @INIT
        Scenario Outline: ne pas s'authentifier suivant les cas d'erreurs

            
            Given J'accede a la page "Bureau Valee"
             When J'ajoute le texte "78125" dans le champ "CodePostal" si existe
              And Je clique sur "BoutonConfirmer" si existe
              And Je clique sur "RefuserCookies" si existe
              And Je clique sur "LienIdentifierVous" si existe
              And Je verifie que je suis sur la page "Login"
             When J'ajoute le texte <username> dans le champ "EmailLogin"
             When J'ajoute le texte <password> dans le champ "PasswordLogin"
              And Je clique sur "NotifMail" si existe
              And Je scroll jusqu'a l'element "MeConnecter"
              And Je clique sur "MeConnecter"
             Then Je verifie la presence du texte <msgErreur>
#              And Je supprime les cookies du site
#                  | "fakeUserName@yo.com"            | "fakePass" | "Impossible de trouver un compte correspondant à cette adresse e-mail" |
#                  | "imad.belfaqir@hardis-group.com" | "fakePass" | "Votre mot de passe est incorrect"             |

             # And Je ferme le navigateur


        Examples:
                  | username                | password   | msgErreur                                                              |
                  | "NonValidUserName"      | "fakePass" | "Veuillez renseigner une adresse email valide"                         |
                  | "fakeUserName@yo.com"   | "fakePass" | "Impossible de trouver un compte correspondant à cette adresse e-mail" |
                  | "fakeUserName23@yo.com" | "fakePass" | "Impossible de trouver un compte correspondant à cette adresse e-mail" |
