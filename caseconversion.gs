//Case conversion
function caseconversion(transtextEN,Cconversion) {

  //1=最初の文字だけ大文字 2=全部小文字
  switch(Cconversion){
    case 1:
     transtextEN_cc = transtextEN.slice(0,1).toUpperCase() + transtextEN.slice(1) ;
     break;
    case 2:
     transtextEN_cc = transtextEN.toLowerCase();
     break;
     default:
     transtextEN_cc = transtextEN.toLowerCase();
  }
  return transtextEN_cc;
}
