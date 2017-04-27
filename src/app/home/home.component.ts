import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'ng2-metadata';
import {UniversalModel} from '../shared/model/model.universal';
import { UniversalService } from '../shared/universal.service';
// import { MetaGuard, MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@nglibs/meta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MetadataService]
})
export class HomeComponent implements OnInit {

  public universalModel: UniversalModel;

  constructor(
    public metaDataService: MetadataService,
    public universalService: UniversalService) { 
    let universalModel: UniversalModel = <UniversalModel> {
        title: 'Builtvisible Homepage',
        ogTitle: 'Builtvisible Homepage111',
        description: 'The home page of Builtvisible, a digital marketing agency',
        ogDescription: 'The home page of Builtvisible, a digital marketing agency1112',
        canonical: 'https://builtvisible.com/',
        publisher: 'https://plus.google.com/+Builtvisible'
    };

    this.universalModel = universalModel;

    this.universalService.set(universalModel);
  }

  ngOnInit() {
    let tm = "" + new Date().getTime();
  }

}
