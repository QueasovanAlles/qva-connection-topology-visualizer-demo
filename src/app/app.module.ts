import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoAudioDeviceComponent } from './demo-audio-device/demo-audio-device.component';

import { QvaConnectionTopologyVisualizerModule } from 'qva-connection-topology-visualizer';

import { FreshStartModule } from 'qva-fresh-start';

@NgModule({
  declarations: [
    AppComponent,
    DemoAudioDeviceComponent
  ],
  imports: [
    BrowserModule,
	FreshStartModule,
    QvaConnectionTopologyVisualizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
