//----UI BASE----
    //--Scrollback to top
$(document).on(":passagedisplay", function() {
    $("#passages").scrollTop(0);
});

setup.scrollToId = (id) => {
    Dialog.close();
    $(`#${id}`)[0].scrollIntoView({ behavior: "smooth"});
}

//----SETTINGS----

Setting.addValue("onePage");

Setting.addHeader("Visual Setting");

var settingThemeNames = ["Base SC", "SC Docu"];
var settingThemeHandler = function () {
    var $html = $("html");
        $html.removeClass("sc-docu");
        switch (settings.theme) {
            case "SC Docu":
                $html.addClass("sc-docu");
                break;
}};
Setting.addList("theme", {
    label    : "Change Theme",
    desc     : "Choose between the Base StyleSheet<br>or the SugarCube Documentation",
    list     : settingThemeNames,
    default  : "Base SC",
    onInit   : settingThemeHandler,
    onChange : settingThemeHandler
});

Setting.addHeader("Font Settings");

var settingFontFam = ["Sans-Serif", "Serif", "Monospace", "Cursive"];
var settingFontFamHandler = function () {
    var $html = $("html");
        $html.removeClass("cursive serif mono");
        switch (settings.fontFam) {
            case "Serif":
                $html.addClass("serif");
                break;
            case "Monospace":
                $html.addClass("mono");
                break;
            case "Cursive":
                $html.addClass("cursive");
                break;
}};
Setting.addList("fontFam", {
    label    : "Change Font",
    desc     : "This will use the default fonts of your device.",
    list     : settingFontFam,
    default  : "Sans-Serif",
    onInit   : settingFontFamHandler,
    onChange : settingFontFamHandler
});

    //--FONT SIZE--
var settingFontSize = ["100%", "130%", "150%"];
var resizeFont = function() {
    var size = document.getElementById("passages");
    switch (settings.fontSize) {
        case "100%":
            size.style.fontSize = "100%";
            break;
        case "130%":
            size.style.fontSize = "130%";
            break;
        case "150%":
            size.style.fontSize = "150%";
            break;
    }
};
Setting.addList("fontSize", {
    label		: "Change Font Size",
    list		: settingFontSize,
    default     : "100%",
    onInit		: resizeFont,
    onChange	: resizeFont
});

// dialog API macro set (minified), by chapel; for SugarCube 2
;Macro.add("dialog",{tags:["onopen","onclose"],handler:function(){var t="",s=null,n=null,o=this.args.length>0?this.args[0]:"",e=this.args.length>1?this.args.slice(1).flatten():[];this.payload.forEach((function(o,e){0===e?t=o.contents:"onopen"===o.name?s=s?s+o.contents:o.contents:n=n?n+o.contents:o.contents})),e.push("macro-"+this.name),Dialog.create(o,e.join(" ")),Dialog.wiki(t),s&&"string"==typeof s&&s.trim()&&$(document).one(":dialogopened",(function(){$.wiki(s)})),n&&"string"==typeof n&&n.trim()&&$(document).one(":dialogclosed",(function(){$.wiki(n)})),Dialog.open()}}),Macro.add("popup",{handler:function(){if(this.args.length<1)return this.error("need at least one argument; the passage to display");if(!Story.has(this.args[0]))return this.error("the passage "+this.args[0]+"does not exist");var t=this.args[0],s=this.args.length>1?this.args[1]:"",n=this.args.length>2?this.args.slice(2).flatten():[];n.push("macro-"+this.name),Dialog.create(s,n.join(" ")),Dialog.wikiPassage(t),Dialog.open()}}),Macro.add("dialogclose",{skipArgs:!0,handler:function(){Dialog.close()}});

// message-macro.min.js, for SugarCube 2, by Chapel
// v1.0.1, 2022-07-21, 3bdbdfbe5ae47a46e4f4e52766d78701939ae9a6
;setup.messageMacro={},setup.messageMacro.default="Help",Macro.add("message",{tags:null,handler:function(){var e=this.payload[0].contents,a=$(document.createElement("span")),s=$(document.createElement(this.args.includes("btn")?"button":"a")),t=$(document.createElement("span"));s.wiki(this.args.length>0&&"btn"!==this.args[0]?this.args[0]:setup.messageMacro.default).ariaClick(this.createShadowWrapper((function(){a.hasClass("open")?t.css("display","none").empty():t.css("display","block").wiki(e),a.toggleClass("open")}))),a.attr("id","macro-"+this.name+"-"+this.args.join("").replace(/[^A-Za-z0-9]/g,"")).addClass("message-text").append(s).append(t).appendTo(this.output)}});
// end message-macro.min.js
