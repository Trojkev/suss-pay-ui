import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { filter, Subscription } from 'rxjs';

var lastScrollTop = 0;
var delta = 5;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;

    constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    @HostListener('window:scroll', ['$event'])
    hasScrolled() {

        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        lastScrollTop = st;
    };
    ngOnInit() {
      var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
          if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
          }else{
              window.document.activeElement.scrollTop = 0;
          }
          this.renderer.listen('window', 'scroll', (event) => {
              const number = window.scrollY;
              if (number > 150 || window.pageYOffset > 150) {
                  // add logic
                  navbar.classList.add('headroom--not-top');
              } else {
                  // remove logic
                  navbar.classList.remove('headroom--not-top');
              }
          });
      });
      this.hasScrolled();
    }
}
