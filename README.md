# Googlio

Zuerst wird das «MongoDB-Modul» und das «Prompt-Sync-Modul» importiert. Das Mongo-Modul wird später verwendet, um eine Verbindung zur Datenbank herzustellen und das Prompt-Modul, um den User nach seiner Suchanfrage zu fragen.

Danach wird in der «Main-Methode» eine Verbindung erstellt, wenn die Verbindung erfolgreich war, startet eine «while-Schleife» welche ausgeführt wird, solange der User sagt, er möchte noch einmal suchen. 

In dieser Schleife wird der User zuerst gefragt, wonach er suchen möchte. Der Input wird dann mit der «ToLower-Function» kleingeschrieben, danach wird der erste Buchstabe grossgeschrieben und mit dieser Variable wird dann in der Datenbank gesucht. Dies ist dafür, dass der User ein Ergebnis erhält, ob er Google jetzt gross oder kleinschreibt.

Mit der «findOneListingName-Function» wird dann in der Datenbank nach dem Datensatz gesucht, falls es einen Treffer gibt, wird Name, Beschreibung und URL der Website angezeigt. Falls es keinen Treffer gibt, wird ein Fehler ausgegeben. Zum Schluss wird die Suchanfrage noch in einem Array gespeichert, um später einen Suchverlauf anzuzeigen.

Nun wird die «SearchAgain-Function» aufgerufen, um das Programm entweder zu stoppen, falls der User «nein» auswählt oder noch einmal von vorne beginnt, wenn der User «ja» auswählt.

Ganz zum Schluss der Schleife wird der User abgefragt, ob er sich den Suchverlauf anzeigen möchte, falls er «ja» wählt, wird der vorhin erwähnte Array ausgegeben.

![Googlio Display](https://github.com/oli-kis/olikis-images/blob/oli-kis/476shots_so.png)

## Googlio in Betrieb nehmen

Um Googlio in Betrieb zu nehmen, laden Sie bitte zuerst das Repository als ZIP-File herunter und öffnen es dann in VS Code.
