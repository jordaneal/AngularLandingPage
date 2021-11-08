import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  active = '0';
  data: any = [
    { 
      name: "Völkl Revolt", 
      price: 599.99, 
      description: "A new addition to the Völkl lineup this year, the Völkl " +
      "Revolt 104 Skis slide in between the powder slashing Revolt 121 and the" +
      "park jibbing Revolt 95. With a sturdy freestyle flex and a versatile 104 " +
      "waist, this mid-sized Revolt fills the gap in the lineup and gives " +
      "dynamic skiers a new weapon to play around the whole mountain on. It's " +
      "got the park ski pop to boost backcountry booters and send it deep off " +
      "cat track hits, but the trusted Völkl stability and sturdy platform to " +
      "stomp landings and rip through spicier terrain in search of features.",
      image: "./assets/images/volkl.jpg"
    },
    { 
      name: "Lib Tech Wunderstick", 
      price: 649.99, 
      description: "The Lib Tech Wunderstick 100 Skis are Mervin's answer to " +
      "the resort ripping daily driver quandary. This directional ski is a " +
      "wunderfully versatile performer in anything from a foot of chunder to " +
      "bulletproof East Coast hardpack, in a width and at a weight that makes it " +
      "a great backcountry performer as well.",
      image: "./assets/images/libtech.jpg"
    },
    { 
      name: "Atomic Maverick", 
      price: 749.99, 
      description: "If you're seeking a no speed limit, no holds barred daily " +
      "driver that you can grab without wasting time to pore over the forecast, " +
      "check out the Atomic Maverick 100 TI Skis. Arriving with significant " +
      "design input from across the ski industry spectrum, they're built with " +
      "Atomic's latest technological advancements, including the supremely " +
      "balanced OMatic core and an all-new Flow Profile built for precise " +
      "control in a wide array of conditions. Whether you're jamming groomer " +
      "runs, powder runs, tree runs, or bump runs - seasoned pro or regular " +
      "Joe - these things are the real deal!",
      image: "./assets/images/atomic.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
