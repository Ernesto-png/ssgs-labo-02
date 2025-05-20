# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Nota Importante per lo Studente - Setup Iniziale del Progetto

Benvenuto/a a `labo-string`!

Questo repository è un **template di partenza** per il tuo laboratorio valutato. Come avrai modo di leggere nelle istruzioni del laboratorio, una parte fondamentale del tuo lavoro iniziale (Esercizio 1) consisterà nell'analizzare attentamente la struttura e la configurazione corrente di questo progetto.

**Potresti notare che alcuni aspetti della configurazione iniziale – inclusa questa stessa documentazione (`README.md`), il file `package.json` e la gestione dei file da ignorare (`.gitignore`) – sono stati volutamente lasciati incompleti o potrebbero non seguire tutte le best practice per un progetto Node.js.**

Il tuo primo compito sarà proprio quello di identificare queste aree di miglioramento e apportare le necessarie correzioni e completamenti, come dettagliato nelle istruzioni del laboratorio, per portare il progetto a uno standard qualitativo superiore.

Buona analisi e buon lavoro!

## Funzionalità Principali (Previste)

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
3. npm

# Avvio

Avvia il progetto
1. npm start
2. segui le istruzioni
3. scegli l'operazione da eseguire con la stringa che desideri


## Esecuzione dei test

Per eseguire i test (Jest):
1. npm test

## Coverage

Per generare il report di code coverage:
1. npm run coverage

### Scopo della CI

Introdurre l’integrazione continua (CI) per eseguire automaticamente i test e generare il report di code coverage ad ogni modifica significativa, migliorando la qualità del codice e facilitando la revisione.

---

### Struttura del workflow

- **Trigger**: Il workflow si attiva su push verso i branch `main` e `feature/**`, e su ogni apertura/aggiornamento di Pull Request verso `main`.
- **Job**: Un singolo job sequenziale che:
  1. Effettua il checkout del codice.
  2. Prepara l’ambiente Node.js.
  3. Installa le dipendenze.
  4. Esegue i test con coverage.
  5. Carica la cartella del report (`coverage/`) come artefatto scaricabile.

---

### Giustificazione dei trigger

- **Push su branch principali e feature**: garantisce che ogni modifica significativa sia verificata.
- **Pull Request verso main**: permette di verificare la qualità del codice prima del merge, favorendo code review e collaborazione.

