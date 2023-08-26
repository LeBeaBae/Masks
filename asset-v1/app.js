/* did you wear a mask, tell me that you did, you should wear a mask, wear it, wear the fucking mask, WEAR THE FUCKING MASK */
var app = new function() {
    this.name = "The Masks", this.version = "1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 7388, this.bpm = 80, this.totalframe = 354, this.nbpolo = 7, this.nbloopbonus = 3, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#2a2100", this.col0 = "#d3a600", this.col1 = "#a18419", this.col2 = "#705d16", this.col3 = "#51430e", this.col4 = "#2e2608", this.animearray = [{
        name: "1_demon",
        color: "ff001e",
        uniqsnd: !1
    }, {
        name: "2_horse",
        color: "ff4f00",
        uniqsnd: !1
    }, {
        name: "3_gargoyle",
        color: "ff8b00",
        uniqsnd: !1
    }, {
        name: "4_mamushka",
        color: "ffd500",
        uniqsnd: !1
    }, {
        name: "5_rad",
        color: "3bff0f",
        uniqsnd: !1
    }, {
        name: "6_longo",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "7_neon",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "8_bunny",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "9_pulpito",
        color: "35b535",
        uniqsnd: !0
    }, {
        name: "10_clown",
        color: "35b535",
        uniqsnd: !1
    }, {
        name: "11_catrina",
        color: "cb2d3e",
        uniqsnd: !1
    }, {
        name: "12_bufon",
        color: "cb2d3e",
        uniqsnd: !0
    }, {
        name: "13_chicken",
        color: "cb2d3e",
        uniqsnd: !1
    }, {
        name: "14_raven",
        color: "cb2d3e",
        uniqsnd: !1
    }, {
        name: "15_tiki",
        color: "cb2d3e",
        uniqsnd: !0
    }, {
        name: "16_hacker",
        color: "005090",
        uniqsnd: !1
    }, {
        name: "17_masks",
        color: "005090",
        uniqsnd: !0
    }, {
        name: "18_robot",
        color: "005090",
        uniqsnd: !1
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
