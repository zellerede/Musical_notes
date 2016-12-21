# Note calculator for major/minor scalas.

German style musical notes calculator, javascript console program (so far).

Works with classic major/minor scalas, up to 6 sharps or flats as key signature.

Usage examples:

    s = new Scala();
    console.log(s.do, s.re, s.mi, s.fa, s.so, s.la, s.ti, s.do);
    s.do = 'Eb'; // setting Eb major
    console.log(s.Notes);
    console.log(s.keySignature);
