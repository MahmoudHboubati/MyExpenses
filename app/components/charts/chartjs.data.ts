export interface IChartData {
  data: any[];
  labels: any[];
}

export class ChartData implements IChartData {
  constructor(public data: any[], public labels: any[]) {
  }
}

export class MultipleDataSetsChartData {
  constructor(public dataSets: ChartDataSet, public labels: any[]) {
  }
}

export abstract class ChartDataBasic {
  type: string;
  data: ChartData1;
}

export class LineChart extends ChartDataBasic {
}

export class ChartData1 {
  labels: string[];
  datasets: ChartDataSet[];
}
export class ChartDataSet {
}
