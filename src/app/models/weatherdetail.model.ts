import { listModel } from "./list.model";

export class WeatherDetailModel<U> {
    public city: U;
    public cnt: number;
    public cod: string;
    public list: listModel<any>[];
    public message:number;
  }
