function fixText(text1) {
    nstekst = text1.replace(/\s/g, '');
    tekst = nstekst[0].toUpperCase() + nstekst.substring(1);
    return tekst;
}