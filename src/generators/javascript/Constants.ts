//Based on https://www.w3schools.com/js/js_reserved.asp
export const RESERVED_JAVASCRIPT_KEYWORDS = [
  //Standard reserved keywords
  'abstract',
  'arguments',
  'await',
  'boolean',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'double',
  'else',
  'enum',
  'eval',
  'export',
  'extends',
  'false',
  'final',
  'finally',
  'float',
  'for',
  'function',
  'goto',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'int',
  'interface',
  'let',
  'long',
  'native',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'short',
  'static',
  'super',
  'switch',
  'synchronized',
  'this',
  'throw',
  'throws',
  'transient',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'volatile',
  'while',
  'with',
  'yield',
  // Reserved for > ECMAScript 5/6
  'abstract', 
  'boolean', 
  'byte', 
  'char',
  'double', 
  'final', 
  'float', 
  'goto',
  'int', 
  'long', 
  'native', 
  'short',
  'synchronized', 
  'throws', 
  'transient', 
  'volatile',
  //Reserved built-in objects, properties and methods
  'hasOwnProperty', 
  'Infinity', 
  'isFinite', 
  'isNaN',
  'isPrototypeOf', 
  'length', 
  'Math', 
  'NaN',
  'name', 
  'Number', 
  'Object', 
  'prototype',
  'String', 
  'toString', 
  'undefined', 
  'valueOf',
  //Java reserved words
  'getClass', 
  'java', 
  'JavaArray', 
  'javaClass',
  'JavaObject', 
  'JavaPackage',
  //Other reserved words
  'alert', 
  'all', 
  'anchor', 
  'anchors',
  'area', 
  'assign', 
  'blur', 
  'button',
  'checkbox', 
  'clearInterval', 
  'clearTimeout', 
  'clientInformation',
  'close', 
  'closed', 
  'confirm', 
  'constructor',
  'crypto', 
  'decodeURI', 
  'decodeURIComponent', 
  'defaultStatus',
  'document', 
  'element', 
  'elements', 
  'embed',
  'embeds', 
  'encodeURI', 
  'encodeURIComponent', 
  'escape',
  'event', 
  'fileUpload', 
  'focus', 
  'form',
  'forms', 
  'frame', 
  'innerHeight', 
  'innerWidth',
  'layer', 
  'layers', 
  'link', 
  'location',
  'mimeTypes', 
  'navigate', 
  'navigator', 
  'frames',
  'frameRate', 
  'hidden', 
  'history', 
  'image',
  'images', 
  'offscreenBuffering', 
  'open', 
  'opener',
  'option', 
  'outerHeight', 
  'outerWidth', 
  'packages',
  'pageXOffset', 
  'pageYOffset', 
  'parent', 
  'parseFloat',
  'parseInt', 
  'password', 
  'pkcs11', 
  'plugin',
  'prompt', 
  'propertyIsEnum', 
  'radio', 
  'reset',
  'screenX', 
  'screenY', 
  'scroll', 
  'secure',
  'select', 
  'self', 
  'setInterval', 
  'setTimeout',
  'status', 
  'submit', 
  'taint', 
  'text',
  'textarea', 
  'top', 
  'unescape', 
  'untaint',
  'window'
];

export function isReservedJavaScriptKeyword(word: string): boolean {
  return RESERVED_JAVASCRIPT_KEYWORDS.includes(word);
}
