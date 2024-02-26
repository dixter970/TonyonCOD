function textToMorse() {
    const text = document.getElementById('inputText').value.toLowerCase();
    const morseCode = {
      'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
      'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
      'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
      'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
      '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
    };
    let morseText = '';
    for (let i = 0; i < text.length; i++) {
      morseText += morseCode[text[i]] ? morseCode[text[i]] + ' ' : text[i];
    }
    document.getElementById('outputText').value = morseText.trim();
   }
   function morseToText() {
    const morse = document.getElementById('inputText').value;
    const morseCode = {
      '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h',
      '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p',
      '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
      '-.--': 'y', '--..': 'z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5',
      '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0', '/': ' '
    };
    const words = morse.split(' ');
    let text = '';
    for (let i = 0; i < words.length; i++) {
      text += morseCode[words[i]] ? morseCode[words[i]] : words[i];
    }
    document.getElementById('outputText').value = text;
   }