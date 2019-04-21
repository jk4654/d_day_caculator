var now = new Date();
var then = new Date("april 19,2019 00:00:00");//real : 20
var gap = now.getTime() - then.getTime();
gap = Math.floor(gap / (1000 * 60 * 60 * 24));
document.write(  gap + '일'.big()+'<br><br>'  );
