export class UpdateIceCreamCommand {
  constructor(
    public id: number,
    public flavor: string,
    public price: number,
  ) {}
}
