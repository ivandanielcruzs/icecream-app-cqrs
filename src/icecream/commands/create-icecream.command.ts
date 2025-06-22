export class CreateIceCreamCommand {
  constructor(
    public flavor: string,
    public price: number,
  ) {}
}
