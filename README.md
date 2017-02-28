Because every object should have the ability to fire an event.

#Usage#

```html
class Car
{
    public static start(): void
    {
        this.fireEvent("onStart");
    }
}

Car.listenToEvent("onStart", carStarted);
Car.start();

function carStarted(target: Object): void
{
    console.log("Car started");
    console.log(target.constructor.name); //Car
}
```
