import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { UniversalService } from './shared/universal.service';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [UniversalService]
})

export class AppComponent implements OnInit {
  title = 'ftw';
  universalModel: any;
  constructor(
    private router: Router, 
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
  ) {
    this.universalModel = {
      title: "title test",
      description: "description test",
      ogTitle: "ogTitle test",
      ogDescription: "ogDescription test",
      ogImage: "https://maprental.azureedge.net/property-pictures/201704211340397251.jpg?t=555"
    }
  }
  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title'])
        console.log(event['title']);
      });
  }
}
