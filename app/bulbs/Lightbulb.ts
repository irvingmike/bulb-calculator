import { Component } from '@angular/core';


export class Lightbulb {

  type: string;
  conversionRate: number;
  imageUrl: string;

  constructor(type: string, conversionRate: number, imageUrl: string) {
    this.type = type;
    this.conversionRate = conversionRate;
    this.imageUrl = imageUrl;
  }

}