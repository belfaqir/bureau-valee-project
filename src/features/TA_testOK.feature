Feature: TA_testOK

        Scenario: TA_testOK

            Given J'accede a la page "Test Authentification"
             When Je saisis "standard_user" dans le champ "Username"
              And Je saisis "secret_sauce" dans le champ "Password"
              And Je clique sur "Login"

             Then Je verifie que je suis sur la page "Test Resultats"
              And Je verifie que l'element "Produits" est affiche