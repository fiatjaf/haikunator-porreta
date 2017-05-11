(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.haikunate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});