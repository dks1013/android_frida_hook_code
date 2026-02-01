//kill 변조
Interceptor.attach(Module.findExportByName(null, 'kill'), {
   onEnter: function(args) {
	console.log("kill args replace");
	args[0] = ptr(0x1234);
	console.log("\x1b[32m\nBackyutrace:\n" + Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n"));
   },	//벡트레스 출력
    onLeave: function(retval){
   }
});
