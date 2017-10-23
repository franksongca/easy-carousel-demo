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
    "baseImagePath": "./assets/img/carousel/",
    "looping": true,
    "maxWidth": 900,
    "ratioHW": 0.75,
    "itemsInOneScreen": 2,
    "itemsInOneScreenGroups": [
      {
        "screenWidth": 600,
        "itemsInOneScreen": 2
      },
      {
        "screenWidth": 900,
        "itemsInOneScreen": 3
      },
      {
        "screenWidth": 1200,
        "itemsInOneScreen": 4
      }
    ],
    "animationDuration": 2,
    "itemOutlineColor": "white",
    "autoPlay": {
      "enable": true,
      "delay": 3000,
      "duration": 2500
    },
    "trnsactionEffect": "ease-in-out",
    "items": [
      {
        "id": 1,
        "img": "1.jpg",
        "selectedImg": "15.jpg",
        "name": "NAME 1",
        "desc": "desc 1",
        "details": "details 1"
      },
      {
        "items": [
          {
            "id": 2,
            "img": "2-1.jpg",
            "selectedImg": "4.jpg",
            "name": "NAME 2-1",
            "desc": "desc 2-1",
            "details": "details 2-1",
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
            "img": "4.jpg",
            "name": "NAME 2-2",
            "desc": "desc 2-2",
            "details": "details 2-2",
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
            "img": "10.jpg",
            "name": "NAME 2-3",
            "desc": "desc 2-3",
            "details": "details 2-3",
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
      {
        "id": 4,
        "img": "4.jpg",
        "name": "NAME 4",
        "selectedImg": "6.jpg",
        "desc": "desc 4",
        "details": "details 4"
      },
      {
        "id": 5,
        "img": "5.jpg",
        "name": "NAME 5",
        "desc": "desc 5",
        "details": "details 5"
      },
      {
        "id": 6,
        "img": "6.jpg",
        "name": "NAME 6",
        "desc": "desc 6",
        "details": "details 6"
      },
      {
        "id": 7,
        "img": "7.jpg",
        "name": "NAME 7",
        "desc": "desc 7",
        "details": "details 7"
      },
      {
        "id": 8,
        "img": "8.jpg",
        "name": "NAME 8",
        "desc": "desc 8",
        "details": "details 8"
      },
      {
        "id": 9,
        "img": "9.jpg",
        "name": "NAME 9",
        "desc": "desc 9",
        "details": "details 9"
      },
      {
        "id": 10,
        "img": "10.jpg",
        "name": "NAME 10",
        "desc": "desc 10",
        "details": "details 10"
      },
      {
        "id": 11,
        "img": "11.jpg",
        "name": "NAME 11",
        "desc": "desc 11",
        "details": "details 11"
      },
      {
        "id": 12,
        "img": "12.jpg",
        "name": "NAME 12",
        "desc": "desc 12",
        "details": "details 12"
      },
      {
        "items": [
          {
            "id": 13,
            "img": "4.jpg",
            "name": "NAME 13-1",
            "desc": "desc 13-1",
            "sizeRatio": {
              "width": 0.5,
              "height": 0.5
            },
            "details": "details 13-1",
            "positionRatio": {
              "x": 0,
              "y": 0
            }
          },
          {
            "id": 14,
            "img": "10.jpg",
            "name": "NAME 13-2",
            "desc": "desc 13-2",
            "details": "details 13-2",
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
            "img": "2-2.jpg",
            "name": "NAME 13-3",
            "desc": "desc 13-3",
            "details": "details 13-3",
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
      {
        "id": 16,
        "img": "13.jpg",
        "name": "NAME 16",
        "desc": "desc 16",
        "details": "details 16"
      },
      {
        "id": 17,
        "img": "14.jpg",
        "name": "NAME 17",
        "desc": "desc 17",
        "details": "details 17"
      },
      {
        "id": 18,
        "img": "15.jpg",
        "name": "NAME 18",
        "desc": "desc 18",
        "details": "details 18"
      }
    ],
    "carouselItemInfo": {
      "nameColor": "white",
      "descColor": "lightgray",
      "minFontSize": 15,
      "maxFontSize": 40,
      "nameFontFamily": "",
      "descFontFamily": "",
      "itemOutlineWidth": 3
    },
    "carouselChildItemInfo": {
      "nameColor": "white",
      "descColor": "lightgray",
      "minFontSize": 10,
      "maxFontSize": 30,
      "nameFontFamily": "",
      "descFontFamily": "",
      "itemOutlineWidth": 1
    },
    "selectedItemInfo": {
      "padding": 20,
      "backdropColorRGBA": "rgba(90, 150, 150, 0.7)",
      "backgroundColorRGBA": "rgba(190, 0, 0, 0.5)",
      "selectedItemOutlineColor": "white",
      "selectedItemOutlineWidth": 3,
      "nameColor": "yellow",
      "descColor": "white",
      "detailsColor": "white",
      "minFontSize": 10,
      "maxFontSize": 30,
      "nameFontFamily": "",
      "descFontFamily": "",
      "detailsFontFamily": "",
      "boxShadow": "6px 6px 5px 0px rgba(31,28,31,1)",
      "closeButtonColor": "white",
      "closeButtonTextShadow": "1px 2px 3px #000000"
    }
  };
  demo1Desc = '{\r\n  "baseImagePath": "./assets/img/carousel/",\r\n  "looping": true,\r\n  "maxWidth": 900,\r\n  "ratioHW": 0.75,\r\n  "itemsInOneScreen": 2,\r\n  "itemsInOneScreenGroups": [\r\n    {\r\n      "screenWidth": 600,\r\n      "itemsInOneScreen": 2\r\n    },\r\n    {\r\n      "screenWidth": 900,\r\n      "itemsInOneScreen": 3\r\n    },\r\n    {\r\n      "screenWidth": 1200,\r\n      "itemsInOneScreen": 4\r\n    }\r\n  ],\r\n  "animationDuration": 2,\r\n  "itemOutlineColor": "white",\r\n  "autoPlay": {\r\n    "enable": true,\r\n    "delay": 3000,\r\n    "duration": 2500\r\n  },\r\n  "trnsactionEffect": "ease-in-out",\r\n  "items": [\r\n    {\r\n      "id": 1,\r\n      "img": "1.jpg",\r\n      "selectedImg": "15.jpg",\r\n      "name": "NAME 1",\r\n      "desc": "desc 1",\r\n      "details": "details 1"\r\n    },\r\n    {\r\n      "items": [\r\n        {\r\n          "id": 2,\r\n          "img": "2-1.jpg",\r\n          "selectedImg": "4.jpg",\r\n          "name": "NAME 2-1",\r\n          "desc": "desc 2-1",\r\n          "details": "details 2-1",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 1\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 3,\r\n          "img": "4.jpg",\r\n          "name": "NAME 2-2",\r\n          "desc": "desc 2-2",\r\n          "details": "details 2-2",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 17,\r\n          "img": "10.jpg",\r\n          "name": "NAME 2-3",\r\n          "desc": "desc 2-3",\r\n          "details": "details 2-3",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0.5\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "id": 4,\r\n      "img": "4.jpg",\r\n      "name": "NAME 4",\r\n      "selectedImg": "6.jpg",\r\n      "desc": "desc 4",\r\n      "details": "details 4"\r\n    },\r\n    {\r\n      "id": 5,\r\n      "img": "5.jpg",\r\n      "name": "NAME 5",\r\n      "desc": "desc 5",\r\n      "details": "details 5"\r\n    },\r\n    {\r\n      "id": 6,\r\n      "img": "6.jpg",\r\n      "name": "NAME 6",\r\n      "desc": "desc 6",\r\n      "details": "details 6"\r\n    },\r\n    {\r\n      "id": 7,\r\n      "img": "7.jpg",\r\n      "name": "NAME 7",\r\n      "desc": "desc 7",\r\n      "details": "details 7"\r\n    },\r\n    {\r\n      "id": 8,\r\n      "img": "8.jpg",\r\n      "name": "NAME 8",\r\n      "desc": "desc 8",\r\n      "details": "details 8"\r\n    },\r\n    {\r\n      "id": 9,\r\n      "img": "9.jpg",\r\n      "name": "NAME 9",\r\n      "desc": "desc 9",\r\n      "details": "details 9"\r\n    },\r\n    {\r\n      "id": 10,\r\n      "img": "10.jpg",\r\n      "name": "NAME 10",\r\n      "desc": "desc 10",\r\n      "details": "details 10"\r\n    },\r\n    {\r\n      "id": 11,\r\n      "img": "11.jpg",\r\n      "name": "NAME 11",\r\n      "desc": "desc 11",\r\n      "details": "details 11"\r\n    },\r\n    {\r\n      "id": 12,\r\n      "img": "12.jpg",\r\n      "name": "NAME 12",\r\n      "desc": "desc 12",\r\n      "details": "details 12"\r\n    },\r\n    {\r\n      "items": [\r\n        {\r\n          "id": 13,\r\n          "img": "4.jpg",\r\n          "name": "NAME 13-1",\r\n          "desc": "desc 13-1",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "details": "details 13-1",\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0\r\n          }\r\n        },\r\n        {\r\n          "id": 14,\r\n          "img": "10.jpg",\r\n          "name": "NAME 13-2",\r\n          "desc": "desc 13-2",\r\n          "details": "details 13-2",\r\n          "sizeRatio": {\r\n            "width": 0.5,\r\n            "height": 0.5\r\n          },\r\n          "positionRatio": {\r\n            "x": 0,\r\n            "y": 0.5\r\n          }\r\n        },\r\n        {\r\n          "id": 15,\r\n          "img": "2-2.jpg",\r\n          "name": "NAME 13-3",\r\n          "desc": "desc 13-3",\r\n          "details": "details 13-3",\r\n          "sizeRatio": {\r\n            "width": 1,\r\n            "height": 1\r\n          },\r\n          "positionRatio": {\r\n            "x": 0.5,\r\n            "y": 0\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      "id": 16,\r\n      "img": "13.jpg",\r\n      "name": "NAME 16",\r\n      "desc": "desc 16",\r\n      "details": "details 16"\r\n    },\r\n    {\r\n      "id": 17,\r\n      "img": "14.jpg",\r\n      "name": "NAME 17",\r\n      "desc": "desc 17",\r\n      "details": "details 17"\r\n    },\r\n    {\r\n      "id": 18,\r\n      "img": "15.jpg",\r\n      "name": "NAME 18",\r\n      "desc": "desc 18",\r\n      "details": "details 18"\r\n    }\r\n  ],\r\n  "carouselItemInfo": {\r\n    "nameColor": "white",\r\n    "descColor": "lightgray",\r\n    "minFontSize": 15,\r\n    "maxFontSize": 40,\r\n    "nameFontFamily": "",\r\n    "descFontFamily": "",\r\n    "itemOutlineWidth": 3\r\n  },\r\n  "carouselChildItemInfo": {\r\n    "nameColor": "white",\r\n    "descColor": "lightgray",\r\n    "minFontSize": 10,\r\n    "maxFontSize": 30,\r\n    "nameFontFamily": "",\r\n    "descFontFamily": "",\r\n    "itemOutlineWidth": 1\r\n  },\r\n  "selectedItemInfo": {\r\n    "padding": 20,\r\n    "backdropColorRGBA": "rgba(90, 150, 150, 0.7)",\r\n    "backgroundColorRGBA": "rgba(190, 0, 0, 0.5)",\r\n    "selectedItemOutlineColor": "white",\r\n    "selectedItemOutlineWidth": 3,\r\n    "nameColor": "yellow",\r\n    "descColor": "white",\r\n    "detailsColor": "white",\r\n    "minFontSize": 10,\r\n    "maxFontSize": 30,\r\n    "nameFontFamily": "",\r\n    "descFontFamily": "",\r\n    "detailsFontFamily": "",\r\n    "boxShadow": "6px 6px 5px 0px rgba(31,28,31,1)",\r\n    "closeButtonColor": "white",\r\n    "closeButtonTextShadow": "1px 2px 3px #000000"\r\n  }\r\n}\r\n';
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
