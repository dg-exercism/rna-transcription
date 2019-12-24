//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (strand) => {
  return strand.split('').map(nucleotide => {
    return nucleotide === 'G' ?
      'C' :
      nucleotide === 'C' ?
      'G' :
      nucleotide === 'T' ?
      'A' :
      'U'
  }).join('')
};
