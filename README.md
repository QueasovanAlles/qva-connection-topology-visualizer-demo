# qva-connection-topology-visualizer
Dynamic visualization module for audio routing and connection management. Create interactive patching interfaces with draggable devices, connection points, and animated cables.

![Image description](/docs/qva-connection-topology-visualizer.png)

## Features
-Drag-and-drop vritual audio cables into virtual devices
-Visualisation with animated cable connections
-Input/Output jack management
-Available for implementing according to own needs


## Installation

### Install via npm

npm install qva-connection-topology-visualizer

```ts
// In your module
import { QvaConnectionTopologyVisualizerModule } from 'qva-connection-topology-visualizer';

@NgModule({
  imports: [
    QvaConnectionTopologyVisualizerModule
  ]
})
export class AppModule { }

// In your component template
<qva-audio-jack-rack [config]="rackConfig">
  <qva-audio-jack-hole type="input" label="Audio In"></qva-audio-jack-hole>
  <qva-audio-jack-hole type="output" label="Audio Out"></qva-audio-jack-hole>
</qva-audio-jack-rack>
```


## Usage
This just demonstrates usage of the 

[Watch Demo on YouTube](https://www.youtube.com/watch?v=your-video-id)  -- TODO

