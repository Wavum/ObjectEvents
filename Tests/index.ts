class Car
{
    public onStart: QuickEvent = new QuickEvent();



    public start(): void
    {
        this.onStart.fire(this);
    }
}

let car: Car = new Car();

car.onStart.listen(carStarted);
car.start();

function carStarted(args: Object): void
{
    (<Car>args).onStart.unlisten(carStarted);

    console.log("args: " + args.constructor); //Car
}