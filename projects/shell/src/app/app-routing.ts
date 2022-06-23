import { loadRemoteModule } from '@angular-architects/module-federation';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    matcher: startsWith('remote'),
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'remote',
        exposedModule: './HomeModule',
      }).then((m) => m.HomeModule)
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: "script",
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
{
  path: 'angular1',
  component: WebComponentWrapper,
  data: {
    type: "script",
    remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
    remoteName: 'angular1',
    exposedModule: './web-components',
    elementName: 'angular1-element'
  } as WebComponentWrapperOptions
},
{
  path: 'angular2',
  component: WebComponentWrapper,
  data: {
    type: "script",
    remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
    remoteName: 'angular2',
    exposedModule: './web-components',
    elementName: 'angular2-element'
  } as WebComponentWrapperOptions
},   

{
  matcher: startsWith('angular3'),
  component: WebComponentWrapper,
  data: {
    type: "script",
    remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
    remoteName: 'angular3',
    exposedModule: './web-components',
    elementName: 'angular3-element'
  } as WebComponentWrapperOptions
}, 

{
  path: 'vue',
  component: WebComponentWrapper,
  data: {
    type: "script",
    remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
    remoteName: 'vue',
    exposedModule: './web-components',
    elementName: 'vue-element'
  } as WebComponentWrapperOptions
},  

{
  path: 'angularjs',
  component: WebComponentWrapper,
  data: {
    type: "script",
    remoteEntry: 'https://calm-mud-0a3ee4a10.azurestaticapps.net/remoteEntry.js',
    remoteName: 'angularjs',
    exposedModule: './web-components',
    elementName: 'angularjs-element'
  } as WebComponentWrapperOptions
},     

{
  matcher: startsWith('angular3'),
  component: WebComponentWrapper,
  data: {
    type: "script",
    remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
    remoteName: 'angular3',
    exposedModule: './web-components',
    elementName: 'angular3-element'
  } as WebComponentWrapperOptions
}, 

  {
    path: '**',
    component: AppComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];
