(()=>{"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function t(n){e(this,t),r(this,"tipo",""),r(this,"claves",[]),this.tipo=n}return n(t,[{key:"meterClaves",value:function(e,t){var n=[e,t];this.claves.push(n)}}]),t}();const a=function(){var e=new o("A");e.meterClaves("A1","Damage"),e.meterClaves("A2","kills"),e.meterClaves("A3","experience"),e.meterClaves("A4","Achivement");var t=new o("A4");t.meterClaves("1","Mastery"),t.meterClaves("2","1st class"),t.meterClaves("3","2st class"),t.meterClaves("4","3st class"),t.meterClaves("5","top gun"),t.meterClaves("6","high caliber"),t.meterClaves("7","confederate");var n=new o("B");n.meterClaves("B1","light tank"),n.meterClaves("B2","medium tank"),n.meterClaves("B3","heavy tank"),n.meterClaves("B4","destroyer tank");var r=new o("C");r.meterClaves("C1","american"),r.meterClaves("C2","german"),r.meterClaves("C3","ussr"),r.meterClaves("C4","britain");var a=new o("D");return a.meterClaves("D1","japan"),a.meterClaves("D2","chienese"),a.meterClaves("D3","french"),a.meterClaves("D4","EU"),[e,t,n,r,a]};var i=function(){function t(n){e(this,t),r(this,"codigo",void 0),r(this,"p",void 0),this.codigo=n}return n(t,[{key:"mostrar",value:function(){console.log(this.codigo)}},{key:"transformarArray",value:function(){this.codigo=this.codigo.toString(),this.codigo=this.codigo.replaceAll(","," "),console.log(this.codigo)}},{key:"crearElementoP",value:function(){this.p=document.createElement("p")}},{key:"ponerCodigo",value:function(){var e=document.querySelector("#article");this.p.innerHTML=this.codigo,e.appendChild(this.p)}}]),t}(),s=[],l=function(e,t){t.some((function(n,r){if(-1!==e.indexOf(n.tipo)&&(console.log("entro al tipo"),c(n.claves,e)),!isNaN(e))return"Achivement"===s[0]?c(t[1].claves,e):s.push(e),!0}))},c=function(e,t){e.some((function(e,n){if(e[0]===t)return console.log("entro al valor"),s.push(e[1]),!0}))};const v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"no envio nada",t=a(),n=/[^: ]+/g,r=e.match(n);r.forEach((function(e){l(e,t)})),console.log(t),console.log(r),console.log(s);var o=new i(s);o.mostrar(),o.transformarArray(),o.crearElementoP(),o.ponerCodigo(),s=[]};(function(){var e;document.querySelector("#descifrar").addEventListener("click",(function(){e=document.querySelector("#codigo").value,v(e)}))})()})();