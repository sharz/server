var bunyan=require('bunyan'),
    defaults={name:'shoppingpad'},
    logger,
    createLogger=function createLogger(options){
        var opts;
        if(logger) {
            return logger
        }
        logger=bunyan.createLogger(defaults)
        return logger
    }
,log =createLogger;
module.exports=new log();