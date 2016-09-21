var words = [
  {word:"<a href=\"https://en.wikipedia.org/wiki/Serendipity\">serendipity</a>"},
  {word:"<a href=\"https://en.wikipedia.org/wiki/Apophenia\">apophenia</a>"},
  {word:"<a href=\"http://www.metamodernism.com/2011/10/28/the-awesome-or-the-metamodern-sublime/\">awe</a>"},
  {word:"<a href=\"https://en.wikipedia.org/wiki/Ted_Nelson\">intertwingularity</a>"},
  {word:"<a href=\"https://en.wikipedia.org/wiki/%27Pataphysics\">pataphysics</a>"}
];

var num = Math.floor(Math.random()*words.length);

var dayWord = document.getElementById("dayWord");
var dayDef = document.getElementById("dayDef");

(function(){
  $("#dayWord").html(words[num].word);
  /*$("#dayDef").html(words[num].definition);*/
})();
