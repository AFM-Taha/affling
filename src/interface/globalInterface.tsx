export interface IOption {
  labelName: string;
  id: string;
  placeholder?:string;
  type: string;
  name: string;
}

export interface IInputTextLabels {
  labelName: string;
  id: string;
  placeholder: string;
  type: string;
  name: string;
  options?: IOption[];
}