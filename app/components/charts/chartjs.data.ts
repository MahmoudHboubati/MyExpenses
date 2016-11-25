export interface IChartData {
  datasets: ChartDataSet[];
  labels: any[];
}

// export class ChartData implements IChartData {
//   constructor(public data: any[], public labels: any[]) {
//   }
// }

export class MultipleDataSetsChartData {
  constructor(public dataSets: ChartDataSet, public labels: any[]) {
  }
}

export abstract class ChartDataBasic {
  type: string;
  data: ChartData;
}

export class LineChart extends ChartDataBasic {
}

export class ChartData implements IChartData {
  constructor(public datasets: ChartDataSet[], public labels: any[]) {
  }
}

export class ChartDataSet {
  data: ChartPoint[];
}

export class ChartPoint {
  x: any;
  y: any;
}
