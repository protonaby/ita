function decode(str) {
  str = str.replace(/\.$/, ""); //remove trailing dot
  let sentences = str.split(/[.?!]+/);
  let firstSentence = sentences[0].replace(/,|'|"/g, '').trim();
  let wordsOfFirstSentence = firstSentence.split(' ');
  let numsOfLettersInFirstSentence = wordsOfFirstSentence.map(e => e.length);
  let result = [];
  for (let i = 1; i <= wordsOfFirstSentence.length; i += 1) {
    let words = sentences[i].replace(/,|"/g, '').trim().split(' ');
    result.push(words[numsOfLettersInFirstSentence[i - 1] - 1]);
  }
  let strResult = result.join(' ');
  strResult = strResult.charAt(0).toUpperCase() + strResult.slice(1) + '.';

  if (sentences.length > wordsOfFirstSentence.length + 1) {
    let remainingSentences = sentences.slice(wordsOfFirstSentence.length + 1);
    strResult = strResult + ' ' + decode(remainingSentences.join('.'));
  }
  return strResult;

}

//////////Testing///////////////////////////////////////////////////////////////

let s = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'

console.log('The mission has been done.' == decode(s));

s = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'

console.log('The mission has been done. The mission has been done.' == decode(s));
