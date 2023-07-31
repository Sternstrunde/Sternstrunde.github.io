(function () {
    setInterval(() => {
        // console.log(document.body.scrollTop)
        // console.log(document.documentElement.scrollTop)
        var n = document.body.scrollTop + document.documentElement.scrollTop
        var o = document.querySelector("main").offsetTop
        if (
        document.body.scrollTop + document.documentElement.scrollTop >
        120
        ) {
        var container = document.getElementsByClassName("container")
        container[0].classList.add("fadeInUp")
        container[0].classList.remove("fadeInDown")
        }
        var card_dl = document.getElementsByClassName("card-dl")
        for (let i = 0; i < card_dl.length; i++) {
            console.log(o, i, card_dl[i].offsetTop, n)
            if (o + card_dl[i].offsetTop - n < 580) {

                card_dl[i].classList.add("is-visible")
                // break
            } else {
                break
            }
        }
    }, 10)
})()