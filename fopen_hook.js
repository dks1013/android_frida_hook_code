// 내장함수 확인 -> 출력되는 걸로 확인
Interceptor.attach(Module.findExportByName(null, 'fopen'), {
   onEnter: function(args) {
   console.log(Memory.readCString(args[0]));
      
   },
    onLeave: function(retval){
   }

})
