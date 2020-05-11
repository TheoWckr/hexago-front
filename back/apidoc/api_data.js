define({ "api": [
  {
    "type": "post",
    "url": "/genre/create",
    "title": "Create a genre",
    "name": "Create_a_genre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3100/genre/create --data {\"name\": \"tete\"}",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"content\": {\n          \"gameGenreId\": \"5e6654ecdb12dc2e340f7680\",\n          \"genre\": \"TEST\"\n      },\n      \"msg\": \"genre created successfully.\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genre.js",
    "groupTitle": "Genres"
  },
  {
    "type": "delete",
    "url": "/genre/:id",
    "title": "Delete a genre",
    "name": "Delete_a_genre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"msg\": \"genre deleted successfully.\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genre.js",
    "groupTitle": "Genres"
  },
  {
    "type": "get",
    "url": "/genre/5e79d8996b247d4d872c67f8",
    "title": "Get a genre",
    "name": "Get_a_genre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      {\n        \"_id\": \"5e79d8996b247d4d872c67f8\",\n        \"genre\": \"bombe\",\n        \"createdAt\": \"2020-03-24T09:53:29.598Z\",\n        \"updatedAt\": \"2020-03-24T09:53:29.598Z\",\n        \"__v\": 0\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genre.js",
    "groupTitle": "Genres"
  },
  {
    "type": "get",
    "url": "/genre/genre=bombede&limit=3",
    "title": "Get genres",
    "name": "Get_genre_by_string_or_get_all_if_empty",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": "<p>searchname</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>maxlimit</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"content\": [\n        {\n            \"_id\": \"5e79d7c7999ff74c5221e07f\",\n            \"genre\": \"bombedeballe\",\n            \"createdAt\": \"2020-03-24T09:49:59.375Z\",\n            \"updatedAt\": \"2020-03-24T09:49:59.375Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e79d7f9e2c5394d079259e4\",\n            \"genre\": \"bombedeballe\",\n            \"createdAt\": \"2020-03-24T09:50:49.438Z\",\n            \"updatedAt\": \"2020-03-24T09:50:49.438Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e79d803e2c5394d079259e5\",\n            \"genre\": \"bombedeball\",\n            \"createdAt\": \"2020-03-24T09:50:59.222Z\",\n            \"updatedAt\": \"2020-03-24T09:50:59.222Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e79d80ae2c5394d079259e6\",\n            \"genre\": \"bombedebal\",\n            \"createdAt\": \"2020-03-24T09:51:06.525Z\",\n            \"updatedAt\": \"2020-03-24T09:51:06.525Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e79d8996b247d4d872c67f8\",\n            \"genre\": \"bombe\",\n            \"createdAt\": \"2020-03-24T09:53:29.598Z\",\n            \"updatedAt\": \"2020-03-24T09:53:29.598Z\",\n            \"__v\": 0\n        }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genre.js",
    "groupTitle": "Genres"
  },
  {
    "type": "put",
    "url": "/genre/:id",
    "title": "Update a genre",
    "name": "Update_a_genre",
    "group": "Genres",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "genre",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3100/genre/:id --data {\"name\": \"tete\"}",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"content\": {\n        \"_id\": \"5e79d8996b247d4d872c67f8\",\n        \"genre\": \"bombe\",\n        \"createdAt\": \"2020-03-24T09:53:29.598Z\",\n        \"updatedAt\": \"2020-03-24T09:53:29.598Z\",\n        \"__v\": 0\n      },\n      \"msg\": \"genre updated successfully.\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/genre.js",
    "groupTitle": "Genres"
  },
  {
    "type": "post",
    "url": "/users/create",
    "title": "Request User information",
    "name": "Create_User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>User account is active or not</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User nickname for the service</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Password encryption key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "dateCreation",
            "description": "<p>User account creation date</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "dateLastConnection",
            "description": "<p>User last connection to account date</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "dateOfBirth",
            "description": "<p>User date of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userProfileId",
            "description": "<p>Id which links to user profile table entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>Id which determines what roles user has</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user\": {\n        \"isActive\": true,\n        \"_id\": \"5e6654ecdb12dc2e340f7680\",\n        \"username\": \"Pip\",\n        \"phone\": \"000000000\",\n        \"firstName\": \"bob\",\n        \"lastName\": \"Bobby\",\n        \"password\": \"baboulinet\",\n        \"salt\": \"jjjj\",\n        \"email\": \"bob@bob.fr\",\n        \"dateCreation\": \"2020-03-09T14:37:56.192Z\",\n        \"dateLastConnection\": \"2020-03-09T14:37:56.192Z\",\n        \"userProfileId\": 12345,\n        \"roleId\": 123456,\n        \"birthdate\": \"2020-03-09T14:38:36.495Z\",\n        \"createdAt\": \"2020-03-09T14:38:36.497Z\",\n        \"updatedAt\": \"2020-03-09T14:38:36.497Z\",\n        \"__v\": 0\n    },\n    \"msg\": \"User created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/gamedetails/_id",
    "title": "delete a game by it id",
    "name": "DELETE_gamedetails",
    "group": "gamedetails",
    "description": "<p>Delete a game by it id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of a game</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5e8afc246e335f2230b4f3e2\",\n    \"msg\": \"Game deleted successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/gameDetails.js",
    "groupTitle": "gamedetails"
  },
  {
    "type": "get",
    "url": "/gamedetailshttp://localhost:3100/gamedetails/name?name=xxxx",
    "title": "Quicksearch game name",
    "name": "GET_gamedetails",
    "group": "gamedetails",
    "description": "<p>Quicksearch a game and id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a game</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"content\": [\n        {\n            \"_id\": \"5e81f6d0d747b30af813ad0b\",\n            \"name\": \"7 Wonders Duelle\"\n        },\n        {\n            \"_id\": \"5e81f5d71ec448554c7396bd\",\n            \"name\": \"7 Wonders Duelle\"\n        },\n        {\n            \"_id\": \"5e95c3eae39f5227dc0533be\",\n            \"name\": \"7 Wonders Duelle 75\"\n        },\n        {\n            \"_id\": \"5e8b46e5894b794d8c7cf45a\",\n            \"name\": \"7 Wonders Duelle 55\"\n        },\n        {\n            \"_id\": \"5e8aeffbb083cd20c42a96ab\",\n            \"name\": \"7 Wonders Duelle 24\"\n        },\n        {\n            \"_id\": \"5e8aefe0dad3274b383ac384\",\n            \"name\": \"7 Wonders Duelle 23\"\n        },\n        {\n            \"_id\": \"5e8210e3ade65a55981f7687\",\n            \"name\": \"7 Wonders Duelle 6\"\n        },\n        {\n            \"_id\": \"5e81fc5651a7294e80dc1e46\",\n            \"name\": \"7 Wonders Duelle 5\"\n        },\n        {\n            \"_id\": \"5e81f7656f0e574d38d61de0\",\n            \"name\": \"7 Wonders Duelle 3\"\n        },\n        {\n            \"_id\": \"5e81f7336044533ae071daa4\",\n            \"name\": \"7 Wonders Duelle 1\"\n        },\n        {\n            \"_id\": \"5e81c236aa716e2c0c5aa422\",\n            \"name\": \"7 Wonders Duelle 55\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/gameDetails.js",
    "groupTitle": "gamedetails"
  },
  {
    "type": "get",
    "url": "/gamedetails?name=xxx&author=xxx&editor=xxx&distributor=xxx&releaseDate=xxx&popularity=xxx&nbPlayer=xxx&gameLengthDesired=xxx&minAge=xxx&whatToSortBy=xxx&sortValue=xxx&limit=xxx&offset=xxx",
    "title": "Request game information",
    "name": "GET_gamedetails",
    "group": "gamedetails",
    "description": "<p>Get a game with filters, pagination</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "author",
            "description": "<p>Name of the author of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "editor",
            "description": "<p>Name of the editor of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distributor",
            "description": "<p>Name of the distributor of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of the release of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "popularity",
            "description": "<p>Popularity score of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nbPlayer",
            "description": "<p>Number of player desired which will compare playerMin and playerMax values</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameLengthDesired",
            "description": "<p>Time value in minutes which will compare gameLengthMin and gameLengthMax values</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minAge",
            "description": "<p>Minimum age advised to play the game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "whatToSortBy",
            "description": "<p>what field to use for sorting</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sortValue",
            "description": "<p>1 for ascending sort or -1 for descending sort</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Required for pagination, set the number of entries per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Required for pagination, select the page desired (first one is 0)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genres",
            "description": "<p>Array of genres of a game separated by a comma</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "baseGameId",
            "description": "<p>Base game id if the game is an extension</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3100/gamedetails?limit=2&offset=1&whatToSortBy=popularity&sortValue=-1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"content\": [\n        {\n            \"genres\": [],\n            \"_id\": \"5e7a26929852d524bcfdffb3\",\n            \"name\": \"Terraforming Mars\",\n            \"author\": [\"Jacob Fryxelius\"],\n            \"editor\": \"Intrafin\",\n            \"distributor\": \"Intrafin\",\n            \"releaseDate\": \"2016-04-01T00:00:00.000Z\",\n            \"popularity\": 13,\n            \"playerMin\": 1,\n            \"playerMax\": 5,\n            \"gameLengthMin\": 60,\n            \"gameLengthMax\": 120,\n            \"minAge\": 12,\n            \"description\": \"L'ère de la domestication de Mars a commencé. Dans Terraforming Mars, de puissantes corporations travaillent pour rendre la Planète Rouge habitable. La température, l'oxygène et les océans sont les trois axes de développement principaux. Mais pour triompher, il faudra aussi construire des infrastructures pour les générations futures.\"\n        },\n        {\n            \"genres\": [],\n            \"_id\": \"5e7a26929852d524bcfdffb1\",\n            \"name\": \"Bunny Kingdom\",\n            \"author\": [\"Richard Garfield\"],\n            \"editor\": \"Iello\",\n            \"distributor\": \"Iello\",\n            \"releaseDate\": \"2018-01-01T00:00:00.000Z\",\n            \"popularity\": 12,\n            \"playerMin\": 2,\n            \"playerMax\": 4,\n            \"gameLengthMin\": 30,\n            \"gameLengthMax\": 60,\n            \"minAge\": 14,\n            \"description\": \"Incarnez des seigneurs lapins et partez à la conquête d’un nouveau monde pour le compte du roi des lapins. Installez vos fiefs aux endroits stratégiques, exploitez les Ressources, bâtissez des Cités et préparez vos Missions secrètes pour voler à vos adversaires la victoire à la dernière minute. Chaque choix peut vous apporter les lauriers de la victoire ou l’ ombre de la défaite. Bunny Kingdom est un jeu de draft(sélection de cartes) et de placement qui se joue en 4 manches. Lors de chaque manche, les joueurs vont étendre leurs fiefs, augmenter leur Puissance et leur Richesse en construisant des Cités et en exploitant de nouvelles Ressources.Choisissez vos actions de chaque tour parmi les cartes que vous avez en main, avant de passer celles que vous ne jouez pas à vos adversaires. Chaque Manche se termine par un décompte de points dépendant de la Puissance et de la Richesse de vos Fiefs.Des Missions secrètes commandées par le roi des lapins au cours de la partie viendront sans doute perturber ce qui vous semblait établi avant le décompte final. À la fin de la partie, le joueur qui aura le plus fait prospérer son territoire sera nommé gouverneur du Nouveau Monde par le roi des lapins. Contient le plateau de jeu en version XL.\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/gameDetails.js",
    "groupTitle": "gamedetails"
  },
  {
    "type": "get",
    "url": "/gamedetails/_id",
    "title": "get a game by it id",
    "name": "GET_gamedetails_by_id",
    "group": "gamedetails",
    "description": "<p>Get a game by it id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of a game</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"content\": {\n        \"author\": [\n            \"Bruno Cathala, Antoine Bauza\"\n        ],\n        \"genres\": [\n            {\n                \"_id\": \"5e6f7901a0d93148f48fd5ce\",\n                \"genre\": \"proutprout\",\n                \"createdAt\": \"2020-03-16T13:02:57.605Z\",\n                \"updatedAt\": \"2020-03-16T13:02:57.605Z\",\n                \"__v\": 0\n            }\n        ],\n        \"_id\": \"5e8afc246e335f2230b4f3e2\",\n        \"name\": \"7 Wonders Duelle 25\",\n        \"editor\": \"Repos Production\",\n        \"distributor\": \"Repos Production\",\n        \"releaseDate\": \"2015-10-01T07:22:00.000Z\",\n        \"popularity\": 9,\n        \"playerMin\": 2,\n        \"playerMax\": 2,\n        \"gameLengthMin\": 30,\n        \"gameLengthMax\": 60,\n        \"minAge\": 10,\n        \"description\": \"Triomphez de votre adversaire en développant et améliorant votre civilisation sur les plans civil, scientifique et militaire. 7 Wonders Duel est l'adaptation 2 joueurs de 7 Wonders.>\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/gameDetails.js",
    "groupTitle": "gamedetails"
  },
  {
    "type": "post",
    "url": "/gamedetails/",
    "title": "Create a game",
    "name": "POST_gamedetails",
    "group": "gamedetails",
    "description": "<p>Create a game</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a game, REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "author",
            "description": "<p>Name of the author of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "editor",
            "description": "<p>Name of the editor of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distributor",
            "description": "<p>Name of the distributor of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of the release of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "popularity",
            "description": "<p>Popularity score of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playerMin",
            "description": "<p>Minimum number of player required to start a game, REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playerMax",
            "description": "<p>Maximum number of player required to start a game, REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameLengthMin",
            "description": "<p>Minimum time value in minutes that would take a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameLengthMax",
            "description": "<p>Maximum time value in minutes that would take a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minAge",
            "description": "<p>Minimum age advised to play the game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "genres",
            "description": "<p>Genre ID(s) of a game, REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "baseGameId",
            "description": "<p>the Id of the base game(s) if the game to be created is an extension</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\": \"7 Wonders Duelle 25\",\n\t\t\"author\": \"Bruno Cathala, Antoine Bauza\",\n\t\t\"editor\": \"Repos Production\",\n\t\t\"distributor\": \"Repos Production\",\n\t\t\"releaseDate\": \"2015-10-01T07:22Z\",\n\t\t\"popularity\": 9,\n\t\t\"playerMin\": 2,\n\t\t\"playerMax\": 2,\n\t\t\"gameLengthMin\": 30,\n\t\t\"gameLengthMax\": 60,\n\t\t\"minAge\": 10,\n\t\t\"genres\":[\"5e6f7901a0d93148f48fd5ce\"],\n\t\t\"description\":\"Triomphez de votre adversaire en développant et améliorant votre civilisation sur les plans civil, scientifique et militaire. 7 Wonders Duel est l'adaptation 2 joueurs de 7 Wonders.>\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"gameDetails\": {\n        \"author\": [\n            \"Bruno Cathala, Antoine Bauza\"\n        ],\n        \"genres\": [\n            \"5e6f7901a0d93148f48fd5ce\"\n        ],\n        \"_id\": \"5e8afc246e335f2230b4f3e2\",\n        \"name\": \"7 Wonders Duelle 25\",\n        \"editor\": \"Repos Production\",\n        \"distributor\": \"Repos Production\",\n        \"releaseDate\": \"2015-10-01T07:22:00.000Z\",\n        \"popularity\": 9,\n        \"playerMin\": 2,\n        \"playerMax\": 2,\n        \"gameLengthMin\": 30,\n        \"gameLengthMax\": 60,\n        \"minAge\": 10,\n        \"description\": \"Triomphez de votre adversaire en développant et améliorant votre civilisation sur les plans civil, scientifique et militaire. 7 Wonders Duel est l'adaptation 2 joueurs de 7 Wonders.>\",\n        \"__v\": 0\n    },\n    \"msg\": \"Game created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/gameDetails.js",
    "groupTitle": "gamedetails"
  },
  {
    "type": "put",
    "url": "/gamedetails/_id",
    "title": "Modify a game",
    "name": "PUT_gamedetails",
    "group": "gamedetails",
    "description": "<p>Modify a game</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of a game, make reference to id via the request param, NOT PART OF THE REQUEST BODY</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a game, REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "author",
            "description": "<p>Name of the author of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "editor",
            "description": "<p>Name of the editor of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distributor",
            "description": "<p>Name of the distributor of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Date of the release of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "popularity",
            "description": "<p>Popularity score of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playerMin",
            "description": "<p>Minimum number of player required to start a game, REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playerMax",
            "description": "<p>Maximum number of player required to start a game, REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameLengthMin",
            "description": "<p>Minimum time value in minutes that would take a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gameLengthMax",
            "description": "<p>Maximum time value in minutes that would take a game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "minAge",
            "description": "<p>Minimum age advised to play the game</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of a game</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "genres",
            "description": "<p>Genre ID(s) of a game, REQUIRED</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"name\": \"7 Wonders Duelle 55\",\n\t\t\"author\": \"Bruno Cathastrophe, Antoine Bozar\",\n\t\t\"editor\": \"En marche Production\",\n\t\t\"distributor\": \"Garde à vous Production\",\n\t\t\"releaseDate\": \"2015-10-01T07:22Z\",\n\t\t\"popularity\": 9,\n\t\t\"playerMin\": 2,\n\t\t\"playerMax\": 2,\n\t\t\"gameLengthMin\": 30,\n\t\t\"gameLengthMax\": 60,\n\t\t\"minAge\": 10,\n\t\t\"genres\":[\"5e6f7901a0d93148f48fd5ce\"],\n\t\t\"description\":\"Triomphez de votre adversaire en développant et améliorant votre civilisation sur les plans civil, scientifique et militaire. 7 Wonders Duel est l'adaptation 2 joueurs de 7 Wonders.>\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"gameDetails\": {\n        \"n\": 1,\n        \"nModified\": 0,\n        \"ok\": 1\n    },\n    \"msg\": \"Game updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/gameDetails.js",
    "groupTitle": "gamedetails"
  }
] });
