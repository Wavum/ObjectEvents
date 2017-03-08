Because every object should have the ability to fire an event.

#Usage#
##Typescript##

```typescript
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
```

##Javascript##

```javascript
var Car = (function ()
{
    function Car()
    {
        this.onStart = new QuickEvent();
    }



    Car.prototype.start = function ()
    {
        this.onStart.fire(this);
    };

    return Car;
}());

var car = new Car();

car.onStart.listen(carStarted);
car.start();

function carStarted(args)
{
    args.onStart.unlisten(carStarted);

    console.log("args: " + args.constructor); //Car
}
```