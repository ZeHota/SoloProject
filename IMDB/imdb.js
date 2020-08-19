var imdb = {}
var actors = require('../IMDB/assets/arrayActors')
var movies = require('../IMDB/assets/arrayMovies')
var menuMovies = require('../IMDB/assets/arrayMenuMovies')
var menuTV = require('../IMDB/assets/arrayMenuTV')
var menuAwards = require('../IMDB/assets/arrayMenuAwards')
var menuCelebs = require('../IMDB/assets/arrayMenuCelebs')
var menuWatch = require('../IMDB/assets/arrayMenuWatch')
var menuCommunity = require('../IMDB/assets/arrayMenuCommunity')
var explWS = require('../IMDB/assets/explWSArray')
var bottomExt = require('../IMDB/assets/arrayBottomExt')
var bottomInt = require('../IMDB/assets/arrayBottomInt')
module.exports = {
    beforeEach: browser => {
        imdb = browser.page.imdbObj()
        imdb.navigate()
        browser.resizeWindow(1920, 1080)
    },
    after: browser => {
        imdb.end()
    },
    'Menu Bar Movies': browser => {
        imdb
        menuMovies.forEach(item => {
            imdb.cycle(imdb, item)
        })
    },
    'Menu Bar TV': browser => {
        imdb
        menuTV.forEach(item => {
            imdb.cycle(imdb, item)
        })
    },
    'Menu Bar Awards & Events': browser => {
        imdb
        menuAwards.forEach(item => {
            imdb.cycle(imdb, item)
        })
    },
    'Menu Bar Celebs': browser => {
        imdb
        menuCelebs.forEach(item => {
            imdb.cycle(imdb, item)
        })
    },
    'Menu Bar Videos': browser => {
        imdb
        menuWatch.forEach(item => {
            imdb.cycle(imdb, item)
        })
    },
    'Menu Bar Community': browser => {
        imdb
        menuCommunity.forEach(item => {
            imdb.cycle(imdb, item)
        })
    },
    'What\'s Streaming': browser => {
        imdb
            .useXpath()
            .getLocationInView('@fb')
            .pause(1000)
            .getLocationInView('@fb')
        explWS.forEach(item => {
            imdb.explStream(imdb, item)
        })
    },
    'Actor Search': browser => {
        imdb
        actors.forEach(actor => {
            imdb.actorSearch(imdb, actor)
        })
    },
    'Movie Search': browser => {
        imdb
        movies.forEach(movie => {
            imdb.movieSearch(imdb, movie)
        })
    },
    'Bottom Links': browser => {
        imdb
        bottomExt.forEach(link => {
            imdb.bottomLinksExt(imdb, link)
        })
        bottomInt.forEach(link => {
            imdb.bottomLinksInt(imdb, link)
        })
    }
}

