"use strict";angular.module("pfswebApp",["ngAnimate","ngAria","ngCookies","ngResource","ngSanitize","ngTouch","ui.router","ui.bootstrap","angular.backtop","ngMap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode({enabled:!0,requireBase:!0}),a.state("app",{"abstract":!0,views:{"navbar@":{templateUrl:"views/navbar.html",controller:"NavbarController",controllerAs:"vm"}}})}]),angular.module("pfswebApp").service("AnchorScrollService",function(){return{scrollTo:function a(b,c){function d(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function e(a){for(var b=document.getElementById(a),c=b.offsetTop,d=b;d.offsetParent&&d.offsetParent!==document.body;)d=d.offsetParent,c+=d.offsetTop;return c}var f,g=d();f=c?e(b)-c:e(b);var h=f>g?f-g:g-f;if(100>h)return void a(0,f);var i=Math.round(h/100);i>=20&&(i=20);var j=Math.round(h/25),k=f>g?g+j:g-j,l=0;if(f>g)for(var m=g;f>m;m+=j)setTimeout("window.scrollTo(0, "+k+")",l*i),k+=j,k>f&&(k=f),l++;else for(var n=g;n>f;n-=j)setTimeout("window.scrollTo(0, "+k+")",l*i),k-=j,f>k&&(k=f),l++}}}),angular.module("pfswebApp").directive("activeLink",function(){return{restrict:"A",link:function(a,b,c){var d=c.activeLink,e=c.href;e=e.substring(1),a.location=location,a.$watch("location.path()",function(a){e===a?b.addClass(d):b.removeClass(d)})}}}),angular.module("pfswebApp").directive("stickySubnav",["$window",function(a){return{restrict:"A",link:function(b){angular.element(a).bind("scroll",function(){this.pageYOffset>=50?b.style={position:"fixed",width:"100%","z-index":10}:b.style={position:"relative","z-index":1020},b.$apply()})}}}]),angular.module("pfswebApp").config(["$stateProvider",function(a){a.state("home",{parent:"app",url:"/",views:{"content@":{templateUrl:"views/home.html"}},onEnter:[function(){window.scrollTo(0,0)}]})}]),angular.module("pfswebApp").config(["$stateProvider",function(a){a.state("impressum",{parent:"app",url:"/impressum",views:{"content@":{templateUrl:"views/impressum.html"}},onEnter:[function(){window.scrollTo(0,0)}]})}]),angular.module("pfswebApp").config(["$stateProvider",function(a){a.state("flortrait",{parent:"app",url:"/flortrait",views:{"content@":{templateUrl:"views/flortrait.html",controller:"FlortraitController",controllerAs:"vm"},subnavigation:{templateUrl:"views/flortrait.mobile.subnavigation.html",controller:"FlortraitController",controllerAs:"vm"}},onEnter:[function(){window.scrollTo(0,0)}]})}]),angular.module("pfswebApp").config(["$stateProvider",function(a){a.state("contact",{parent:"app",url:"/contact",views:{"content@":{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"vm"}},onEnter:[function(){window.scrollTo(0,0)}]})}]),angular.module("pfswebApp").controller("NavbarController",["$state",function(a){var b=this;b.isNavbarCollapsed=!0,b.$state=a,b.toggleNavbar=function(){b.isNavbarCollapsed=!b.isNavbarCollapsed},b.collapseNavbar=function(){b.isNavbarCollapsed=!0}}]),angular.module("pfswebApp").controller("FlortraitController",["$scope","$timeout","AnchorScrollService",function(a,b,c){var d=this;a.isMDandUp=window.matchMedia("(min-width: 992px)").matches,d.moveToSection=function(a,d){b(function(){d?c.scrollTo(a,d):c.scrollTo(a)},300)}}]),angular.module("pfswebApp").controller("ContactCtrl",function(){var a=this;a.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtakm4cEJbXhAde2tX4U0yKJTjMOG5Zp0",a.latitude=51.055163,a.longitude=13.724929,a.center=JSON.stringify([a.latitude,a.longitude])}),angular.module("pfswebApp").run(["$templateCache",function(a){a.put("views/contact.html","<div class=\"container-fluid margin-t-50\" ng-cloak> <div class=\"row\"> <div class=\"col-md-12\"> <div map-lazy-load=\"{{vm.googleMapsUrl}}\"> <ng-map center=\"{{vm.center}}\" draggable=\"false\" zoom=\"15\" disable-default-u-i=\"true\" disable-double-click-zoom=\"true\" scrollwheel=\"false\" styles=\"[{'featureType': 'all','elementType': 'geometry.fill','stylers': [{'weight': '2.00'}]},{'featureType': 'all','elementType': 'geometry.stroke','stylers': [{'color': '#9c9c9c'}]},{'featureType': 'all','elementType': 'labels.text','stylers': [{'visibility': 'on'}]},{'featureType': 'landscape','elementType': 'all','stylers': [{'color': '#f2f2f2'}]},{'featureType': 'landscape','elementType': 'geometry.fill','stylers': [{'color': '#ffffff'}]},{'featureType': 'landscape.man_made','elementType': 'geometry.fill','stylers': [{'color': '#ffffff'}]},{'featureType': 'poi','elementType': 'all','stylers': [{'visibility': 'off'}]},{'featureType': 'road','elementType': 'all','stylers': [{'saturation': -100},{'lightness': 45}]},{'featureType': 'road','elementType': 'geometry.fill','stylers': [{'color': '#eeeeee'}]},{'featureType': 'road','elementType': 'labels.text.fill','stylers': [{'color': '#7b7b7b'}]},{'featureType': 'road','elementType': 'labels.text.stroke','stylers': [{'color': '#ffffff'}]},{'featureType': 'road.highway','elementType': 'all','stylers': [{'visibility': 'simplified'}]},{'featureType': 'road.arterial','elementType': 'labels.icon','stylers': [{'visibility': 'off'}]},{'featureType': 'transit','elementType': 'all','stylers': [{'visibility': 'off'}]},{'featureType': 'water','elementType': 'all','stylers': [{'color': '#46bcec'},{'visibility': 'on'}]},{'featureType': 'water','elementType': 'geometry.fill','stylers': [{'color': '#c8d7d4'}]},{'featureType': 'water','elementType': 'labels.text.fill','stylers': [{'color': '#070707'}]},{'featureType': 'water','elementType': 'labels.text.stroke','stylers': [{'color': '#ffffff'}]}]\"> <marker position=\"{{vm.center}}\" title=\"playful solutions\"></marker> </ng-map> </div> </div> </div> <div class=\"row\"> <div class=\"col-md-offset-1 col-md-3 col-sm-offset-0 col-sm-5 col-xs-offset-0 col-xs-12\"> <h2>Postanschrift</h2> <hr> <h3> <address> playful solutions<br> Anja Wippler<br> Könneritzstraße 25<br> D-01069 Dresden<br> </address> </h3> </div> <div class=\"col-lg-3 col-md-offset-0 col-md-4 col-sm-offset-1 col-sm-6 col-xs-offset-0 col-xs-12 no-padding-r-sm\"> <h2>Mail &amp; Telefon</h2> <hr> <h3> <i class=\"fa fa-paper-plane margin-r\" aria-hidden=\"true\"></i>anja.wippler@icloud.com </h3> <h3> <i class=\"fa fa-mobile margin-r cfa-small-icon-lift\" aria-hidden=\"true\"></i>+49 (0) 176 21534966 </h3> </div> <div class=\"col-md-offset-0 col-md-3 col-sm-offset-0 col-sm-12 col-xs-offset-0 col-xs-12\"> <h2>Im Web</h2> <hr> <h1><a class=\"text-default\" href=\"https://www.instagram.com/playfuldesignsolutions/\" target=\"_blank\"><i class=\"fa fa-instagram margin-r\"></i></a><a class=\"text-default\" href=\"https://www.facebook.com/flortrait/\" target=\"_blank\"><i class=\"fa fa-facebook-square\"></i></a></h1> </div> </div> </div>"),a.put("views/flortrait.html",'<div class="container-fluid" ng-cloak=""> <!-- INTRO --> <div class="row"> <div class="col-xs-12 hidden-md hidden-sm hidden-lg hidden-print"> <div class="img-flortrait-s01 margin-t-20"></div> </div> <div class="col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-4 col-sm-offset-1 col-sm-5 col-xs-12 halign-center-xs" ng-class="{\'animated fadeIn\': isMDandUp}"> <img src="../images/flortrait/flortrait-logo.f83df2f3.svg" class="hidden-xs" style="margin-bottom: 10%; margin-top: 50%; width: 70%; height: auto"> <h3> Bühne frei für deinen Blumenstrauß. Das Flortrait ist die erste Vase für die Wand und somit ein echt lebendiges Stillleben für dein Zuhause. </h3> <h3 class="hidden-sm hidden-xs"><a ng-click="vm.moveToSection(\'section-variants\', 100)">Varianten &gt;</a></h3> </div> <div class="col-md-6 col-sm-6 hidden-xs margin-t-20 margin-t-40-lg animated fadeIn"> <div class="img-flortrait-s01"></div> </div> </div> <div class="row flortrait-section-gray halign-center" id="section-variants"> <div class="col-md-12"> <h1>Entdecke drei wundervolle Varianten für dein Flortrait.</h1> </div> </div> <!-- NATUR --> <div class="row flortrait-section-white vcenter margin-t-50 margin-t-20-xs" id="section-natur"> <div class="col-lg-offset-1 col-lg-4 col-md-offset-0 col-md-6 col-sm-offset-0 col-sm-5 hidden-xs"> <div class="img-flortrait-natur_bunt"></div> </div> <div class="col-lg-offset-1 col-lg-3 col-md-offset-1 col-md-4 col-sm-offset-1 col-sm-5 col-xs-offset-0 col-xs-12 halign-center-xs"> <h1 class="flortrait-logo-headline"><i class="icon-logo-natur margin-r"></i><strong>natur</strong></h1> <h3><strong>Einzigartigkeit durch natürliche Holzmaserung.</strong></h3> <div class="row visible-xs"> <div class="col-xs-offset-4 col-xs-4"> <hr class="margin-b-0"> </div> </div> <div class="row visible-xs"> <div class="col-xs-12 halign-center"> <div class="img-flortrait-natur_bunt"></div> </div> </div> <h4 class="margin-b-50">Mit Bienenwachsemulsion versiegelt. Die Halterung ist neutral (transparent) oder mit farbigem Akzent in rot oder blau erhältlich.</h4> </div> </div> <!-- DO IT YOURSELF --> <div class="row flortrait-section-gray vcenter margin-t-50 margin-t-20-xs" id="section-diy"> <div class="col-lg-offset-2 col-lg-3 col-md-offset-1 col-md-4 col-sm-offset-1 col-sm-5 col-xs-offset-0 col-xs-12 halign-center-xs"> <h1 class="flortrait-logo-headline"><i class="icon-logo-diy margin-r"></i><strong>diy</strong></h1> <h3><strong>Dein ganz persönliches Flortrait.</strong></h3> <div class="row visible-xs"> <div class="col-xs-offset-4 col-xs-4"> <hr class="margin-b-0"> </div> </div> <div class="row visible-xs"> <div class="col-xs-12 halign-center"> <div class="img-flortrait-twin_diy"></div> </div> </div> <h4 style="padding-top: 10px"> Lasse deiner Kreativität freien Lauf. Nutze den Bausatz und erschaffe ein Unikat, dass es so nur von dir geben kann. </h4> <h4> Unbehandelter Holzrahmen, transparente Halterung, Glas und dazugehörige Montageanleitung für fantasievolle Kreationen. Ob als Geschenk gestaltet, nach eigenen Vorstellungen lasiert, bemalt, bedruckt oder mit Stoff bezogen - du bestimmst wie es am Ende aussieht. </h4> <h4 class="margin-t-50"> <a href="https://flortrait.wordpress.com" target="_blank">Lass dich im DIY-Blog inspirieren &gt;</a> </h4> </div> <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-6 col-sm-6 hidden-xs"> <div class="img-flortrait-twin_diy"></div> </div> </div> <!-- ANTIK --> <div class="row flortrait-section-white vcenter margin-b-50"> <div class="col-lg-offset-1 col-lg-4 col-md-offset-0 col-md-6 col-sm-offset-0 col-sm-5 hidden-xs"> <div class="img-flortrait-antik-lilastrauss"></div> </div> <div class="col-lg-offset-1 col-lg-3 col-md-offset-1 col-md-4 col-sm-offset-1 col-sm-5 col-xs-offset-0 col-xs-12 halign-center-xs"> <h1 class="flortrait-logo-headline"><i class="icon-logo-antik margin-r"></i><strong>antik</strong></h1> <h3 class="margin-t-50"> <strong>Moderne Form - aber irgendwie schon immer bei dir and der Wand.</strong> </h3> <div class="row visible-xs"> <div class="col-xs-offset-4 col-xs-4"> <hr class="margin-b-0"> </div> </div> <div class="row visible-xs"> <div class="col-xs-12 halign-center"> <div class="img-flortrait-antik-lilastrauss"></div> </div> </div> <h4> Die Oberfäche wurde mit Antikwachslasur behandelt und lässt die individuelle Maserung des Holzes in seidigem Glanz erstrahlen. </h4> </div> </div> <!-- Bezugsquellen (Shoplinks etc. pp.) --> <div class="row flortrait-section-gray halign-center" id="section-supplySources"> <div class="col-md-12"> <h1><span class="icon-bag flortrait-logo-headline" aria-hidden="true"></span></h1> </div> <div class="col-md-12"> <h1>Hier kannst du dein Flortrait kaufen.</h1> </div> </div> <div class="row margin-t-50 margin-b-50"> <div class="col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 halign-center"> <span class="icon-laptop flortrait-logo-headline"></span> <h1><strong>Online</strong></h1> <hr> <div class="row"> <div class="col-md-offset-1 col-md-10 col-sm-offset-2 col-sm-8"> <a class="btn btn-lg btn-default btn-block" href="http://selekkt.com/brands/playfulsolutions" target="_blank">selekkt - Heim für junges Design</a> <a class="btn btn-lg btn-default btn-block" href="https://www.heimatwerke.de/catalogsearch/result/?q=Flortrait" target="_blank">HEIMATWERKE.DE</a> </div> </div> </div> </div> <div class="row margin-t-50 margin-b-50"> <div class="col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 halign-center"> <span class="icon-easel flortrait-logo-headline"></span> <h1><strong>Im Atelier</strong></h1> <hr> <p>(Nach Absprache)</p> <h3> <address> <strong>Anja Wippler | playfulsolutions</strong><br> Könneritzstr. 25<br> 01069 Dresden<br> <abbr title="E-Mail">Mail:</abbr> <a href="mailto:anja.wippler@icloud.com">anja.wippler@icloud.com</a> </address> </h3> </div> </div> <div class="row margin-t-50 margin-b-50"> <div class="col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 halign-center"> <span class="icon-home-outline flortrait-logo-headline"></span> <h1><strong>Im Ladengeschäft</strong></h1> <hr> <h3 class="margin-b-50"> <address> <strong>Vielfach</strong><br> Karl-Liebknecht-Str. 66<br> 04275 Leipzig<br> <abbr title="Website">Web:</abbr> <a href="http://www.vielfach-leipzig.de" target="_blank">vielfach-leipzig.de</a> </address> </h3> <h3> <address> <strong>Sächsisches Heimatwerk</strong><br> August-Bebel-Straße 77<br> 01728 Bannewitz<br> <abbr title="Website">Web:</abbr> <a href="http://www.heimatwerke.de/" target="_blank">heimatwerke.de</a> </address> </h3> </div> </div> <back-top class="hidden-xs"><i class="fa fa-angle-up text-muted" aria-hidden="true" style="font-size: 24px"></i> </back-top> </div>'),a.put("views/flortrait.mobile.subnavigation.html",'<nav sticky-subnav id="subnav" class="navbar subnav navbar-static-top" ng-style="style" role="navigation"> <div class="container visible-xs"> <div class="navbar-header"> <button ng-click="vm.moveToSection(\'section-supplySources\', 100)" type="button" class="buy-btn btn btn-xs btn-default">Kaufen </button> <a class="navbar-brand" style="color: #000" ui-sref="flortrait" ng-click="vm.collapseNavbar()"><span>Flortrait.</span></a> </div> </div> <div class="container-fluid hidden-xs"> <div class="navbar-header"> <a class="navbar-brand" style="color: #000" ui-sref="flortrait" ng-click="vm.collapseNavbar()"><span>Flortrait.</span></a> </div> <ul class="nav navbar-nav navbar-right"> <li> <button ng-click="vm.moveToSection(\'section-supplySources\', 100)" type="button" class="btn btn-xs btn-primary buy-btn">Kaufen </button> </li> </ul> </div> </nav>'),a.put("views/home.html",'<div class="container-fluid margin-t-50" id="homeRoot" ng-cloak=""> <div class="row" style="margin-top: 30px"> <div class="col-sm-offset-1 col-sm-5"> <img src="../images/flortrait-hero.f9744bda.svg" style="margin-bottom: 20px"> </div> <div class="col-sm-offset-1 col-sm-4 hero-text-box"> <h3>Eine jahrtausendealte Form, reduziert auf ihre Silhouette, bildet erneut ein dreidimensionales Objekt von lebendiger Leichtigkeit.</h3> <h4><a ui-sref="flortrait">Mehr erfahren ></a></h4> </div> </div> </div>'),a.put("views/impressum.html",'<div class="container-fluid margin-t-50" ng-cloak> <div class="row"> <div class="col-md-12"> <h1>Impressum</h1> <h3>Anwendungsbereich</h3> <p> Eine Nutzung dieser von Anja Wippler bereitgestellten Website ist ausschließlich unter Anerkennung der folgenden Bedingungen zulässig. </p> <h3>Haftungsausschluss</h3> <p> Trotz genauer Prüfung der zur Verfügung gestellten Informationen übernimmt Anja Wippler keine Haftung für Bearbeitungsfehler oder Nutzungsausfall, entgangenen Gewinn oder erwartete ersparte Aufwendungen, erwartete Problemlösungen, Verlust des Firmenwerts (Goodwill) oder Verlust von Daten sowie für jegliche Art von indirekten Vermögens- oder Folgeschäden (einschließlich Schäden aufgrund von Ansprüchen Dritter), welche im Zusammenhang mit der Benutzung der Website und der Verwendung dieser Informationen, gleich ob aus Vertrag bzw. der Täuschung beim Vertragsschluss, Fahrlässigkeit oder unerlaubter Handlung, entstehen. Sofern Dokumente oder sonstige Informationen unentgeltlich überlassen werden, ist eine Haftung für Sach- und Rechtsmängel der Dokumente oder sonstigen Informationen, insbesondere für deren Richtigkeit, Vollständigkeit, Fehlerfreiheit, Zuverlässigkeit, Genauigkeit, Verwendbarkeit, Freiheit von Schutz- und Urheberrechten Dritter und Qualität – außer bei Vorsatz oder Arglist – ausgeschlossen. Im Übrigen ist jegliche Haftung von Anja Wippler ausgeschlossen, soweit nicht nach dem Produkthaftungsgesetz, wegen Vorsatzes, grober Fahrlässigkeit, wegen Verletzung des Lebens, des Körpers oder Gesundheit, wegen der Übernahme einer Beschaffenheitsgarantie, wegen arglistigen Verschweigens eines Mangels oder wegen der Verletzung wesentlicher Vertragspflichten zwingend gehaftet wird. Der Schadensersatz wegen Verletzung wesentlicher Vertragspflichten ist jedoch auf den vertragstypischen, vorhersehbaren Schaden begrenzt, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt. Anja Wippler ist stets bemüht die Website vor Viren und anderen Gefahren zu schützen. Jedoch kann Anja Wippler keine Virenfreiheit garantieren. Es obliegt dem Nutzer für ausreichende Schutzmaßnahmen (Antivirensoftware) zu sorgen. </p> <h3>Nutzungsbedingungen</h3> <p> Anja Wippler gewährt mit der Bereitstellung der Informationen keinerlei Nutzungsrechte an Urheberrechten, Patenten oder anderem geistigen Eigentum. Die Website kann Hinweise zu Eigentumsrechte Anderer beinhalten, die Sie entsprechend beachten und befolgen müssen. Anja Wippler behält sich vor, jederzeit die Inhalte der Website zu verändern oder zu aktualisieren. </p> <h3>Hyperlinks</h3> <p> Diese Website enthält Verknüpfungen zu Websites Dritter (“externe Links”). Die Websites, auf die verwiesen wird, unterliegen nicht der Kontrolle durch Anja Wippler. Anja Wippler ist nicht verantwortlich für die Inhalte dieser oder weiterführender Websites und stimmt nicht automatisch dem Inhalt der Websites zu. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht. </p> <h3>Gerichtsstand</h3> <p>Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit der Nutzung der Website ist Dresden, sofern der Nutzer Kaufmann im Sinne des Handelsgesetzbuches ist. In jedem Fall gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Dass Informationen von der Website auch außerhalb der Bundesrepublik Deutschland heruntergeladen werden dürfen/können, obliegt nicht der Verantwortung von Anja Wippler.</p> </div> </div> </div>'),a.put("views/navbar.html",'<nav id="nav-main" class="navbar navbar-default" ng-class="{\'navbar-fixed-top\': vm.$state.current.name !=\'flortrait\'}" role="navigation"> <div class="container" style="width: 100%"> <div class="navbar-header"> <button type="button" class="navbar-toggle" ng-click="vm.toggleNavbar()" ng-class="{collapsed: vm.isNavbarCollapsed}"> <span class="icon-bar top-bar"></span> <span class="icon-bar middle-bar"></span> <span class="icon-bar bottom-bar"></span> </button> <a class="navbar-brand" ui-sref="home" ng-click="vm.collapseNavbar()"><span>playful solutions</span></a> </div> <div class="navbar-collapse" id="navbar-main" uib-collapse="vm.isNavbarCollapsed"> <ul class="nav navbar-nav navbar-right"> <li ui-sref-active="active"> <a ui-sref="home" ng-click="vm.collapseNavbar()"> <span>HOME</span> </a> </li> <li ui-sref-active="active"> <a ui-sref="flortrait" ng-click="vm.collapseNavbar()"> <span>FLORTRAIT</span> </a> </li> <li ui-sref-active="active"> <a ui-sref="contact" ng-click="vm.collapseNavbar()"> <span>KONTAKT</span> </a> </li> </ul> </div> </div> </nav> <div ui-view="subnavigation"> </div>')}]);