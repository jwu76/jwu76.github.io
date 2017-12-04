var projects = [
    {"name": "About Me Page", "display": false, "description":"a simple about me page",
    "technologies": "simple HTML/JavaScript",
    "image": "https://i.imgur.com/wLEPqz4.jpg",
    "githublink": "https://github.com/jwu76/IT202/tree/master/project1",
    "viewable_link": "https://jwu76.github.io/IT202/project1/index.html"
    },
    {"name": "Simple Website", "display": false, "description": "make a simple webpage using a template",
    "technologies": "BootStrap",
    "image": "https://i.imgur.com/YKpzViV.jpg",
    "githublink": "https://github.com/jwu76/IT202/tree/master/project2",
    "viewable_link": "https://jwu76.github.io/IT202/project2/index.html"
    },
    {"name": "API Data", "display": false, "description": "a 3 screen website using api calls and google maps api",
    "technologies": "AJAX, form, google maps api",
    "image": "https://i.imgur.com/DLWmtuB.jpg",
    "githublink": "https://github.com/jwu76/IT202/tree/master/project3",
    "viewable_link": "https://jwu76.github.io/IT202/project3/index.html"
    },
    {"name": "Simple Scrolling Game", "display": false, "description": "a simple game using event handlers",
     "technologies": "AJAX, canvas",
     "image": "https://i.imgur.com/AL47Ps6.jpg",
     "githublink" : "https://github.com/jwu76/IT202/tree/master/project4",
     "viewable_link": "https://jwu76.github.io/IT202/project4/index.html"
    },
    {"name": "Weather App", "display": false, "description": "using PWA to create a simple weather app",
    "technologies": "PWA, service worker, manifest",
    "image": "https://i.imgur.com/uuonck8.jpg",
    "githublink": "https://github.com/jwu76/IT202/tree/master/project5",
    "viewable_link": "https://jwu76.github.io/IT202/project5/index.html"
    },
    {"name": "Airhorn", "display": false, "description": "using PWA to create a simple airhorn sound",
     "technologies": "PWA, prechaching, service worker, manifest",
     "image": "https://i.imgur.com/LXSR6E9.jpg",
     "githublink": "https://github.com/jwu76/IT202/tree/master/project7",
     "viewable_link": "https://jwu76.github.io/IT202/project7/"
    },
    {"name": "React Tutorial", "display": false, "description": "using react to create a tic tac toe game",
     "technologies": "react, jsx",
     "image": "https://i.imgur.com/1k2ktNE.jpg",
     "githublink": "https://github.com/jwu76/IT202/tree/master/project8",
     "viewable_link": "https://jwu76.github.io/IT202/project8/"
    }, 
     {"name": "FINAL PROJECT", "display": false, "description": "create an app using the materials covered in class",
     "technologies": "material components, indexedDB(Dexie), geolocation, ",
     "image": "https://i.imgur.com/6aBnVFG.png",
     "githublink": "https://github.com/jwu76/IT202/tree/master/final",
     "viewable_link": "https://jwu76.github.io/IT202/final/"
    }
    ];

    $(function() {
        jQuery.each(projects, function(i, v)
        {
            var clone = $("#projectObjs").clone();
            clone.removeAttr("id");
            clone.find("img").attr("src", v.image);
            clone.find(".card-block .card-title").text(v.name);
            clone.find(".card-text").text(v.description);
            clone.find(".git-link").attr("href", v.githublink);
            clone.find(".web-link").attr("href", v.viewable_link);
            clone.removeClass("hidden");
            clone.attr("id", v.name);      
            $("#portfolio").append(clone);
            
           
     });
    });
    