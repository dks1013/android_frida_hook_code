const System = Java.use('java.lang.System');
const Runtime = Java.use('java.lang.Runtime');
const SystemLoad_2 = System.loadLibrary.overload('java.lang.String');
const VMStack = Java.use('dalvik.system.VMStack');

System.loadLibrary.implementation = function(library) {
	try { 
		Runtime.getRuntime().loadLibrary0(VMStack.getCallingClassLoader(), library);
		// var base = Module.findBaseAddress("libbugsnag-ndk.sod");
		var base = Module.findBaseAddress("libbugsnag-root-detection.so");
		console.log("Base : "+base);
			Interceptor.attach(base.add(0x800), { // hooking bypass
				onEnter: function (args) {
						
				
				this.context.x2= 0x01;
				console.log("[Before  x0]" + this.context.x2);
				console.log("[After  x0]" + this.context.x0);

		}});  
	} catch(ex) {
		// console.log(ex);
	}
}; 
