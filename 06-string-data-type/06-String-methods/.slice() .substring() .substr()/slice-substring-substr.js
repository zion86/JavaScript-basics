'use string';

{ // cut subString from String
  const text = 'Hello world';                     // 'Hello world'

  // string.slice(idxStart, idxEnd /not include last character/)
  const wordFragment1 = text.slice(6, 11);        // 'word'

  // string.substring(idxStart, idxEnd /not include last character/);
  const wordFragment2 = text.substring(6, 11);    // 'world'

  // string.substr(idx, charactersLength);
  const wordFragment3 = text.substr(6, 5);        // 'word'
}