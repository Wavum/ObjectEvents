#Do not use it! Complete rewrite is coming!#
Because every object should have the ability to fire an event.

#Usage#
##Typescript##

```typescript
class Car
{
    public start(): void
    {
        this.fireEvent("onStart");
    }
}

let car: Car = new Car();

car.listenToEvent("onStart", carStarted);
car.start();

function carStarted(target: Object): void
{
    console.log("Car started");
    console.log(target.constructor.name); //Car
}
```

##Javascript##

```javascript
var Car = function()
{
    this.start = function()
    {
        this.fireEvent("onStart");
    };
};

var car = new Car();

car.listenToEvent("onStart", carStarted);
car.start();

function carStarted(target)
{
    console.log("Car started");
    console.log(target.constructor.name); //Car
}
```
