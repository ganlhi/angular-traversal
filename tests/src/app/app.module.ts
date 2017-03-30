import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TraversalModule } from '../dist';
import { Resolver } from '../dist';
import { Marker } from '../dist';
import { Normalizer } from '../dist';
import { BasicHttpResolver, BACKEND_BASE_URL } from '../dist';

import { FullPathNormalizer } from './normalizer';
import { TypeMarker } from './marker';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { FolderComponent } from './folder/folder.component';
import { FileInfoComponent } from './file-info/file-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    FolderComponent,
    FileInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TraversalModule,
  ],
  entryComponents: [
    FileComponent,
    FolderComponent,
    FileInfoComponent
  ],
  providers: [
    { provide: Resolver, useClass: BasicHttpResolver },
    { provide: BACKEND_BASE_URL, useValue: 'https://api.github.com/repos' },
    { provide: Marker, useClass: TypeMarker },
    { provide: Normalizer, useClass: FullPathNormalizer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
