google.maps.__gjsload__('data', function(_){var FN=function(a,b){if(b)return a=b.fromLatLngToPoint(a),[a.x,a.y,-1];b=_.yd(a);a=_.zd(a);return[Math.cos(b)*Math.cos(a),Math.cos(b)*Math.sin(a),Math.sin(b)]},GN=function(a,b,c,d){a=[FN(a,d),FN(b,d),FN(c,d)];return 0<a[0][0]*(a[1][1]*a[2][2]-a[2][1]*a[1][2])+a[1][0]*(a[2][1]*a[0][2]-a[0][1]*a[2][2])+a[2][0]*(a[0][1]*a[1][2]-a[1][1]*a[0][2])},HN=function(a){for(var b=[a[0]],c=a[0].lng(),d=1,e=_.w(a);d<e;++d)c=_.Ta(a[d].lng(),c-180,c+180),b.push(new _.P(a[d].lat(),c,!0));return b},IN=function(a,b,
c){for(var d,e=0,f=a.length;e<f;++e){var g=b.call(a[e],e);d=0==e?g:c(d,g)}return d},JN=function(a,b){var c=null,d=[];_.v(a,function(a){a.b(c)||(c=a,d.push(c))});var e=_.w(d);d.push(a[0]);d=HN(d);a=Math.round((d[e].lng()-d[0].lng())/360);if(0!=a)return 0<a;a=IN(d,function(a){return{index:a,lng:this.lng()}},function(a,b){return a.lng<=b.lng?a:b});return GN(d[_.Ta(a.index-1,0,e)],d[_.Ta(a.index,0,e)],d[_.Ta(a.index+1,0,e)],b)},KN=function(a,b){if(!(1>=a.length))for(var c=JN(a[0],b),d=1;d<a.length;++d)JN(a[d],
b)==c&&a[d].reverse()},LN=function(a,b){if(a instanceof _.P)b.zi(a);else switch(a.getType()){case "Point":b.zi(a.get());break;case "LineString":b.wi(a.getArray());break;case "Polygon":a=_.Va(a.getArray(),function(a){return a.getArray()});b.Lo(a);break;case "LinearRing":a=a.getArray();2<=a.length&&a.push(a[0]);b.wi(a);break;case "MultiPoint":case "MultiLineString":case "MultiPolygon":case "GeometryCollection":for(var c=0,d=a.getLength();c<d;++c)LN(a.getAt(c),b)}},MN=function(a,b,c){_.Gk.call(this,
a,c);this.feature=b},NN=function(a){if(a instanceof _.P)return[a.lng(),a.lat()];if(a instanceof _.Rd)return NN(a.get());var b=a.getArray();a instanceof _.Pd&&b.push(b[0]);return _.Va(b,NN)},ON=function(a){return null==a?null:a instanceof _.ee?{type:"GeometryCollection",geometries:_.Va(a.getArray(),ON)}:{type:a.getType(),coordinates:NN(a)}},PN=function(a){var b={};a.forEachProperty(function(a,c){b[c]=a});var c={type:"Feature",geometry:ON(a.getGeometry()),properties:b};(a=a.getId())&&(c.id=a);return c},
QN=function(a){var b=[];a.forEach(function(a){b.push(PN(a))});return{type:"FeatureCollection",features:b}},RN=function(a,b,c){this.H=a;this.B=b;this.m=c||null;this.j=null;this.b=[];this.f=null;var d=new _.Rs(this.C,0,this);this.l=function(){d.start()}},UN=function(a,b,c){b instanceof _.Ae||(SN(b),b=new _.Ae,TN(a,b));b.setPath(c);_.v(["set_at","insert_at","remove_at"],function(c){_.z.addListener(b.getPath(),c,a.l)});return b},VN=function(a,b,c){b instanceof _.ze||(SN(b),b=new _.ze,TN(a,b));var d=a.H.getProjection();
KN(c,d);b.setPaths(c);_.v(["set_at","insert_at","remove_at"],function(c){b.getPaths().forEach(function(b){_.z.addListener(b,c,a.l)})});return b},TN=function(a,b){b.set("map",a.H);WN(a,b);var c=a.B;_.v(_.Be,function(a){_.z.addListener(b,a,function(b){c(a,b)})})},SN=function(a){a&&a.set("map",null)},WN=function(a,b){a.j&&_.v(XN,function(c){b.set(c,a.j[c])})},$N=function(a,b,c,d,e){_.uf.call(this);this.j=b;var f=b.getGeometry();this.b=c;this.C=d;this.f=null;f&&(this.f=YN[f.getType()],_.Fm(this.f,"-p",
b,e));this.m=a;a.setStyle(ZN(this));a.setGeometry(f);this.l=!1},ZN=function(a){var b={};if("function"==typeof a.b){a.l=!0;try{_.Qa(b,a.b.call(null,a.j))}finally{a.l=!1}}else a.b&&_.Qa(b,a.b);a.C&&_.Qa(b,a.C);return b},aO=function(a,b,c,d,e){var f=new RN(a,function(a,c){_.z.trigger(e,a,new MN(c.latLng,b,c.ua))},function(a){b.setGeometry(a)});return new $N(f,b,c,d,!!a.b)},cO=function(a,b){this.j=[];this.f=a;this.l=b;this.b={};bO(this)},dO=function(a){a.Cf()&&(a.f.forEach((0,_.p)(a.tg,a)),a.j=[_.z.addListener(a.f,
"addfeature",function(b){a.tg(b.feature)}),_.z.addListener(a.f,"removefeature",function(b){a.Wh(_.Oa(b.feature))}),_.z.addListener(a.f,"setgeometry",function(b){(b=a.b[_.Oa(b.feature)])&&b.m.setGeometry(b.j.getGeometry())}),_.z.addListener(a.f,"setproperty",function(b){(b=a.b[_.Oa(b.feature)])&&b.K()}),_.z.addListener(a.f,"removeproperty",function(b){(b=a.b[_.Oa(b.feature)])&&b.K()})])},bO=function(a){_.z.addListener(a.l,"changed",function(b){var c=a.b[b];c&&c.overrideStyle(a.l.get(b))})},eO=_.ga(),
XN="animation clickable cursor fillColor fillOpacity draggable editable geodesic icon icons label opacity optimized shape strokeColor strokeOpacity strokeWeight title visible zIndex".split(" ");_.t(MN,_.Gk);RN.prototype.setStyle=function(a){var b=this;this.j=a;_.v(this.b,function(a){WN(b,a)});(a.draggable||a.editable)&&_.Dm(this.H,"Le")};RN.prototype.C=function(){this.f=_.hA(this.b);this.m&&this.m(this.f)};
RN.prototype.setGeometry=function(a){var b=this,c=0;if(a!==b.f){(b.f=a)&&LN(a,{zi:function(a){var d=b.b,f=c,g=b.b[c];g instanceof _.ye||(SN(g),g=new _.ye,TN(b,g),_.z.addListener(g,"drag",b.l));g.setPosition(a);d[f]=g;c++},wi:function(a){b.b[c]=UN(b,b.b[c],a);c++},Lo:function(a){b.b[c]=VN(b,b.b[c],a);c++}});for(a=c;c<this.b.length;c++)SN(this.b[c]);this.b.length=a}};_.t($N,_.uf);_.k=$N.prototype;_.k.release=function(){this.m.setGeometry(null);this.f&&_.Gm(this.f,"-p",this.j)};_.k.setStyle=function(a){this.b=a;this.K()};_.k.overrideStyle=function(a){this.C=a;this.K()};_.k.X=function(){this.m.setStyle(ZN(this))};_.k.K=function(){this.l||_.uf.prototype.K.call(this)};var YN={Point:"Gi",MultiPoint:"Gmi",LineString:"Gl",MultiLineString:"Gml",LinearRing:"Gr",Polygon:"Gp",MultiPolygon:"Gmp",GeometryCollection:"Gc"};_.t(cO,_.A);_.k=cO.prototype;_.k.map_changed=function(){_.v(this.j,_.z.removeListener);this.j=[];_.Pa(this.b,(0,_.p)(this.Wh,this));dO(this);var a=this.Cf();a?(_.Dm(a,"La"),_.Fm("La","-p",this,!!a.b)):_.Gm("La","-p",this)};_.k.style_changed=function(){var a=this.gh();_.Pa(this.b,function(b,c){c.setStyle(a)})};_.k.tg=function(a){var b=this.Cf();b&&(this.b[_.Oa(a)]=aO(b,a,this.gh(),this.l.get(_.Oa(a)),this))};_.k.Wh=function(a){var b=this.b[a];b&&(delete this.b[a],b.release())};_.k.Cf=_.Ed("map");
_.k.gh=_.Ed("style");eO.prototype.b=function(a,b,c){var d=new cO(b,c);d.bindTo("map",a);d.bindTo("style",a);_.v(_.Be,function(b){_.z.forward(d,b,a)})};eO.prototype.il=function(a,b,c,d){_.wF(b,{Vb:function(b){b=_.le(a,b,c);d&&d(b)},Yb:function(a,c){1==a&&c&&_.db("Error parsing "+b+": "+c)},vg:!0})};eO.prototype.cl=function(a,b){b(QN(a))};eO.prototype.f=function(a,b){b(PN(a))};_.rc("data",new eO);});