import 'chart.js';
declare let Chart;
import {Directive, ElementRef, Renderer, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IChartData} from './chartjs.data';

@Directive({
  selector: '[chart]'
})
export class ChartDirective {

  @Input()
  chData: Observable<IChartData>;

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
    var myArray = this.chData.subscribe((array) => {
      var data = this.buildChartData(array);
      this.renderTheChart(data);
    });
  }

  buildChartData(array) {
    return {
      labels: array.labels,
      datasets: [{
        label: '# of Expenses',
        data: array.data,
        borderWidth: 1
      }]
    };
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
