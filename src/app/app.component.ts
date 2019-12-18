import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'pwa-prototype';
  public selected = 'Inbox';

  // public items: Array<DrawerItem> = [
  //   { text: 'Inbox', icon: 'k-i-inbox', selected: true },
  //   { separator: true },
  //   { text: 'Notifications', icon: 'k-i-bell' },
  //   { text: 'Calendar', icon: 'k-i-calendar' },
  //   { separator: true },
  //   { text: 'Attachments', icon: 'k-i-hyperlink-email' },
  //   { text: 'Favourites', icon: 'k-i-star-outline' }
  // ];

  public items: Array<any> = [];

  constructor(
    private router: Router
  ) {
    this.items = this.mapItems(router.config);
    this.items[0].selected = true;
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }

  public mapItems(routes: any[], path?: string): any[] {
    return routes.map(item => {
      return {
        text: item.text,
        icon: item.icon,
        path: item.path ? item.path : ''
      };
    });
  }

}
