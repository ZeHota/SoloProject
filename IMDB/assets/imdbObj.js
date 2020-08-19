var imdbCommands = {
    cycle: function (browser, option) {
        this.click('@menu')
        this.pause(500)
        this.click(option.sel)
        this.verify.urlEquals(option.url)
        this.navigate()
        return this
    },
    movieSearch: function (browser, option) {
        this.useXpath()
        this.click('@searchBar')
        this.setValue('@searchBar', option)
        this.click('@searchSubmit')
        this.click(`(//a[text()="${option}"])[1]`)
        this.verify.containsText('//h1[@class=""]', option)
        return this
    },
    actorSearch: function (browser, option) {
        
        this.setValue('@searchBar', option)
        this.pause(500)
        this.click('@searchSubmit')
        this.click('@firstRes')
        this.verify.containsText('@firstResConf', option)
        return this
    },
    explStream: function (browser, option) {
        this.useXpath()
        this.getLocationInView(`(//li[@tabindex="0"])[${option.sel}]`)
        this.pause(500)
        this.click(`(//li[@tabindex="0"])[${option.sel}]`)
        this.verify.containsText(`//p[contains(text(), "${option.conf}")]`, option.conf)
        return this
    },
    bottomLinksExt: function (browser, option) {
        var originalWindow = ""
        this.api.windowHandle(result=>{
            originalWindow = result.value
        })
        this.getLocationInView('@copy')
        this.pause(2000)
        this.getLocationInView('@copy')
        this.pause(2000)
        this.click(option.sel)
        this.api.windowHandles(function(result){
            var handle= result.value[1]
            browser.switchWindow (handle)
        })
        this.verify.elementPresent(option.conf)
        this.closeWindow()
        this.switchWindow(originalWindow)
        return this
    },
    bottomLinksInt: function (browser, option) {
        this.getLocationInView(option.sel)
        this.pause(1000)
        this.getLocationInView(option.sel)
        this.pause(1000)
        this.click(option.sel)
        this.verify.elementPresent(option.conf)
        this.navigate()
        return this
    }
}

module.exports = {
    url: 'https://www.imdb.com/?ref_=nv_home',
    commands: [imdbCommands],
    elements: {
        //Home Page
        menu: {
            selector: '//label[@id="imdbHeader-navDrawerOpen--desktop"]',
            locateStrategy: 'xpath'
        },
        searchBar: {
            selector: '//input[@type="text"]',
            locateStrategy: 'xpath'
        },
        searchSubmit: {
            selector: '//button[@id="suggestion-search-button"]',
            locateStrategy: 'xpath'
        },
        //Main menu Bar
        //Movies
        relCal: {
            selector: '//a[@href="https://www.imdb.com/calendar/?ref_=nv_mv_cal"]',
            locateStrategy: 'xpath'
        },
        dvdRel: {
            selector: '//a[@href="https://www.imdb.com/list/ls016522954/?ref_=nv_tvv_dvd"]',
            locateStrategy: 'xpath'
        },
        topRatedMovies: {
            selector: '//a[@href="/chart/top/?ref_=nv_mv_250"]',
            locateStrategy: 'xpath'
        },
        mostPopularMovies: {
            selector: '//a[@href="/chart/moviemeter/?ref_=nv_mv_mpm"]',
            locateStrategy: 'xpath'
        },
        moviesByGenre: {
            selector: '//a[@href="https://www.imdb.com/feature/genre/?ref_=nv_ch_gr"]',
            locateStrategy: 'xpath'
        },
        topBoxOffice: {
            selector: '//a[@href="/chart/boxoffice/?ref_=nv_ch_cht"]',
            locateStrategy: 'xpath'
        },
        tickets: {
            selector: '//a[@href="https://www.imdb.com/showtimes/?ref_=nv_mv_sh"]',
            locateStrategy: 'xpath'
        },
        inTheaters: {
            selector: '//a[@href="https://www.imdb.com/movies-in-theaters/?ref_=nv_mv_inth"]',
            locateStrategy: 'xpath'
        },
        comingSoon: {
            selector: '//a[@href="https://www.imdb.com/coming-soon/?ref_=nv_mv_cs"]',
            locateStrategy: 'xpath'
        },
        movieNews: {
            selector: '//a[@href="/news/movie/?ref_=nv_nw_mv"]',
            locateStrategy: 'xpath'
        },
        indiaMovie: {
            selector: '//a[@href="/india/toprated/?ref_=nv_mv_in"]',
            locateStrategy: 'xpath'
        },
        //TV Shows
        whatsOn: {
            selector: '//a[@href="https://www.imdb.com/whats-on-tv/?ref_=nv_tv_ontv"]',
            locateStrategy: 'xpath'
        },
        topRatedShows: {
            selector: '//a[@href="/chart/toptv/?ref_=nv_tvv_250"]',
            locateStrategy: 'xpath'
        },
        popularShows: {
            selector: '//a[@href="/chart/tvmeter/?ref_=nv_tvv_mptv"]',
            locateStrategy: 'xpath'
        },
        tvByGenre: {
            selector: '//a[@href="https://www.imdb.com/feature/genre/?ref_=nv_tv_gr"]',
            locateStrategy: 'xpath'
        },
        tvNews: {
            selector: '//a[@href="/news/tv/?ref_=nv_nw_tv"]',
            locateStrategy: 'xpath'
        },
        indiaTV: {
            selector: '//a[@href="/india/tv?ref_=nv_tv_in"]',
            locateStrategy: 'xpath'
        },
        //Awards & Events
        oscars: {
            selector: '//a[@href="/oscars/?ref_=nv_ev_acd"]',
            locateStrategy: 'xpath'
        },
        bpw: {
            selector: '//a[@href="https://www.imdb.com/search/title/?count=100&groups=oscar_best_picture_winners&sort=year%2Cdesc&ref_=nv_ch_osc"]',
            locateStrategy: 'xpath'
        },
        globes: {
            selector: '//a[@href="/golden-globes/?ref_=nv_ev_gg"]',
            locateStrategy: 'xpath'
        },
        emmys: {
            selector: '//a[@href="/emmys/?ref_=nv_ev_rte"]',
            locateStrategy: 'xpath'
        },
        sdcc: {
            selector: '//a[@href="/comic-con/?ref_=nv_ev_comic"]',
            locateStrategy: 'xpath'
        },
        nycc: {
            selector: '//a[@href="/nycc/?ref_=nv_ev_nycc"]',
            locateStrategy: 'xpath'
        },
        sundance: {
            selector: '//a[@href="/sundance/?ref_=nv_ev_sun"]',
            locateStrategy: 'xpath'
        },
        tiff: {
            selector: '//a[@href="/toronto/?ref_=nv_ev_tor"]',
            locateStrategy: 'xpath'
        },
        awardsCntrl: {
            selector: '//a[@href="/awards-central/?ref_=nv_ev_awrd"]',
            locateStrategy: 'xpath'
        },
        festCntrl: {
            selector: '//a[@href="/festival-central/?ref_=nv_ev_fc"]',
            locateStrategy: 'xpath'
        },
        allEvents: {
            selector: '//a[@href="https://www.imdb.com/event/all/?ref_=nv_ev_all"]',
            locateStrategy: 'xpath'
        },
        //Celebs
        brnToday: {
            selector: '//a[@href="/feature/bornondate/?ref_=nv_cel_brn"]',
            locateStrategy: 'xpath'
        },
        pplrCelebs: {
            selector: '//a[@href="https://www.imdb.com/search/name/?gender=male%2Cfemale&ref_=nv_cel_m"]',
            locateStrategy: 'xpath'
        },
        celebNews: {
            selector: '//a[@href="/news/celebrity/?ref_=nv_cel_nw"]',
            locateStrategy: 'xpath'
        },

        //Videos or Watch
        whtWatch: {
            selector: '//a[@href="/what-to-watch/?ref_=nv_watch"]',
            locateStrategy: 'xpath'
        },
        trail: {
            selector: '//a[@href="/trailers/?ref_=nv_mv_tr"]',
            locateStrategy: 'xpath'
        },
        imdbTV: {
            selector: '//a[@href="/tv/?ref_=nv_vid_tv"]',
            locateStrategy: 'xpath'
        },
        imdbOrig: {
            selector: '//a[@href="/originals/?ref_=nv_sf_ori"]',
            locateStrategy: 'xpath'
        },
        imdbPick: {
            selector: '//a[@href="/imdbpicks/?ref_=nv_pi"]',
            locateStrategy: 'xpath'
        },
        //Community
        help: {
            selector: '//a[@href="https://help.imdb.com/imdb?ref_=cons_nb_hlp"]',
            locateStrategy: 'xpath'
        },
        contributor: {
            selector: '//a[@href="https://contribute.imdb.com/czone?ref_=nv_cm_cz"]',
            locateStrategy: 'xpath'
        },
        polls: {
            selector: '//a[@href="/poll/?ref_=nv_cm_pl"]',
            locateStrategy: 'xpath'
        },
        //Actor Results
        firstRes: {
            selector: '(//td[@class="primary_photo"])[1]',
            locateStrategy: 'xpath'
        },
        firstResConf: {
            selector: '(//span[@class="itemprop"])[1]',
            locateStrategy: 'xpath'
        },
        actorFlmgrphy: {
            selector: '(//span[@class="nobr-only"])[4]',
            locateStrategy: 'xpath'
        },
        rating: {
            selector: '(//option[contains(text(), "Rating")])[1]',
            locateStrategy: 'xpath'
        },
        showBy: {
            selector: '(//option[contains(text(), "Show by...")])',
            locateStrategy: 'xpath'
        },
        ratingConf: {
            selector: '//h1[@class="header"]',
            locateStrategy: 'xpath'
        },

        tvChk: {
            selector: '//input[@name="tvSeries"]',
            locateStrategy: 'xpath'
        },
        movieChk: {
            selector: '//input[@name="movie"]',
            locateStrategy: 'xpath'
        },
        topResRate: {
            selector: '(//h3[@class="lister-item-header"])[1]',
            locateStrategy: 'xpath'
        },
        //Movie Results
        budget: {
            selector: '//h4[text()="Budget:"]',
            locateStrategy: 'xpath'

        },
        //What's Streaming
        explMovieTV: {
            selector: '//h3[contains(text(), "Explore movies & TV shows")]',
            locateStrategy: 'xpath'
        },
        getStarted: {
            selector: '(//li[@tabindex="0"])[1]',
            locateStrategy: 'xpath'
        },
        //Bottom Links
        getApp: {
            selector: '(//a[@href="/whitelist-offsite?url=https%3A%2F%2Ftqp-4.tlnk.io%2Fserve%3Faction%3Dclick%26campaign_id_android%3D427112%26campaign_id_ios%3D427111%26destination_id_android%3D464200%26destination_id_ios%3D464199%26my_campaign%3Dmdot%2520sitewide%2520footer%2520%26my_site%3Dm.imdb.com%26publisher_id%3D350552%26site_id_android%3D133429%26site_id_ios%3D133428&page-action=ft-gettheapp&ref=ft_apps"])[2]',
            locateStrategy: 'xpath'
        },
        getAppConf: {
            selector: '//span[contains(text(), "App Store")]',
            locateStrategy: 'xpath'
        },
        helpBottom: {
            selector: '//a[@href="https://help.imdb.com/imdb?ref_=ft_hlp"]',
            locateStrategy: 'xpath'
        },
        helpConf: {
            selector: '(//div[@class="a-box-inner"])[2]',
            locateStrategy: 'xpath'
        },
        index: {
            selector: '//a[@href="https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ?ref_=ft_si#so"]',
            locateStrategy: 'xpath'
        },
        indexConf: {
            selector: '//h1[contains(text(), "IMDb Site Index")]',
            locateStrategy: 'xpath'
        },
        imdbPro: {
            selector: '//a[@href="https://pro.imdb.com?ref_=ft_pro&rf=cons_tf_pro"]',
            locateStrategy: 'xpath'
        },
        imdbProConf: {
            selector: '//span[contains(text(), "Industry professionals rely on IMDbPro every day")]',
            locateStrategy: 'xpath'
        },
        imdbTVBot: {
            selector: '//a[@href="/tv/?ref_=ft_fdv"]',
            locateStrategy: 'xpath'
        },
        imdbTVBotConf: {
            selector: '//span[contains(text(), "Always Entertaining. Always Free.")]',
            locateStrategy: 'xpath'
        },
        bOMojo: {
            selector: '//a[@href="https://www.boxofficemojo.com"]',
            locateStrategy: 'xpath'
        },
        bOMojoConf: {
            selector: '//h3[contains(text(), "Shortcuts")]',
            locateStrategy: 'xpath'
        },
        imdbDev: {
            selector: '//a[@href="https://developer.imdb.com/?ref=ft_ds"]',
            locateStrategy: 'xpath'
        },
        imdbDevConf: {
            selector: '//span[contains(text(), "Developer")]',
            locateStrategy: 'xpath'
        },
        press: {
            selector: '//a[@href="https://www.imdb.com/pressroom/?ref_=ft_pr"]',
            locateStrategy: 'xpath'
        },
        pressConf: {
            selector: '//h1[contains(text(), "PRESS ROOM")]',
            locateStrategy: 'xpath'
        },
        advert: {
            selector: '//a[@href="https://advertising.amazon.com/products/display-ads"]',
            locateStrategy: 'xpath'
        },
        advertConf: {
            selector: '//a[@title="Amazon Advertising"]',
            locateStrategy: 'xpath'
        },
        jobs: {
            selector: '//a[@href="https://www.amazon.jobs/en/teams/imdb?ref_=ft_jb"]',
            locateStrategy: 'xpath'
        },
        jobsConf: {
            selector: '//div[@class="logo"]',
            locateStrategy: 'xpath'
        },
        condOfUse: {
            selector: '//a[@href="/conditions?ref_=ft_cou"]',
            locateStrategy: 'xpath'
        },
        condOfUseConf: {
            selector: '//h1[contains(text(), "IMDb Conditions of Use")]',
            locateStrategy: 'xpath'
        },
        privacy: {
            selector: '//a[@href="/privacy?ref_=ft_pvc"]',
            locateStrategy: 'xpath'
        },
        privacyConf: {
            selector: '//strong[contains(text(), "IMDb Privacy Notice")]',
            locateStrategy: 'xpath'
        },
        IBA: {
            selector: '//a[@href="/whitelist-offsite?url=https%3A%2F%2Fwww.amazon.com%2Fb%2F%3F%26node%3D5160028011%26ref_%3Dft_iba&page-action=ft-iba&ref=ft_iba"]',
            locateStrategy: 'xpath'
        },
        IBAConf:{
            selector: '//h2[contains(text(), "Interest-Based Ads")]',
            locateStrategy: 'xpath'
        },
        //Social Media
        fb: {
            selector: '//a[@title="Facebook"]',
            locateStrategy: 'xpath'
        },
        fbConf: {
            selector: '(//span[contains(text(), "IMDb")])[1]', 
            locateStrategy: 'xpath'
        },
        ig: {
            selector: '//a[@title="Instagram"]',
            locateStrategy: 'xpath'
        },
        igConf: {
            selector: '//h1[contains(text(), "IMDb")]',
            locateStrategy: 'xpath'
        },
        tw: {
            selector: '//a[@title="Twitter"]',
            locateStrategy: 'xpath'
        },
        twConf: {
            selector: '(//span[contains(text(), "IMDb")])[1]',
            locateStrategy: 'xpath'
        },
        yt: {
            selector: '//a[@title="YouTube"]',
            locateStrategy: 'xpath'
        },
        ytConf : {
            selector: '(//yt-formatted-string[contains(text(), "IMDb")])[1]',
            locateStrategy: 'xpath'
        },   
        copy: {
            selector: '//p[@class="imdb-footer__copyright _1qNTRY72M5RnFTeiT5Ho-6"]',
            locateStrategy: 'xpath'
        }
    }
}