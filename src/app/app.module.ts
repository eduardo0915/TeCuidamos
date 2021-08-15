import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import {HttpClientModule }from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// storage module
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule, IonicModule.forRoot(),
  HttpClientModule,
  AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule],
  providers: [SocialSharing,NativeStorage, OneSignal,InAppBrowser,{ provide:  RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
