var QuickEvent = (function ()
{
    function QuickEvent()
    {
        this.eventListeners = new Array();
    }



    QuickEvent.prototype.listen = function (callback)
    {
        this.eventListeners.push(callback);
    };

    QuickEvent.prototype.unlisten = function (callback)
    {
        var index = this.eventListeners.indexOf(callback);

        this.eventListeners.splice(index, 1);
    };
    
    QuickEvent.prototype.isListen = function (callback)
    {
        var index = this.eventListeners.indexOf(callback);

        return index !== -1;
    };

    QuickEvent.prototype.fire = function (eventArgs)
    {
        if (eventArgs === void 0) 
            eventArgs = {};

        for (var i = 0; i < this.eventListeners.length; i++)
        {
            this.eventListeners[i](eventArgs);
        }
    };

    return QuickEvent;
}());