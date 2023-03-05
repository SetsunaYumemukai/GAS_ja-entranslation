function translateJPtoEN(Japanese,Cconversion,Wspace) {
  //Convert from Japanese to English
  const transtextEN = translate(Japanese);

  //Case conversion
  const transtextEN_cc = caseconversion(transtextEN,Cconversion);

  //Choose to remove whitespace or not
  const transtextEN_cc_ws = whitespace(transtextEN_cc,Wspace);

  return transtextEN_cc_ws;
}
