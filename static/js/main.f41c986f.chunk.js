(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"clicked":false,"name":"Monkey D Luffy","image":"https://i.pinimg.com/originals/f0/ba/81/f0ba812b436a81ccbd00ddc6c97a8a8d.png"},{"id":2,"clicked":false,"name":"Izuku \'Deku\' Midoriya","image":"https://i.pinimg.com/originals/80/8b/08/808b08f429285f352ccdbabe7ca58f90.png"},{"id":3,"clicked":false,"name":"Saitama","image":"https://miro.medium.com/max/5760/1*2bjwCLaA8TfH40OXcyLNvA.png"},{"id":4,"clicked":false,"name":"Vandalieu Zakkart","image":"https://vignette.wikia.nocookie.net/vsbattles/images/5/5d/Vandalieu-spell.png/revision/latest/scale-to-width-down/340?cb=20190409170418"},{"id":5,"clicked":false,"name":"Goku","image":"https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/20/C0A9B238-91F6-46AA-ABDC-3FC720228C25.png/revision/latest?cb=20171104014554"},{"id":6,"clicked":false,"name":"Senku Ishigami","image":"https://vignette.wikia.nocookie.net/dr-stone/images/3/34/Senku_Ishigami_Anime_Infobox.png/revision/latest?cb=20190710063915"},{"id":7,"clicked":false,"name":"Guts","image":"https://figmania.files.wordpress.com/2014/01/guts-berserk.jpg?w=339"},{"id":8,"clicked":false,"name":"Thorfinn","image":"https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Thorfinn-Glaring-Entry-5.jpg.jpg?q=50&fit=crop&w=738&h=369"},{"id":9,"clicked":false,"name":"Ichigo","image":"https://www.anime-planet.com/images/characters/ichigo-kurosaki-98.jpg?t=1495746043"},{"id":10,"clicked":false,"name":"Naruto","image":"https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"},{"id":11,"clicked":false,"name":"Erin Yeagar","image":"https://pm1.narvii.com/6717/853fa0542c4a453c28da102ab8bcad61c416de9c_hq.jpg"},{"id":12,"clicked":false,"name":"Stunk","image":"https://cdn-us.anidb.net/images/main/240605.jpg"}]')},,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(2),r=t.n(i),o=(t(14),t(3)),s=t(4),l=t(7),m=t(5),d=t(8);var h=function(e){return c.a.createElement("div",{className:"card "+(e.Clicked?"animate":""),onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})),c.a.createElement("div",{className:"img-content"}))};var u=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};var g=function(e){return c.a.createElement("header",{className:"container-fluid fixed-top"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"col-sm-8"},"Anime Memory Game"),c.a.createElement("nav",{className:"col-sm-4"},c.a.createElement("p",null,"Score: ",c.a.createElement("span",null,e.currentScore)),c.a.createElement("p",null,"Top Score: ",c.a.createElement("span",null,e.highScore)," "),e.children)))};var f=function(e){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},e.children,c.a.createElement("p",{className:"lead"},"Get points by clicking on character portraits! Don't press more than once or else reset!")))},p=t(6),k=(t(15),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={characters:p,highScore:0,currentScore:0,Clicked:!1},t.handleClick=function(e){t.shufflyArray(),t.scoreHandle(e),console.log(t.state.timesClicked)},t.scoreHandle=function(e){t.state.characters.forEach((function(a){e===a.id&&!1===a.Clicked?(a.Clicked=!0,t.setState({Clicked:!1}),t.handleIncrement()):e===a.id&&!0===a.Clicked&&(t.state.currentScore>t.state.highScore&&t.setState({highScore:t.state.currentScore}),t.setState({currentScore:0}),t.setState({Clicked:!0}),t.state.characters.forEach((function(e){return e.Clicked=!1})),console.log(t.state.characters))}))},t.shufflyArray=function(){var e=t.shuffle(t.state.characters);t.setState({shuffleArry:e})},t.handleIncrement=function(){t.setState({currentScore:t.state.currentScore+1})},t.shuffle=function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(g,{currentScore:this.state.currentScore,highScore:this.state.highScore}),c.a.createElement(f,null),this.state.characters.map((function(a){return c.a.createElement(h,{Clicked:e.state.Clicked,handleClick:e.handleClick,id:a.id,key:a.id,name:a.name,image:a.image})})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f41c986f.chunk.js.map