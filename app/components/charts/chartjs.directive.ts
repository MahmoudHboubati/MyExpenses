import * as Chart from 'chart.js';
import {Directive, ElementRef, Renderer, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IChartData, ChartDataBasic} from './chartjs.data';
import {AfterViewInit} from '@angular/core';

@Directive({
  selector: '[chart]'
})
export class ChartDirective implements AfterViewInit {

  @Input()
  cd: Observable<ChartDataBasic>;

  lineChart: any;
  options: any = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: true } }]
    }
  };

  el: ElementRef;
  type: string = 'line';

  constructor(el: ElementRef, renderer: Renderer) {
    this.el = el;
  }

  ngAfterViewInit() {
    this.cd.subscribe((cdData) => {
      if(this.lineChart){
        this.lineChart.destroy();
      }
      this.renderTheChart(cdData.data);
    });
  }

  renderTheChart(data) {
    var ctx: any = this.el.nativeElement.getContext("2d");
    this.lineChart = new Chart(ctx, {
      type: this.type,
      data: data,
      options: this.options
    });
  }
}
