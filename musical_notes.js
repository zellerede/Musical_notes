// musical notes
var USAGE = [ "German style musical notes counter.",
              "Works with classic major/minor scalas, up to 6 sharps or flats as key signature", 
              "--------",
              "Usage examples:", "", 
              "    s = new Scala();", 
              "    console.log(s.do, s.re, s.mi, s.fa, s.so, s.la, s.ti, s.do);",
              "    s.do = 'Eb'; // setting Eb major",
              "    console.log(s.Notes);",
              "    console.log(s.keySignature);" ].join("\n");

var bigSecond = { 'A':'H', 'B':'C', 'H':'C#', 'Cb':'Db', 'C':'D', 
                  'C#':'D#', 'Db':'Eb', 'D':'E', 'D#':'E#',
                  'Eb':'F', 'E':'F#', 'F':'G', 'F#':'G#',
                  'Gb':'Ab', 'G':'A', 'G#':'A#', 'Ab':'B' };

var smallSecond = { 'A':'B', 'A#':'H', 'B':'Cb', 'H':'C', 
                    'C':'Db', 'C#':'D', 'D':'Eb', 'D#':'E', 
                    'E':'F', 'E#':'F#', 
                    'F':'Gb', 'F#':'G', 'G':'Ab', 'G#':'A' };

var SCALA = 'do re mi fa so la ti'.split(' '),
    SCALA_LEN = SCALA.length;    
var DISTANCE = { 'do': bigSecond, 're': bigSecond, 'mi': smallSecond,
                 'fa': bigSecond, 'so': bigSecond, 'la': bigSecond,
                 'ti': smallSecond }

class Scala {
    constructor(start='C', from='do') {
        this.adjust(from, start);
    }

    adjust(from, start) {
        var st = SCALA.indexOf(from);
        if (st<0) return; ///

        this.Notes = [];
        this.Mapping = {};
        var note = start;
        for (var i=st; i<st + SCALA_LEN; i++) {
            var relative = SCALA[i % SCALA_LEN];
            this.Mapping[relative] = note;
            this.Notes.push(note);
            note = DISTANCE[relative][note];
        }
        var all_notes = this.Notes.join('');
        this.keySignature = all_notes.replace(/[^#b]/ig,'').toLowerCase();
    }
}

SCALA.forEach( function(relative) {
    Scala.prototype.__defineSetter__( relative, function(start) {
        this.adjust(relative, start);
    });
    Scala.prototype.__defineGetter__( relative, function() {
        return this.Mapping[relative];
    });
});

console.log( USAGE );
