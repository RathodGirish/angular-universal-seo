import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'ng2-metadata';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MetadataService]
})
export class ContactComponent implements OnInit {

  constructor(public metaDataService: MetadataService) { }

  ngOnInit() {
    let tm = "" + new Date().getTime();
    // $("head").append("<meta property='fb:app_id' content='966242223397117' />");

		// $("head").append("<meta property='og:url' content='http://maprentalsstaging.azurewebsites.net' />");

		// $("head").append("<meta property='og:description' content='test descriptions' />");

		// $("head").append("<meta property='og:title' content='test title' />");

		// $("head").append("<meta property='og:image' content='https://maprental.azureedge.net/property-pictures/201704070557077907.jpg?t=45345345' />");

		// $("head").append("<meta property='og:image:width' content='100' />");

		// $("head").append("<meta property='og:image:height' content='110' />");
  }

}
