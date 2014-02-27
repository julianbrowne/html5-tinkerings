
var id = null;

log = function(message) { 
    self.postMessage({ log: message });
};

self.onmessage = function(message) { 
    if(message.data.id !== undefined) { 
        id = message.data.id;
    }
    else { 
        log("Worker " + id + ": Received Message: " + JSON.stringify(message.data));
        var delay = parseInt(Math.floor(Math.random() * 10000));
        log("Worker " + id + ": processing will take " + delay + " ms");
        var timer = setTimeout( function() { 
            log("Worker " + id + ": processed message");
            self.postMessage("processed OK");
        },
        delay);
    }
};
