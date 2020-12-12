const fs = require('fs');
const ld = require("lodash");
const yargs = require("yargs");

const notes = require('./notes');

// command options
const titleOptions = {
    describe : "Title of a Note",
    demand : true,
    alias: 't',
}

const bodyOptions = {
    describe : "Body of the given note",
    demand : true,
    alias: 'b'
}


// parsing commands
const argv = yargs
    .command("read", "fetch and read a particular note", {
        title: titleOptions,
    })
    .command("create", "create a note.",{
        title : titleOptions,
        body : bodyOptions
    })
    .command("list", "list all the notes")
    .command("remove", "delete a note", {
        title: titleOptions,
    })
    .help()
    .argv
let cmd = argv._[0];

let param = {
    title : argv.title,
    body : argv.body ? argv.body : ''
}

switch (cmd) {
    case "read":
        notes.read(param);
    break;
    case "create":
        notes.create(param);
    break;
    case "list":
        notes.list(param);
    break;
    case "remove":
        notes.remove(param);
    break;

}