# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Requisiti

- [Node.js] >= 18.x
- [npm] >= 9.x

## Installazione

Clona il repository e installa le dipendenze:
1. git clone https://github.com/Ernesto-png/ssgs-labo-02.git
2. cd ssgs-labo-02
3. npm ci

# Avvio

Avvia il progetto
1. npm start
2. segui le istruzioni
3. scegli l'operazione da eseguire con la stringa che desideri


## Esecuzione dei test

Per eseguire i test (Jest):
1. npm test

Questo comando verifica le seguenti operazioni:
- Parola palindroma
- Parola troncata
- parola troncata ma troppo corta
- count lettere parola

## Coverage

Per generare il report di code coverage:
1. npm run coverage

### Scopo della CI

Introdotto l’integrazione continua (CI) per eseguire automaticamente i test e generare il report di code coverage ad ogni modifica significativa, migliorando la qualità del codice e facilitando la revisione.

### Struttura del workflow

- **Trigger**: Il workflow si attiva su push verso i branch `main` e `feature/**`, e su ogni apertura/aggiornamento di Pull Request verso `main`.
- **Job**: Un singolo job sequenziale che:
  1. Effettua il checkout del codice.
  2. Prepara l’ambiente Node.js.
  3. Installa le dipendenze.
  4. Esegue i test con coverage.
  5. Carica la cartella del report (`coverage/`) come artefatto scaricabile.

### Giustificazione dei trigger

- **Push su branch principali e feature**: garantisce che ogni modifica significativa sia verificata.
- **Pull Request verso main**: permette di verificare la qualità del codice prima del merge, favorendo code review e collaborazione.

## Avvertenze

stavo provando a togliere e rimetere le cartelle coverage e node_modules poichè memorizzate in cache per poi re inserirle ma non sono riuscito a trovare il comando in tempo
