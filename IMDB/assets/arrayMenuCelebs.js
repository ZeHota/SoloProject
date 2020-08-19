var d = new Date()
var month = d.getMonth()+1
var date = d.getDate()
if (month<10){month='0'+month}
module.exports= [
    {sel:'@brnToday', url: `https://www.imdb.com/search/name/?birth_monthday=${month}-${date}&ref_=nv_cel_brn`},
    {sel:'@pplrCelebs', url: 'https://www.imdb.com/search/name/?gender=male%2Cfemale&ref_=nv_cel_m', },
    {sel:'@celebNews', url: 'https://www.imdb.com/news/celebrity/?ref_=nv_cel_nw'}
]