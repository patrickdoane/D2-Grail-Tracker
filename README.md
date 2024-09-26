# d2-grail-tracker

Holy Grail Tracker for D2:R

## Description

Track the status of your [Holy Grail](https://www.reddit.com/r/diablo2/comments/sjipqb/what_exactly_is_a_holy_grail_run/) for Diablo II: Resurrected.

This application is currently meant to run locally.

## Getting Started

### Dependencies

* [Java 8+](https://www.java.com/en/)
* [maven](https://maven.apache.org/)
* [nodejs](https://nodejs.org)
* [npm](https://www.npmjs.com/)
* [PostgresSQL](https://www.postgresql.org/)

### Installing

* Build `$PROJECT_ROOT/grail-server` in Java IDE of your choice
* `cd $PROJECT_ROOT/grail-client && npm install` 
* Create a PostgreSQL database named 'grail'
```
sudo -u postgres psql
sudo -u postgres createuser <username>
sudo -u postgres createdb grail
```
* Add `env.properties` file to `$PROJECT_ROOT/grail-server` with the following:
```
# env.properties
DB_DATABASE=grail
DB_USER=yourUserName
DB_PASSWORD=yourPassword
API_KEY=yourApiKey
```
* Generate items with the scripts in $PROJECT_ROOT
```
node fetchSets.js
node fetchUniques.js
node convertItemsToCsv.js
```
* Import items into db via console (or using a gui tool)
```
# importing with psql (not tested yet)
psql -c "\copy items FROM '$PROJECT_ROOT/setItems.csv' delimiter ',' csv"
psql -c "\copy items FROM '$PROJECT_ROOT/uniqueItems.csv' delimiter ',' csv"
```

### Executing program
* Run grail-server as a Java application
* TODO: add terminal/cmdline instructions for running grail-server
* Start the react server with
```
cd $PROJECT_ROOT/grail-client
npm start
```

## Version History

* 0.1
    * Initial Release
