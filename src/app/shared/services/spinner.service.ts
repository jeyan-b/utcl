import { Injectable } from '@angular/core';
import { GlobalSharedService } from '../../core/services/global-shared.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public status: Subject<boolean> = new Subject();
	private _active = false;

	constructor(private globalSharedSvc: GlobalSharedService) { }

	public get active(): boolean {
		return this._active;
	}

	public set active(v: boolean) {
		this._active = v;
		this.status.next(v);
	}

	public start(): void {
		this.active = true;
		this.globalSharedSvc.setIsSpinnerActive(true);
	}

	public stop(): void {
		this.active = false;
		this.globalSharedSvc.setIsSpinnerActive(false);
	}

}
