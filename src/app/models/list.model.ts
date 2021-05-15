import { mainModel } from "./main.model";

export class listModel<T> {
    public clouds: T;
    public dt: number;
    public dt_txt: string;
    public main: mainModel;
    public pop:number;
    public rain:T;
    public sys:T;
    public visibility:[];
    public wind:T;
  }