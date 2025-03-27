System.register("chunks:///_virtual/Background_moves.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var n,t,e,i,s;return{setters:[function(o){n=o.inheritsLoose},function(o){t=o.cclegacy,e=o._decorator,i=o.Vec3,s=o.Component}],execute:function(){var r;t._RF.push({},"f3b4elAZjZJAJo5DOkIkgTP","Background_moves",void 0);var c=e.ccclass;e.property,o("Background_moves",c("Background_moves")(r=function(o){function t(){return o.apply(this,arguments)||this}n(t,o);var e=t.prototype;return e.start=function(){},e.update=function(o){this.node.position=new i(-288==this.node.position.x?287:this.node.position.x-1,this.node.position.y,this.node.position.z)},t}(s))||r);t._RF.pop()}}}));

System.register("chunks:///_virtual/BirdMove.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,o,r,n,a,s,p,c,d,u;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,s=t.Node,p=t.input,c=t.Input,d=t.Vec3,u=t.Component}],execute:function(){var h,l,y,b,v;n._RF.push({},"c73b20PrbFGaKf2vxtyoo1V","BirdMove",void 0);var f=a.ccclass,P=a.property;t("BirdMove",(h=f("BirdMove"),l=P({type:s}),h((v=i((b=function(t){function i(){for(var i,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return(i=t.call.apply(t,[this].concat(n))||this).curRotation=0,i.bird=void 0,i.birdSpeed=0,o(i,"nodePipa",v,r(i)),i}e(i,t);var n=i.prototype;return n.start=function(){this.bird=this.node.getChildByPath("Bird"),p.on(c.EventType.TOUCH_START,this.onTouchStart,this)},n.onTouchStart=function(t){this.birdSpeed=100,this.curRotation=60},n.update=function(t){this.birdSpeed-=150*t,this.node.position=new d(this.node.position.x,this.node.position.y+this.birdSpeed*t,this.node.position.z),this.curRotation>-60&&(this.curRotation-=60*t),this.bird.setRotationFromEuler(new d(0,0,this.curRotation)),this.isNabrakPipa(this.nodePipa)&&alert("GameOver")},n.isNabrakPipa=function(t){t.getChildByPath("pipe-green1"),t.getChildByPath("pipe-green2");return!1},i}(u)).prototype,"nodePipa",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=b))||y));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Background_moves.ts","./BirdMove.ts","./PipaMove.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PipaMove.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,n,e,i,s,r;return{setters:[function(o){t=o.inheritsLoose},function(o){n=o.cclegacy,e=o._decorator,i=o.Vec3,s=o.randomRangeInt,r=o.Component}],execute:function(){var p;n._RF.push({},"20a47fm/hVPU7E+m5EkD8fr","PipaMove",void 0);var a=e.ccclass;e.property,o("PipaMove",a("PipaMove")(p=function(o){function n(){for(var t,n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return(t=o.call.apply(o,[this].concat(e))||this).speed=0,t}t(n,o);var e=n.prototype;return e.start=function(){},e.update=function(o){this.speed+=1*o,this.node.position.x<-288&&(this.node.position=new i(300,s(-50,200),this.node.position.z)),this.node.position=new i(this.node.position.x-3,this.node.position.y,this.node.position.z)},n}(r))||p);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});