 function initMap() {

                        var centre = {lat: -20.889482, lng: 55.454600 };
                        var barachois = {lat: -20.8741663, lng: 55.4477945};
                        var bellepierre = {lat: -20.895195, lng: 55.444202};
                        var bretagne = {lat: -20.927912, lng: 55.492732};
                        var camelia = {lat: -20.893413, lng: 55.462352};
                        var baslariviere = {lat: -20.896728, lng: 55.439906};
                        var butor = {lat: -20.884893, lng: 55.465538};
                        var chaudron = {lat: -20.890882, lng: 55.487778};
                        var domenjod = {lat: -20.919153, lng: 55.506687};
                        var lasource = {lat: -20.889858, lng: 55.448801};
                        var trinite = {lat: -20.893544, lng: 55.467187};
                        var lebrule = {lat: -20.918970, lng: 55.437813};
                        var montgaillard = {lat: -20.906754, lng: 55.466704};
                        var stclotilde = {lat: -20.916459, lng: 55.485505};
                        var moufia = {lat: -20.901442, lng: 55.480598};
                        var stjacques = {lat: -20.881661, lng: 55.459394};




                    /*==========================variables pour les images=========================*/   

                        var contentString = '<div id="content">'+
                           '<img src="../mapimg/barachois.jpg" width="200px" height="100px">'+
                           '<button onclick="change1()" class"btn" style="text-align:center;margin-left:20%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                           '</button>'+
                           '</div>';
                        var infowindow = new google.maps.InfoWindow({
                                              content: contentString
                                            });


                        var contentString1 = '<div id="content">'+ '<div id="img">'+
                           '<img src="../mapimg/monument.jpeg" width="200px" height="100px">'+                           
                           '</div>'+
                           '<button id="centre" onclick="change2()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                           '</div>'
                        var infowindow1 = new google.maps.InfoWindow({
                                              content: contentString1
                                            });


                        var contentString2 = '<div id="content">'+ '<div id="img">'+
                           '<img src="../mapimg/hopital.jpg" width="200px" height="100px">'+
                           '</div>'+
                           '<button id="bellepierre" onclick="change3()"class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                           '</div>'
                        var infowindow2 = new google.maps.InfoWindow({
                                              content: contentString2
                                            });


                        var contentString3 = '<div id="content">'+ '<div id="img">'+
                           '<img src="../mapimg/bretagne.jpg" width="200px" height="100px">'
                           +
                           '</div>'+
                           '<button id="bretagne" onclick="change4()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                           '</div>'
                        var infowindow3 = new google.maps.InfoWindow({
                                              content: contentString3
                                            });

                        var contentString4 = '<div id="content">'+ '<div id="img">'+
                           '<img src="../mapimg/marcher.jpg" width="200px" height="100px">'
                           +
                           '</div>'+
                           '<button id="camelia" onclick="change()5" cclass"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                           '</div>'
                        var infowindow4 = new google.maps.InfoWindow({
                                              content: contentString4
                                            });

                        var contentString5 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/basdelariviere.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="baslariviere" onclick="change6()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow5 = new google.maps.InfoWindow({
                                                                      content: contentString5
                                                                    });
                        var contentString6 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/butor.jpg" width="200px" height="100px">'+
                                                   '</div>'+
                                                   '<button id="butor" onclick="change7()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow6 = new google.maps.InfoWindow({
                                                                      content: contentString6
                                                                    });

                        var contentString7 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/chaudron.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="chaudron" onclick="change8()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow7 = new google.maps.InfoWindow({
                                                                      content: contentString7
                                                                    });    

                        var contentString8 = '<div id="content">'+ 
                                             '<div id="img">'+
                                             '<img src="../mapimg/domenjod.jpg" width="200px" height="100px">'+
                                             '</div>'+
                                             '<button id="domenjod" onclick="change9()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                             '</button>'+
                                             '</div>'
                                                var infowindow8 = new google.maps.InfoWindow({
                                                                      content: contentString8
                                                                    });

                        var contentString9 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/la source.jpg" width="200px" height="100px">'+
                                                   '</div>'+
                                                   '<button id="lasource" onclick="change10()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow9 = new google.maps.InfoWindow({
                                                                      content: contentString9
                                                                    });  

                        var contentString10 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/latrinite.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="latrinite" onclick="change11()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow10 = new google.maps.InfoWindow({
                                                                      content: contentString10
                                                                    });  

                        var contentString11 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/le brule.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="lebrule" onclick="change12()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow11 = new google.maps.InfoWindow({
                                                                      content: contentString11
                                                                    }); 

                        var contentString12 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/mongaillard.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="montgaillard" onclick="change13()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow12 = new google.maps.InfoWindow({
                                                                      content: contentString12
                                                                    }); 

                        var contentString13 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/stclotilde.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="stclotilde" onclick="change14()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow13 = new google.maps.InfoWindow({
                                                                      content: contentString13
                                                                    }); 

                        var contentString14 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/moufia.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="moufia" onclick="change15()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow14 = new google.maps.InfoWindow({
                                                                      content: contentString14
                                                                    }); 

                        var contentString15 = '<div id="content">'+ '<div id="img">'+
                                                   '<img src="../mapimg/stjacques.jpg" width="200px" height="100px">'
                                                   +
                                                   '</div>'+
                                                   '<button id="stjacques" onclick="change16()" class"btn" style="text-align:center;margin-left:30%;background:#00ffff; border:none; padding:10px;font-size:12px; color: grey;">'+
                                                   "Plus d'info"+
                                                   '</button>'+
                                                   '</div>'
                                                var infowindow15 = new google.maps.InfoWindow({
                                                                      content: contentString15
                                                                    }); 

                       

                    /*===================================END======================================*/   
                    /*==========================variables pour les images=========================*/  




                        var map = new google.maps.Map(document.getElementById('map'), {
                                            center: centre,
                                            zoom: 12,
                                            mapTypeId: 'roadmap'
                                          });

                      /*  map.setTilt(45);*/

                          /*=========== 1eme marker========*/

                        var marker = new google.maps.Marker({
                                            position: centre,
                                            map: map,          
                                          });
                        marker.addListener('click', function() {
                                infowindow1.open(map, marker);
                              });

                          /*=========== 2eme marker========*/

                        var marker1 = new google.maps.Marker({
                                            position: barachois,
                                            map: map,          
                                          });
                         marker1.addListener('click', function() {
                                infowindow.open(map, marker1);
                              });

                          /*=========== 3eme marker========*/

                        var marker2 = new google.maps.Marker({
                                            position: bellepierre,
                                            map: map,          
                                          });
                         marker2.addListener('click', function() {
                                infowindow2.open(map, marker2);
                              });

                          /*=========== 4eme marker========*/

                        var marker3 = new google.maps.Marker({
                                            position: bretagne,
                                            map: map,          
                                          });
                         marker3.addListener('click', function() {
                                infowindow3.open(map, marker3);
                              });

                          /*=========== 5eme marker========*/

                        var marker4 = new google.maps.Marker({
                                            position: camelia,
                                            map: map,          
                                          });
                         marker4.addListener('click', function() {
                                infowindow4.open(map, marker4);
                              });

                        var marker5 = new google.maps.Marker({
                                          position: baslariviere,
                                           map: map,          
                              });
                            marker5.addListener('click', function() {
                                  infowindow5.open(map, marker5);
                                });

                        var marker6 = new google.maps.Marker({
                                position: butor,
                                map: map,          
                              });
                            marker6.addListener('click', function() {
                                infowindow6.open(map, marker6);
                                  });

                        var marker7 = new google.maps.Marker({
                                position: chaudron,
                                map: map,          
                                });
                            marker7.addListener('click', function() {
                                  infowindow7.open(map, marker7);
                                      });


                        var marker8 = new google.maps.Marker({
                              position: domenjod,
                                map: map,          
                                   });
                             marker8.addListener('click', function() {
                                  infowindow8.open(map, marker8);
                                             });

                        var marker9 = new google.maps.Marker({
                            position: lasource,
                                 map: map,          
                                           });
                            marker9.addListener('click', function() {
                                infowindow9.open(map, marker9);
                                       });

                        var marker10 = new google.maps.Marker({
                            position: trinite,
                                 map: map,          
                                  });
                            marker10.addListener('click', function() {
                               infowindow10.open(map, marker10);
                                       });


                        var marker11 = new google.maps.Marker({
                            position: lebrule,
                                 map: map,          
                                  });
                            marker11.addListener('click', function() {
                            infowindow11.open(map, marker11);
                                  });

                        var marker12 = new google.maps.Marker({
                             position: montgaillard,
                             map: map,          
                               });
                           marker12.addListener('click', function() {
                            infowindow12.open(map, marker12);
                                                      });
                        var marker13 = new google.maps.Marker({
                             position: stclotilde,
                             map: map,          
                               });
                           marker13.addListener('click', function() {
                            infowindow13.open(map, marker13);
                                                      }); 

                        var marker14 = new google.maps.Marker({
                             position: moufia,
                             map: map,          
                               });
                           marker14.addListener('click', function() {
                            infowindow14.open(map, marker14);
                                                      });                                
                        var marker15 = new google.maps.Marker({
                             position: stjacques,
                             map: map,          
                               });
                           marker15.addListener('click', function() {
                            infowindow15.open(map, marker15);
                                                      });
                        
      }

      /*========================================info quartier==================================*/


             

              function change1(){

                 document.getElementById("head1").innerHTML = "Barachois!";
                 document.getElementById("info").innerHTML = "Barachois , vous pourrez admirer la vue donnant sur la mer et accéder aux différents snacks ainsi que des pizzerias pour vous restaurer (autant midi que soir). Vous pouvez à proximité du Centre-Ville,de la gare routière,la piscine barachois ainsi qu'à la discothèque : le bain de minuit.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/FKTLXRPA8BI" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }    

               function change2(){

                 document.getElementById("head1").innerHTML = "Centre-Ville!";
                 document.getElementById("info").innerHTML = "Le centre-ville de Saint-Denis, parfois appelé le Carré d’Or, est structuré sur un plan hippodamien (rues rectilignes qui se croisent en angle droit) établi dès la première moitié du XVIIIe siècle. Il a pour voies principales des rues telles que la rue de Paris, axe historique de la ville qui relie le Jardin de l’Etat à la colonne de la Victoire, ou bien la rue du Maréchal Leclerc, aujourd’hui en partie piétonne. On retrouve logiquement dans le centre de Saint-Denis de nombreux commerces de grandes enseignes nationales ou des boutiques plus locales. Ce quartier animé en semaine concentre une majorité d’appartements, mais on y trouve aussi de belles maisons créoles. Il compte de nombreuses écoles, collèges et lycées, dont certains sont réputés, mais aussi plusieurs lieux administratifs, monuments culturels ou religieux. Au point le plus septentrional de la ville, on trouve le Barachois, quartier historique qui borde l’océan, et où l’on trouve la batterie de canon pointant vers le large, à partir de laquelle sont mesurées les distances kilométriques séparant l’île du reste du monde. La quartier est animé en semaine mais plus calme le weekend. En période scolaire, les embouteillages dans Saint-Denis, comme pour y accéder, sont quotidiens";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/ZfiiUcUXknQ" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change3(){

                 document.getElementById("head1").innerHTML = "Belle-Pierre!";
                 document.getElementById("info").innerHTML = "Quartier regroupant un milieu social plutôt aisé, vous trouverez un hôpital,un supermarché et une magnifique vue sur la ville. ";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/7K0wqKYiMao" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change4(){

                 document.getElementById("head1").innerHTML = "La Bretagne!";
                 document.getElementById("info").innerHTML = "La Bretagne est un quartier de Saint-Denis situé dans les hauteurs. Quartier agréable à vivre ";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/2P7U7vy3RkE" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change5(){

                 document.getElementById("head1").innerHTML = "Camelia!";
                 document.getElementById("info").innerHTML = "Le quartier de la Providence et des Camélias s’étend du boulevard Sud jusqu’à la Glacière, et entre les quartiers de Bellepierre à l’Ouest et de Montgaillard à l’Est. Il est composé d’un habitat hétérogène, regroupant essentiellement des logements collectifs aux abords du boulevard Sud, qui évolue au fur et à mesure que l’on prend de l’altitude vers des maisons individuelles et des logements plus traditionnels. Le quartier dans sa partie basse est très animée et accueille de nombreux commerces";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/5HDp5mbPD4I" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change6(){

                 document.getElementById("head1").innerHTML = "Bas-la-riviere!";
                 document.getElementById("info").innerHTML = "Situé dans l’encaissement formé par la Rivière Saint-Denis à l’Ouest du centre ville, ces quartiers comprennent de nombreux édifices parmi les plus anciens de Saint-Denis. Sur la rive gauche de la rivière Saint-Denis, le quartier de Petite-île est situé de la Caserne Lambert jusqu’au quartier de la Redoute. Le quartier du Bas de la Rivière est situé sur la rive droite de la rivière Saint-Denis. L’habitat est constitué de maisons et de résidences collectives. Ces quartiers plutôt résidentiels permettent un accès rapide à la route du littoral à l’Ouest, et au centre ville de Saint-Denis.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/QkeL-SSo0vs" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change7(){

                 document.getElementById("head1").innerHTML = "Butor!";
                 document.getElementById("info").innerHTML = "Lorem ipsum dolor sit amet, uis aute irure ";
                 document.getElementById("address").innerHTML = '<div class="video">'+'https://www.youtube.com/watch?v=cPoeY23mpH0'+'</div>'
              }
               function change8(){

                 document.getElementById("head1").innerHTML = "Chaudron!";
                 document.getElementById("info").innerHTML = "Le quartier populaire du Chaudron est l’un des plus peuplés de la Réunion. Il est composé d’ensemble immobiliers et de logements sociaux, et d’une zone industrielle où sont installés magasins et entrepôts. Ce quartier reste fortement touché par le chômage, et est connu pour les émeutes très violentes qui s’y sont déroulées, mais de nombreuses initiatives positives se développent pour ses habitants et l’image du quartier.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/jbF5o4sgsI0" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change9(){

                 document.getElementById("head1").innerHTML = "Domenjod!";
                 document.getElementById("info").innerHTML = "Domenjod est la bande de terre qui s’étend entre la Rivière des Pluies et la Ravine à Cadet à l’extrémité Est de Saint-Denis. On y trouve notamment le centre pénitentiaire de Saint-Denis.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/Y3yIV1QT8Jg" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change10(){

                 document.getElementById("head1").innerHTML = "La Source!";
                 document.getElementById("info").innerHTML = "Le petit quartier de la Source est situé au Sud du centre ville, et au croisement des quartiers de Bellepierre et de la Providence. Il a subit des changements importants avec l’urbanisation et la création du Boulevard Sud, mais conserve sur son territoire le fameux jardin botanique de Saint-Denis connu sous le nom de Jardin de l’État. Le quartier est majoritairement composé de logements collectifs, dont des logements sociaux, mais aussi de quelques belles maisons. Le quartier de la Source abrite le siège du conseil général de La Réunion et de la chambre d’agriculture. Sa situation entraine de fait une circulation importante et il est largement desservi par plusieurs lignes de bus.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe 315px" height="215px src="https://www.youtube.com/watch?v=YTwKgLnDWLk" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change11(){

                 document.getElementById("head1").innerHTML = "La Trinite!";
                 document.getElementById("info").innerHTML = "La Trinité est un quartier de Saint-Denis, le chef-lieu de l'île de La Réunion, département d'outre-mer français dans le sud-ouest de l'océan Indien. Situé entre Champ Fleuri au nord, Les Camélias à l'ouest, Montgaillard au sud et la ravine des Patates à Durand à l'est, il accueille notamment une église catholique, une médiathèque appelée Maison de la Communication François-Mitterrand et un espace vert nommé parc de la Trinité.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/fAeybiTnZCE" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change12(){

                 document.getElementById("head1").innerHTML = "Le Brule!";
                 document.getElementById("info").innerHTML = "Le Brulé est un village situé dans les hauts de Saint-Denis, en continuant après le quartier de Bellepierre, entre 600 et 1000 mètres d’altitude. Le plateau se prolonge ensuite jusqu’à la plaine des Chicots et jusqu’au rempart de la Roche Ecrite. Ce quartier semi-rural à l’écart de Saint-Denis offre un cadre de vie calme et des températures tempérées. Il est exclusivement composé de maisons individuelles, de belles propriétés, mais aussi de cases traditionnelles rudimentaires. On y trouve une école primaire, un ensemble sportif et quelques petits commerces. Le Brulé propose un cadre naturel et préservé, dont le « prix » à payer est d’une heure environ pour rejoindre le centre de Saint-Denis par la D42.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/aw7mFd7rRrM" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change13(){

                 document.getElementById("head1").innerHTML = "Mongaillard!";
                 document.getElementById("info").innerHTML = "Montgaillard et Saint-François sont deux quartiers situés entre 100 et 600 mètres d’altitude au dessus des quartiers de la Trinité et des Camélias. L’habitat mêle de belles propriétés et des ensembles collectifs de plutôt bon standing. En montant après le kilomètre 7, le quartier de Saint-François devient plus rural et l’habitat plus hétérogène. Ces quartiers bénéficient d’un accès relativement rapide, mais la circulation est dense notamment aux heures de pointe.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/0wAXSer4odM" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change14(){

                 document.getElementById("head1").innerHTML = "St Clotilde"
                 document.getElementById("info").innerHTML = "Lorem ipsum dolor sit amet, uis aute irure ";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe 315px" height="215px src="https://www.youtube.com/embed/FKTLXRPA8BI" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
               function change15(){

                 document.getElementById("head1").innerHTML = "Moufia!";
                 document.getElementById("info").innerHTML = "Le quartier du Moufia compte de nombreuses administrations (Conseil régional de La Réunion, la police, l’Académie de la Réunion…) et le campus principal de l’Université de La Réunion. Le quartier est proche d’un centre commercial mais dispose encore de commerces locaux, et fonctionne en synergie avec le quartier du Chaudron. Il présente un habitat hétérogène où des maisons côtoient des collectifs plus populaires ou des résidences plus récentes, constructions issues notamment des dispositifs de défiscalisation.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/sqhy0_A6i5Q" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }

              function change16(){

                 document.getElementById("head1").innerHTML = "St Jacques!";
                 document.getElementById("info").innerHTML = "Au milieu du XIX e siècle, un vaste programme de construction de chapelles et d'églises paroissiale s'organise sous les épiscopats de Monseigneur Deprez, et de Monseigneur Maupoint. Dans les principaux quartiers les bâtiments en pierre remplacent les édifices en bois. c'est la cas du quartier Saint-Jacques où une église en basalte enduit est construite. L'urbanisation de l'écart Saint-Jacques fait qu'il est devenu quartier à part entière de la ville de Saint-denis.";
                 document.getElementById("address").innerHTML = '<div class="video">'+'<iframe width="315px" height="215px" src="https://www.youtube.com/embed/RaJQX-jWsQI" frameborder="0" allowfullscreen></iframe>'+'</div>'
              }
