import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAudioDeviceComponent } from './demo-audio-device.component';

describe('DemoAudioDeviceComponent', () => {
  let component: DemoAudioDeviceComponent;
  let fixture: ComponentFixture<DemoAudioDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoAudioDeviceComponent]
    });
    fixture = TestBed.createComponent(DemoAudioDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
