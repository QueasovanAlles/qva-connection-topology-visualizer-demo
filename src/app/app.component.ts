import { Component, OnInit, OnDestroy } from '@angular/core';
import { PositionUpdateService, ConnectionService, InOut } from 'qva-connection-topology-visualizer';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AudioDevice, audioDevices } from './audio-devices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']})
export class AppComponent implements OnInit, OnDestroy {

    private eventSubscriptions: Subscription[] = [];
    title = 'QvA Connection Topology Visualizer Demo';
    InOut = InOut; // Make enum available in template

    cables: any[] = [];
    audioDevices: AudioDevice[] = audioDevices;
  
	cablingConnection : any;

    constructor(private positionUpdateService: PositionUpdateService, private connectionService: ConnectionService) {

		this.connectionService.cablesChanged.subscribe(updatedCables => {
			this.cables = updatedCables;
		});

		this.connectionService.cablingChange.subscribe(connection => {
            this.cablingConnection = connection;
            console.log('Cabling state changed:', connection);
        });

		setTimeout(()=>{this.createRandomCables()},2000);
	}

	ngOnInit(): void {
		// Listen to common activity events and signal them to the service
		const events = ['mousemove', 'scroll', 'resize', 'click'];
		events.forEach((eventName) => {
		  const sub = fromEvent(window, eventName)
			.pipe(debounceTime(100)) // Debounce to avoid excessive calls
			.subscribe(() => {
			  this.positionUpdateService.signalActivity();
			});
		  this.eventSubscriptions.push(sub);
		});		
	}

	ngOnDestroy(): void {
		// Clean up subscriptions
		this.eventSubscriptions.forEach((sub) => sub.unsubscribe());
	}

	createRandomCables(): void {
		this.connectionService.demoRandomConnect();
	}

	  createArray(n: number): number[] {
		return Array.from({length: n}, (audioDevices, i) => i);
	  }
	
}