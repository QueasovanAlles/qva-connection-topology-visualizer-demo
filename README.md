# qva-connection-topology-visualizer
Dynamic visualization module for audio routing and connection management. Create interactive patching interfaces with draggable devices, connection points, and animated cables.

![Image description](/docs/qva-connection-topology-visualizer.png)

## Features
- Drag-and-drop vritual audio cables into virtual devices
- Visualisation with animated cable connections
- Input/Output jack management
- Available for implementing according to own needs


## Installation

### Install lib via npm

npm install qva-connection-topology-visualizer


### Implement it in your code : angular 16.0.3 example

```ts
// In your module
import { QvaConnectionTopologyVisualizerModule } from 'qva-connection-topology-visualizer';

@NgModule({
  imports: [
    QvaConnectionTopologyVisualizerModule
  ]
})
export class AppModule { }

```

This demo contains an Angular 16.0.3 component demonstrating usage

[Watch Demo on YouTube](https://www.youtube.com/watch?v=your-video-id)  -- TODO

