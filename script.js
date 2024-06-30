const trendingLinks = document.querySelectorAll('#trending>div>a')
let trendingIterator = 0

function trendingNext() {
    if (-1 * trendingIterator < trendingLinks.length - 2) {
        trendingIterator -= 1
        changeTrendingImages(trendingIterator * 5.3)
    }
}

function trendingPrev() {
    if (trendingIterator < 0) {
        trendingIterator += 1
        changeTrendingImages(trendingIterator * 5.3)
    }
}

function changeTrendingImages(temptrendingIterator) {
    trendingLinks.forEach(link => {
        link.style.position = 'relative'
        link.style.left = `${temptrendingIterator * 10}%`
        temptrendingIterator++
    })
}
changeTrendingImages(0)



















const editorPicksLinks = document.querySelectorAll('#editorPicks>div>a')
let editorPicksIterator = 0

function editorPicksNext() {
    if (-1 * editorPicksIterator < editorPicksLinks.length - 2) {
        editorPicksIterator -= 1
        changeeditorPicksImages(editorPicksIterator * 5.3)
    }
}

function editorPicksPrev() {
    if (editorPicksIterator < 0) {
        editorPicksIterator += 1
        changeeditorPicksImages(editorPicksIterator * 5.3)
    }
}

function changeeditorPicksImages(tempeditorPicksIterator) {
    editorPicksLinks.forEach(link => {
        link.style.position = 'relative'
        link.style.left = `${tempeditorPicksIterator * 10}%`
        tempeditorPicksIterator++
    })
}
changeeditorPicksImages(0)