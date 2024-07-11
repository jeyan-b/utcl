import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalSharedService } from '../../../core/services/global-shared.service';
import { AppSettings } from '../../../app-constants/appSettings';
import { MatDialog } from '@angular/material/dialog';
import { LoiDetailsComponent } from '../../../shared/components/loi-details/loi-details.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Agency } from '../model/agency';
import { LoiService } from '../service/loi.service';

@Component({
  selector: 'app-ccnf-loi',
  templateUrl: './ccnf-loi.component.html',
  styleUrls: ['./ccnf-loi.component.css']
})
export class CcnfLoiComponent implements OnInit {
  xpandStatus: boolean = true;
  successNotification: boolean = false;
  isNextClicked: boolean = false;
  agencyForm: FormGroup;
  selectedTab = new FormControl(0);
  isAgencyDataSaved: boolean = false;
  constructor( private titleSvc: Title,
    private globalSharedSrv: GlobalSharedService,private _dialog:MatDialog, private loiService: LoiService) {
      this.titleSvc.setTitle(AppSettings.applicationName + '- CCNF-LOI');
      this.globalSharedSrv.pageTitle.next('CCNF LOI');
     }

  ngOnInit() {
    this.agencyForm = new FormGroup({
      agency_vendor: new FormControl('', Validators.required),
      agency_agencyName: new FormControl('', Validators.required),
      agency_state: new FormControl('', Validators.required),
      agency_region: new FormControl('', Validators.required),
      agency_depot: new FormControl('', Validators.required),
      agency_district: new FormControl('', Validators.required)
    });
    this.agencyForm.statusChanges.subscribe(result => {
      console.log(result);
      this.isAgencyDataSaved = false;
    }
      
  );
  }

  openLoiDetail(){
    this._dialog.open(LoiDetailsComponent
     
  )
  }
  goToNextTab() {
    this.selectedTab.setValue(this.selectedTab.value+1);
    this.isNextClicked = false;
    console.log(this.selectedTab.value);
 } //
//  saveAgencyDraft(){
//   this.saveAgency();
//  }

 saveAgencyMoveToNext(){
  // this.agencyForm.markAllAsTouched();
  // this.agencyForm.markAsDirty();
  this.isNextClicked = true;
  // if(this.agencyForm.valid){
    this.saveAgency();
  //   this.goToNextTab();
  // }

 }
  saveAgency(){
    this.agencyForm.markAllAsTouched();
    this.agencyForm.markAsDirty()
    console.log(this.agencyForm);
    if(this.agencyForm.valid){
  this.globalSharedSrv.isSpinnerActive.next(true);

      setTimeout(() => {
        let agency:Agency = {
          agencyName :this.agencyForm.value.agency_agencyName,
          depot : this.agencyForm.value.agency_depot,
          district : this.agencyForm.value.agency_district,
          region : this.agencyForm.value.agency_region,
          state : this.agencyForm.value.agency_state,
          vendor : this.agencyForm.value.agency_vendor,
        }
    
        console.log(agency);
        this.loiService.postAgency(agency).subscribe(res =>{
          console.log(res);
  this.globalSharedSrv.isSpinnerActive.next(false);
  this.isAgencyDataSaved = true;
  this.successNotification = true;
  setTimeout(() => {
  this.successNotification = false;    
  }, 3000);
  if(this.isNextClicked){
    this.goToNextTab();
  }
        });
      }, 2000);
      
    }else{
      this.isNextClicked =false
    }
    
  }
}
