export interface AudioDevice {
  id: number;
  name: string;
  inputs: number;   // Number of input holes
  outputs: number;  // Number of output holes
  width: number;
  height: number;
}

export const audioDevices: AudioDevice[] = [
  { id: 1, name: 'Microphone XLR-1', inputs: 0, outputs: 1, width: 12, height: 15 },
  { id: 2, name: 'Studio Monitor L', inputs: 1, outputs: 0, width: 10, height: 25  },
  { id: 3, name: 'Studio Monitor R', inputs: 1, outputs: 0 , width: 10, height: 25 },
  { id: 4, name: 'Guitar Input', inputs: 0, outputs: 1,  width: 10, height: 30 },
  { id: 5, name: 'Bass Input', inputs: 0, outputs: 1,width: 10, height: 30  },
  { id: 6, name: 'Headphone Out', inputs: 2, outputs: 0, width: 10, height: 15 },
  { id: 7, name: 'Synth Input', inputs: 0, outputs: 2, width: 10, height: 20 },
  { id: 8, name: 'Effects Loop Send', inputs: 0, outputs: 1, width: 10, height: 15 },
  { id: 9, name: 'Effects Loop Return', inputs: 1, outputs: 0 , width: 10, height: 15},
  { id: 10, name: 'Main Mix Out', inputs: 2, outputs: 2, width: 25, height: 25  }
];
