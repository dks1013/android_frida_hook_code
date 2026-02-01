// 문자열 제외 시키기

Interceptor.attach(Module.findExportByName(null, 'exit'), {
   onEnter: function(args) {
   console.log('[*] ============= '+args[0]);
   //args[0].toInt32()

	var library_path = Memory.readCString(args[0]);
    
    if(library_path.indexOf("frida") !== -1 || library_path.indexOf("sbin") !== -1 
	|| library_path.indexOf("magisk") !== -1 || library_path.indexOf("rooting") !== -1
	|| library_path.indexOf("xbin") !== -1 || library_path.indexOf("nosu") !== -1 
	|| library_path.indexOf("RootTools") !== -1 || library_path.indexOf("su") !== -1
	|| library_path.indexOf("USB") !== -1 ) {
        //console.log("[F] Fopen library : " + library_path);
        Memory.protect(args[0], 16, 'rwx');
        Memory.writeUtf8String(args[0], "ffffff");
		console.log(library_path);
		//console.log("[S] frida bypass ");
    }
      
   },
    onLeave: function(retval){
   }

})
