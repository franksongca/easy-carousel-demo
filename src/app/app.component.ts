import { Component } from '@angular/core';
import { Json2html } from './json2html';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-carousel Demo';

  // TODO: need to convert JSON to html: https://www.w3schools.com/js/js_json_html.asp
  demo1CarouselInfo = {
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
    "carouselItemColor": {
      "name": "white",
      "desc": "gray"
    }
  };
  demo1Desc = JSON.stringify(this.demo1CarouselInfo, null, 2);

  demo2CarouselInfo = {
    "maxWidth": 930,
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
    "carouselItemColor": {
      "name": "white",
      "desc": "white"
    }
  };
  demo2Desc = JSON.stringify(this.demo2CarouselInfo);


  onCarouselDemo1Selected(carouselItemId) {
    alert('Demo 1 carousel item ' + carouselItemId + ' selected!');
  }

  onCarouse2Demo1Selected(carouselItemId) {
    alert('Demo 2 carousel item ' + carouselItemId + ' selected!');
  }

  constructor(private json2html: Json2html) {

  }

}
