
Feature: Preparer le site pour la navigation

        Scenario: remplir le CP et refuser les cookies

            Given J'accede a la page "Bureau Valee"
             When J'ajoute le texte "78125" dans le champ "CodePostal"

              And Je clique sur "BoutonConfirmer"
              And Je clique sur "RefuserCookies"
              And J'attends "3" secondes

             Then Je verifie que l'element "Logo" est affiche
              And J'attends "3" secondes
             Then Je verifie que "ShopPersonnalise" contient le texte "Rambouillet"
              And J'attends "3" secondes




