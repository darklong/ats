import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyVoicePage } from './my-voice';

@NgModule({
  declarations: [
    MyVoicePage,
  ],
  imports: [
    IonicPageModule.forChild(MyVoicePage),
  ],
})
export class MyVoicePageModule {}
