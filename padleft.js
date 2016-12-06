if (!String.prototype.padLeft) {
  String.prototype.padLeft = function (num, ch) {
    var re = new RegExp(`.{${num}}$`), pad = '';
    do {
      pad += ch;
    } while(pad.length < num);
    
    return re.exec(pad + this)[0];
  };
}
