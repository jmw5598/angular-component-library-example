import { ToastType } from './toast-type.enum';

export class ToastMessage {
  public id: number;
  constructor(
    public message: string,
    public type: ToastType,
    public duration: number = 2000
  ) {
    this.id = new Date().getTime();
  }
}