"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log4jsconfig = void 0;
var log4jsconfig = (function () {
    function log4jsconfig() {
    }
    log4jsconfig.debug = function (arg0) {
        throw new Error("Method not implemented.");
    };
    log4jsconfig.Log = function () {
        var log4js = require('log4js');
        log4js.configure('./config/log4js.json');
        var log = log4js.getLogger("default");
        return log;
    };
    return log4jsconfig;
}());
exports.log4jsconfig = log4jsconfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2xvZzRqc2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtJQUFBO0lBWUEsQ0FBQztJQVhVLGtCQUFLLEdBQVosVUFBYSxJQUFZO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sZ0JBQUcsR0FBVjtRQUNJLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksb0NBQVkifQ==