import { Component, OnInit, EventEmitter, OnDestroy  } from '@angular/core';
import { MetadataService } from 'ng2-metadata';
import {UniversalModel} from '../shared/model/model.universal';
import { UniversalService } from '../shared/universal.service';
// import { MetaGuard, MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@nglibs/meta';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  providers: [MetadataService]
})
export class HeaderComponent implements OnInit, OnDestroy  {

  public universalModel: UniversalModel;
  public subscriber: EventEmitter<UniversalModel>;


  constructor(public metaDataService: MetadataService,
   public universalService: UniversalService) { }

  public ngOnInit() {
    let tm = "" + new Date().getTime();
    this.universalModel = new UniversalModel();
    this.subscriber = this.universalService.eventEmitter.subscribe((universalModel) => {
        let universalModel1: UniversalModel = <UniversalModel> {
                title: 'Builtvisible Homepage',
            ogTitle: 'Builtvisible Homepage111',
                    description: 'The home page of Builtvisible, a digital marketing agency',
            ogDescription: 'The home page of Builtvisible, a digital marketing agency1112',
                    canonical: 'https://builtvisible.com/',
                    publisher: 'https://plus.google.com/+Builtvisible'
        };
        this.universalModel = universalModel1;
    });
  }

  public ngOnDestroy() { 
    this.subscriber.unsubscribe() 
  }

}
