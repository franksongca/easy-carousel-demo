import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-carousel Demo';

  // TODO: need to convert JSON to html: https://www.w3schools.com/js/js_json_html.asp
  demo1CarouselInfo = {
    "looping": true,
    "maxWidth": 900,
    "ratioHW": 0.75,
    "itemsInOneScreen": 2,
    "animationDuration": 2,
    "itemOutlineColor": "white",
    "autoPlay": {
      "enable": true,
      "delay": 3000,
      "duration": 2500
    },
    "trnsactionEffect": "ease-in-out",
    "items": [
      {"id": 1, "img": "./assets/img/carousel/1.jpg", "name": "NAME 1", "desc": "desc 1"},
      {
        "items": [
          {
            "id": 2,
            "img": "./assets/img/carousel/2-1.jpg",
            "name": "NAME 2-1",
            "desc": "desc 2-1",
            "sizeRatio": {
              "width": 0.5,
              "height": 1
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 3,
            "img": "./assets/img/carousel/4.jpg",
            "name": "NAME 2-2",
            "desc": "desc 2-2",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          },
          {
            "id": 17,
            "img": "./assets/img/carousel/10.jpg",
            "name": "NAME 2-3",
            "desc": "desc 2-3",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0.5
            }
          }
        ]
      },
      {"id": 4,"img": "./assets/img/carousel/4.jpg", "name": "NAME 4", "desc": "desc 4"},
      {"id": 5,"img": "./assets/img/carousel/5.jpg", "name": "NAME 5", "desc": "desc 5"},
      {"id": 6,"img": "./assets/img/carousel/6.jpg", "name": "NAME 6", "desc": "desc 6"},
      {"id": 7,"img": "./assets/img/carousel/7.jpg", "name": "NAME 7", "desc": "desc 7"},
      {"id": 8,"img": "./assets/img/carousel/8.jpg", "name": "NAME 8", "desc": "desc 8"},
      {"id": 9,"img": "./assets/img/carousel/9.jpg", "name": "NAME 9", "desc": "desc 9"},
      {"id": 10,"img": "./assets/img/carousel/10.jpg", "name": "NAME 10", "desc": "desc 10"},
      {"id": 11,"img": "./assets/img/carousel/11.jpg", "name": "NAME 11", "desc": "desc 11"},
      {"id": 12,"img": "./assets/img/carousel/12.jpg", "name": "NAME 12", "desc": "desc 12"},
      {
        "items": [
          {
            "id": 13,
            "img": "./assets/img/carousel/4.jpg",
            "name": "NAME 13-1",
            "desc": "desc 13-1",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 14,
            "img": "./assets/img/carousel/10.jpg",
            "name": "NAME 13-2",
            "desc": "desc 13-2",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          },
          {
            "id": 15,
            "img": "./assets/img/carousel/2-2.jpg",
            "name": "NAME 13-3",
            "desc": "desc 13-3",
            "sizeRatio": {
              "width": 1,
              "height": 1
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          }
        ]
      },
      {"id": 16,"img": "./assets/img/carousel/13.jpg", "name": "NAME 16", "desc": "desc 16"},
      {"id": 17,"img": "./assets/img/carousel/14.jpg", "name": "NAME 17", "desc": "desc 17"},
      {"id": 18,"img": "./assets/img/carousel/15.jpg", "name": "NAME 18", "desc": "desc 18"}
    ],
    "carouselItemInfo": {
      "name": "white",
      "desc": "lightgray",
      "minFontSize": 15,
      "maxFontSize": 40,
      "nameFontFamily": "",
      "descFontFamily": ""
    },
    "carouselChildItemInfo": {
      "name": "white",
      "desc": "lightgray",
      "minFontSize": 10,
      "maxFontSize": 30,
      "nameFontFamily": "",
      "descFontFamily": ""
    }
  };
  demo1Desc = '{\r\n  "maxWidth": 1200,\r\n  "ratioHW": 0.65,\r\n  "itemsInOneScreen": 3,\r\n  "animationDuration": 1.5,\r\n  "itemOutlineColor": "white",\r\n  "autoPlay": {\r\n    "enable": true,\r\n    "delay": 2000,\r\n    "duration": 2000\r\n  },\r\n  "trnsactionEffect": "ease-in",\r\n  "items": [\r\n    {\r\n      "id": 1,\r\n      "img": "./assets/img/carousel/1.jpg",\r\n      "name": "NAME 1",\r\n      "desc": "desc 1"\r\n    },\r\n    {\r\n      "items": [\r\n        {\r\n          "id": 2,\r\n          "img": "./assets/img/carousel/2-1.jpg",\r\n          "name": "NAME 2-1",\r\n          "desc": "desc 2-1",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 1\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 3,\r\n          "img": "./assets/img/carousel/4.jpg",\r\n          "name": "NAME 2-2",\r\n          "desc": "desc 2-2",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 17,\r\n          "img": "./assets/img/carousel/10.jpg",\r\n          "name": "NAME 2-3",\r\n          "desc": "desc 2-3",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0.5\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "id": 4,\r\n      "img": "./assets/img/carousel/4.jpg",\r\n      "name": "NAME 4",\r\n      "desc": "desc 4"\r\n    },\r\n    {\r\n      "id": 5,\r\n      "img": "./assets/img/carousel/5.jpg",\r\n      "name": "NAME 5",\r\n      "desc": "desc 5"\r\n    },\r\n    {\r\n      "id": 6,\r\n      "img": "./assets/img/carousel/6.jpg",\r\n      "name": "NAME 6",\r\n      "desc": "desc 6"\r\n    },\r\n    {\r\n      "id": 7,\r\n      "img": "./assets/img/carousel/7.jpg",\r\n      "name": "NAME 7",\r\n      "desc": "desc 7"\r\n    },\r\n    {\r\n      "id": 8,\r\n      "img": "./assets/img/carousel/8.jpg",\r\n      "name": "NAME 8",\r\n      "desc": "desc 8"\r\n    },\r\n    {\r\n      "id": 9,\r\n      "img": "./assets/img/carousel/9.jpg",\r\n      "name": "NAME 9",\r\n      "desc": "desc 9"\r\n    },\r\n    {\r\n      "id": 10,\r\n      "img": "./assets/img/carousel/10.jpg",\r\n      "name": "NAME 10",\r\n      "desc": "desc 10"\r\n    },\r\n    {\r\n      "id": 11,\r\n      "img": "./assets/img/carousel/11.jpg",\r\n      "name": "NAME 11",\r\n      "desc": "desc 11"\r\n    },\r\n    {\r\n      "id": 12,\r\n      "img": "./assets/img/carousel/12.jpg",\r\n      "name": "NAME 12",\r\n      "desc": "desc 12"\r\n    },\r\n    {\r\n      "items": [\r\n        {\r\n          "id": 13,\r\n          "img": "./assets/img/carousel/4.jpg",\r\n          "name": "NAME 13-1",\r\n          "desc": "desc 13-1",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 14,\r\n          "img": "./assets/img/carousel/10.jpg",\r\n          "name": "NAME 13-2",\r\n          "desc": "desc 13-2",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0.5\r\n          }\r\n        },\r\n        {\r\n          "id": 15,\r\n          "img": "./assets/img/carousel/2-2.jpg",\r\n          "name": "NAME 13-3",\r\n          "desc": "desc 13-3",\r\n          "sizeRatio": {\r\n            "width": 1,\r\n            "height": 1\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "id": 16,\r\n      "img": "./assets/img/carousel/13.jpg",\r\n      "name": "NAME 16",\r\n      "desc": "desc 16"\r\n    },\r\n    {\r\n      "id": 17,\r\n      "img": "./assets/img/carousel/14.jpg",\r\n      "name": "NAME 17",\r\n      "desc": "desc 17"\r\n    },\r\n    {\r\n      "id": 18,\r\n      "img": "./assets/img/carousel/15.jpg",\r\n      "name": "NAME 18",\r\n      "desc": "desc 18"\r\n    }\r\n  ],\r\n  "carouselItemColor": {\r\n    "name": "white",\r\n    "desc": "white"\r\n  }\r\n}\r\n';

  demo2CarouselInfo = {
    "maxWidth": 1200,
    "ratioHW": 0.65,
    "itemsInOneScreen": 3,
    "animationDuration": 1.5,
    "itemOutlineColor": "white",
    "autoPlay": {
      "enable": true,
      "delay": 2000,
      "duration": 2000
    },
    "trnsactionEffect": "ease-in",
    "items": [
      {"id": 1, "img": "./assets/img/carousel/1.jpg", "name": "NAME 1", "desc": "desc 1"},
      {
        "items": [
          {
            "id": 2,
            "img": "./assets/img/carousel/2-1.jpg",
            "name": "NAME 2-1",
            "desc": "desc 2-1",
            "sizeRatio": {
              "width": 0.5,
              "height": 1
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 3,
            "img": "./assets/img/carousel/4.jpg",
            "name": "NAME 2-2",
            "desc": "desc 2-2",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          },
          {
            "id": 17,
            "img": "./assets/img/carousel/10.jpg",
            "name": "NAME 2-3",
            "desc": "desc 2-3",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0.5
            }
          }
        ]
      },
      {"id": 4,"img": "./assets/img/carousel/4.jpg", "name": "NAME 4", "desc": "desc 4"},
      {"id": 5,"img": "./assets/img/carousel/5.jpg", "name": "NAME 5", "desc": "desc 5"},
      {"id": 6,"img": "./assets/img/carousel/6.jpg", "name": "NAME 6", "desc": "desc 6"},
      {"id": 7,"img": "./assets/img/carousel/7.jpg", "name": "NAME 7", "desc": "desc 7"},
      {"id": 8,"img": "./assets/img/carousel/8.jpg", "name": "NAME 8", "desc": "desc 8"},
      {"id": 9,"img": "./assets/img/carousel/9.jpg", "name": "NAME 9", "desc": "desc 9"},
      {"id": 10,"img": "./assets/img/carousel/10.jpg", "name": "NAME 10", "desc": "desc 10"},
      {"id": 11,"img": "./assets/img/carousel/11.jpg", "name": "NAME 11", "desc": "desc 11"},
      {"id": 12,"img": "./assets/img/carousel/12.jpg", "name": "NAME 12", "desc": "desc 12"},
      {
        "items": [
          {
            "id": 13,
            "img": "./assets/img/carousel/4.jpg",
            "name": "NAME 13-1",
            "desc": "desc 13-1",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 14,
            "img": "./assets/img/carousel/10.jpg",
            "name": "NAME 13-2",
            "desc": "desc 13-2",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "positionRatio": {
              "x": 0,
              "y": 0.5
            }
          },
          {
            "id": 15,
            "img": "./assets/img/carousel/2-2.jpg",
            "name": "NAME 13-3",
            "desc": "desc 13-3",
            "sizeRatio": {
              "width": 1,
              "height": 1
            },
            "positionRatio": {
              "x": 0.5,
              "y": 0
            }
          }
        ]
      },
      {"id": 16,"img": "./assets/img/carousel/13.jpg", "name": "NAME 16", "desc": "desc 16"},
      {"id": 17,"img": "./assets/img/carousel/14.jpg", "name": "NAME 17", "desc": "desc 17"},
      {"id": 18,"img": "./assets/img/carousel/15.jpg", "name": "NAME 18", "desc": "desc 18"}
    ],
    "carouselItemInfo": {
      "name": "white",
      "desc": "lightgray",
      "minFontSize": 15,
      "maxFontSize": 40,
      "nameFontFamily": "",
      "descFontFamily": ""
    },
    "carouselChildItemInfo": {
      "name": "white",
      "desc": "lightgray",
      "minFontSize": 10,
      "maxFontSize": 30,
      "nameFontFamily": "",
      "descFontFamily": ""
    }
  };
  demo2Desc = '{\r\n  "maxWidth": 1200,\r\n  "ratioHW": 0.65,\r\n  "itemsInOneScreen": 3,\r\n  "animationDuration": 1.5,\r\n  "itemOutlineColor": "white",\r\n  "autoPlay": {\r\n    "enable": true,\r\n    "delay": 2000,\r\n    "duration": 2000\r\n  },\r\n  "trnsactionEffect": "ease-in",\r\n  "items": [\r\n    {\r\n      "id": 1,\r\n      "img": "./assets/img/carousel/1.jpg",\r\n      "name": "NAME 1",\r\n      "desc": "desc 1"\r\n    },\r\n    {\r\n      "items": [\r\n        {\r\n          "id": 2,\r\n          "img": "./assets/img/carousel/2-1.jpg",\r\n          "name": "NAME 2-1",\r\n          "desc": "desc 2-1",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 1\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 3,\r\n          "img": "./assets/img/carousel/4.jpg",\r\n          "name": "NAME 2-2",\r\n          "desc": "desc 2-2",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 17,\r\n          "img": "./assets/img/carousel/10.jpg",\r\n          "name": "NAME 2-3",\r\n          "desc": "desc 2-3",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0.5\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "id": 4,\r\n      "img": "./assets/img/carousel/4.jpg",\r\n      "name": "NAME 4",\r\n      "desc": "desc 4"\r\n    },\r\n    {\r\n      "id": 5,\r\n      "img": "./assets/img/carousel/5.jpg",\r\n      "name": "NAME 5",\r\n      "desc": "desc 5"\r\n    },\r\n    {\r\n      "id": 6,\r\n      "img": "./assets/img/carousel/6.jpg",\r\n      "name": "NAME 6",\r\n      "desc": "desc 6"\r\n    },\r\n    {\r\n      "id": 7,\r\n      "img": "./assets/img/carousel/7.jpg",\r\n      "name": "NAME 7",\r\n      "desc": "desc 7"\r\n    },\r\n    {\r\n      "id": 8,\r\n      "img": "./assets/img/carousel/8.jpg",\r\n      "name": "NAME 8",\r\n      "desc": "desc 8"\r\n    },\r\n    {\r\n      "id": 9,\r\n      "img": "./assets/img/carousel/9.jpg",\r\n      "name": "NAME 9",\r\n      "desc": "desc 9"\r\n    },\r\n    {\r\n      "id": 10,\r\n      "img": "./assets/img/carousel/10.jpg",\r\n      "name": "NAME 10",\r\n      "desc": "desc 10"\r\n    },\r\n    {\r\n      "id": 11,\r\n      "img": "./assets/img/carousel/11.jpg",\r\n      "name": "NAME 11",\r\n      "desc": "desc 11"\r\n    },\r\n    {\r\n      "id": 12,\r\n      "img": "./assets/img/carousel/12.jpg",\r\n      "name": "NAME 12",\r\n      "desc": "desc 12"\r\n    },\r\n    {\r\n      "items": [\r\n        {\r\n          "id": 13,\r\n          "img": "./assets/img/carousel/4.jpg",\r\n          "name": "NAME 13-1",\r\n          "desc": "desc 13-1",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 14,\r\n          "img": "./assets/img/carousel/10.jpg",\r\n          "name": "NAME 13-2",\r\n          "desc": "desc 13-2",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0.5\r\n          }\r\n        },\r\n        {\r\n          "id": 15,\r\n          "img": "./assets/img/carousel/2-2.jpg",\r\n          "name": "NAME 13-3",\r\n          "desc": "desc 13-3",\r\n          "sizeRatio": {\r\n            "width": 1,\r\n            "height": 1\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "id": 16,\r\n      "img": "./assets/img/carousel/13.jpg",\r\n      "name": "NAME 16",\r\n      "desc": "desc 16"\r\n    },\r\n    {\r\n      "id": 17,\r\n      "img": "./assets/img/carousel/14.jpg",\r\n      "name": "NAME 17",\r\n      "desc": "desc 17"\r\n    },\r\n    {\r\n      "id": 18,\r\n      "img": "./assets/img/carousel/15.jpg",\r\n      "name": "NAME 18",\r\n      "desc": "desc 18"\r\n    }\r\n  ],\r\n  "carouselItemColor": {\r\n    "name": "white",\r\n    "desc": "white"\r\n  }\r\n}\r\n';

  changed(v) {
    let a = v;
  }

  onCarouselDemo1Selected(carouselItemId) {
    alert('Demo 1 carousel item ' + carouselItemId + ' selected!');
  }

  onCarouselDemo2Selected(carouselItemId) {
    alert('Demo 2 carousel item ' + carouselItemId + ' selected!');
  }

}
