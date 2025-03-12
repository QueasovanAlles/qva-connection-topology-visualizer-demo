import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { AudioDevice, audioDevices } from '../audio-devices';
import { AudioJackHoleComponent, InOut } from 'qva-connection-topology-visualizer';

@Component({
  selector: 'app-demo-audio-device',
  templateUrl: './demo-audio-device.component.html',
  styleUrls: ['./demo-audio-device.component.scss']
})
export class DemoAudioDeviceComponent {
  @Input() device!: AudioDevice;

  private isDragging = false;
  private currentX = 0;
  private currentY = 0;
  private initialX = 0;
  private initialY = 0;

  InOut = InOut;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.initialX = event.clientX - this.currentX;
    this.initialY = event.clientY - this.currentY;
    event.preventDefault();
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.currentX = event.clientX - this.initialX;
      this.currentY = event.clientY - this.initialY;
      this.el.nativeElement.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;
    }
  }

  // Method to generate array based on outputs count
  getOutputsArray(): number[] {
    if (!this.device || typeof this.device.outputs !== 'number') {
      return [];
    }
    return Array(this.device.outputs).fill(0).map((_, index) => index);
  }

  // Method to generate array based on outputs count
  getInputsArray(): number[] {
    if (!this.device || typeof this.device.inputs !== 'number') {
      return [];
    }
    return Array(this.device.inputs).fill(0).map((_, index) => index);
  }

}
