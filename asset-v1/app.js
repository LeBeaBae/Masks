/* did you wear a mask, tell me that you did, you should wear a mask, wear it, wear the fucking mask, WEAR THE FUCKING MASK */
var app = new function() {
    this.name = "The Masks", this.version = "1", this.date = "2023", this.folder = "asset-v1/", this.looptime = 7388, this.bpm = 80, this.totalframe = 354, this.nbpolo = 7, this.nbloopbonus = 3, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#2a2100", this.col0 = "#d3a600", this.col1 = "#a18419", this.col2 = "#705d16", this.col3 = "#51430e", this.col4 = "#2e2608", this.animearray = [{
        name: "1_demon",
        color: "ef0b0b",
        uniqsnd: !1
    }, {
        name: "2_horse",
        color: "f35209",
        uniqsnd: !1
    }, {
        name: "3_gargoyle",
        color: "f38f07",
        uniqsnd: !1
    }, {
        name: "4_mamushka",
        color: "f8d506",
        uniqsnd: !1
    }, {
        name: "5_rad",
        color: "41e212",
        uniqsnd: !1
    }, {
        name: "6_longo",
        color: "147140",
        uniqsnd: !1
    }, {
        name: "7_neon",
        color: "06d5af",
        uniqsnd: !1
    }, {
        name: "8_bunny",
        color: "07b8f7",
        uniqsnd: !1
    }, {
        name: "9_octopus",
        color: "0545e9",
        uniqsnd: !1
    }, {
        name: "10_clown",
        color: "7816dc",
        uniqsnd: !0
    }, {
        name: "11_catrina",
        color: "bb79e1",
        uniqsnd: !1
    }, {
        name: "12_bufon",
        color: "e00fe7",
        uniqsnd: !0
    }, {
        name: "13_chicken",
        color: "e40e52",
        uniqsnd: !1
    }, {
        name: "14_raven",
        color: "6d1a2d",
        uniqsnd: !1
    }, {
        name: "15_tiki",
        color: "773809",
        uniqsnd: !0
    }, {
        name: "16_hacker",
        color: "efc19a",
        uniqsnd: !1
    }, {
        name: "17_masks",
        color: "ffffff",
        uniqsnd: !0
    }, {
        name: "18_robot",
        color: "8f8f8f",
        uniqsnd: !1
    }, {
        name: "19_moai",
        color: "535458",
        uniqsnd: !1
    }, {
        name: "20_ghost",
        color: "000000",
        uniqsnd: !0
    }], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
