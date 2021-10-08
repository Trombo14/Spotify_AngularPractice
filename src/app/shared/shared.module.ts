import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeadUserComponent } from './components/head-user/head-user.component';



@NgModule({
  declarations: [
    MediaPlayerComponent,
    SideBarComponent,
    HeadUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
