const {ipcMain} = require("electron");
const pathToRows = require("./pathToRows");
const prepareData = require("./prepareData");
const groupedWords = require("./groupWords");

ipcMain.on("process-subtitles", (event, paths) => {
    pathToRows(paths)
    .then(rows => prepareData(rows))
    .then(prepareData => groupedWords(prepareData))
    .then(groupedWords => {
        event.reply("process-subtitles", groupedWords)
    })
})