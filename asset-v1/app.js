var app = new function() {
    this.name = "Masks", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 7406, this.bpm = 130, this.totalframe = 354, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !2, this.bonusendloopA = !2, this.recmaxloop = 100, this.recminloop = 10, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#273C7F", this.col0 = "#273C7F", this.col1 = "#273C7F", this.col2 = "#273C7F", this.col3 = "#273C7F", this.col4 = "#273C7F", this.animearray = [
    {
        name: "16_hacker",
        color: "#000000",
        uniqsnd: !1
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json";
    }
};
