module.exports = haiku

function haiku () {
  var noun = nouns[parseInt(Math.random() * nouns.length)]
  var adj = adjectives[parseInt(Math.random() * adjectives.length)]

  if (noun.slice(-1)[0] === 'a') {
    // fem.
    if (typeof adj === 'object' && adj[1] === NEUTRAL) {
      return noun + '-' + adj[0]
    } else {
      if (adj.slice(-1)[0] === 'a') {
        // fem.
        return noun + '-' + adj
      } else {
        // masc.
        return noun + '-' + adj.slice(0, -1) + 'a'
      }
    }
  } else {
    // masc.
    if (typeof adj === 'object' && adj[1] === NEUTRAL) {
      return noun + '-' + adj[0]
    } else {
      if (adj.slice(-1)[0] === 'a') {
        // fem.
        return noun + '-' + adj.slice(0, -1) + 'o'
      } else {
        // masc.
        return noun + '-' + adj
      }
    }
  }
}

const NEUTRAL = '~'

var nouns = [
  'alpendre',
  'arapuca',
  'arroto',
  'baderna',
  'bagulho',
  'bagunca',
  'banguela',
  'berimbau',
  'bicudo',
  'bigorna',
  'bochecha',
  'bolinho',
  'bugiganga',
  'cabrito',
  'cacareco',
  'cacilda',
  'cafune',
  'camundongo',
  'cangote',
  'careca',
  'carrapato',
  'cartilha',
  'cascudo',
  'catraca',
  'chinelo',
  'chocalho',
  'chorume',
  'choupana',
  'chupeta',
  'clavicula',
  'conjuge',
  'coruja',
  'cueca',
  'cumbuca',
  'cuscuz',
  'desaforo',
  'drible',
  'empada',
  'enxaqueca',
  'escarceu',
  'esculacho',
  'esofago',
  'fandangos',
  'fanfarra',
  'faniquito',
  'farofa',
  'fronha',
  'gambiarra',
  'goela',
  'groselha',
  'hipotenusa',
  'indumentaria',
  'inhame',
  'jamanta',
  'jararaca',
  'lambisgoia',
  'lambreta',
  'lantejoula',
  'malaco',
  'marmelada',
  'marmota',
  'meleca',
  'mingau',
  'minhoca',
  'motoca',
  'muvuca',
  'ornitorrinco',
  'pamonha',
  'pancreas',
  'pandego',
  'paralelepipedo',
  'paspalho',
  'peido',
  'pelanca',
  'perereca',
  'periquito',
  'peteleco',
  'pinguela',
  'pinico',
  'pipoca',
  'pirilampo',
  'pochete',
  'pororoca',
  'pudim',
  'pum',
  'querela',
  'remela',
  'risoto',
  'rodo',
  'rolha',
  'sabujo',
  'sanfona',
  'sovaco',
  'sunga',
  'tanajura',
  'tanga',
  'trambique',
  'trambolho',
  'treta',
  'tutu',
  'umbigo',
  'vitrola'
]

var adjectives = [
  'amassado',
  'anemica',
  'arretado',
  'artistico',
  'atipico',
  'asmatica',
  ['bacana', NEUTRAL],
  'bendita',
  ['biruta', NEUTRAL],
  'borrachudo',
  'empanzinado',
  'enfadonha',
  'esbugalhado',
  'escangalhado',
  'esdruxulo',
  'especifico',
  'esqueletico',
  'estrambolico',
  'estupido',
  'franzino',
  'fuleiro',
  'hiperbolica',
  'lerdo',
  'lirico',
  ['limitrofe', NEUTRAL],
  'maluco',
  'malvisto',
  'medroso',
  'melequento',
  ['mixuruca', NEUTRAL],
  'multiplo',
  'palida',
  ['periclitante', NEUTRAL],
  'perplexo',
  'pirado',
  ['porreta', NEUTRAL],
  ['sacripanta', NEUTRAL],
  'salafrario',
  'sujismundo',
  ['supimpa', NEUTRAL],
  ['tagarela', NEUTRAL],
  ['xereta', NEUTRAL],
  'xexelento',
  'zarolho'
]
