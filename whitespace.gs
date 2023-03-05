function whitespace(transtextEN_cc,Wspace) {
  var transtextEN_blank;

  if(Wspace == true){
    //remove white space
    transtextEN_blank = transtextEN_cc.replace(" ","");
  }else{
    transtextEN_blank = transtextEN_cc;
  }

  return transtextEN_blank;
}
