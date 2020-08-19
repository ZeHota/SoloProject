module.exports = {
    menuCycle: (imdb, option) => {
        useXpath()
        imdb
            .click('@menu')
            .pause(500)
            .click(option.sel)
            .verify.urlEquals(option.url)
        imdb.navigate()
    }
}