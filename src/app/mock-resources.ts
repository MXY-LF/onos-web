import {Resource} from './resource';
// usfnet
export const RESOURCES: Resource[] = [
  { sourceNode: 0, destinationNode: 1, wavelengthReserved: 100, keyReserved: 50}, // 1
  { sourceNode: 0, destinationNode: 2, wavelengthReserved: 100, keyReserved: 50}, // 2
  { sourceNode: 0, destinationNode: 7, wavelengthReserved: 100, keyReserved: 50}, // 3
  { sourceNode: 1, destinationNode: 2, wavelengthReserved: 100, keyReserved: 50}, // 4
  { sourceNode: 1, destinationNode: 3, wavelengthReserved: 100, keyReserved: 50}, // 5
  { sourceNode: 2, destinationNode: 5, wavelengthReserved: 100, keyReserved: 50}, // 6
  { sourceNode: 3, destinationNode: 4, wavelengthReserved: 100, keyReserved: 50}, // 7
  { sourceNode: 3, destinationNode: 10, wavelengthReserved: 100, keyReserved: 50}, // 8
  { sourceNode: 4, destinationNode: 5, wavelengthReserved: 100, keyReserved: 50}, // 9
  { sourceNode: 4, destinationNode: 6, wavelengthReserved: 100, keyReserved: 50}, // 10
  { sourceNode: 5, destinationNode: 9, wavelengthReserved: 100, keyReserved: 50}, // 11
  { sourceNode: 5, destinationNode: 12, wavelengthReserved: 100, keyReserved: 50}, // 12
  { sourceNode: 6, destinationNode: 7, wavelengthReserved: 100, keyReserved: 50}, // 13
  { sourceNode: 7, destinationNode: 8, wavelengthReserved: 100, keyReserved: 50}, // 14
  { sourceNode: 8, destinationNode: 9, wavelengthReserved: 100, keyReserved: 50}, // 15
  { sourceNode: 8, destinationNode: 11, wavelengthReserved: 100, keyReserved: 50}, // 16
  { sourceNode: 8, destinationNode: 13, wavelengthReserved: 100, keyReserved: 50}, // 17
  { sourceNode: 10, destinationNode: 11, wavelengthReserved: 100, keyReserved: 50}, // 18
  { sourceNode: 10, destinationNode: 13, wavelengthReserved: 100, keyReserved: 50}, // 19
  { sourceNode: 11, destinationNode: 13, wavelengthReserved: 100, keyReserved: 50}, // 20
  { sourceNode: 12, destinationNode: 13, wavelengthReserved: 100, keyReserved: 50}, // 21
];
