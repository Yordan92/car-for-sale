import {
  Directive,
  ElementRef,
  Inject,
  Renderer,
  QueryList,
  Query
} from 'angular2/angular2';
import {Location} from 'angular2/router';

/**
 * Simple directive to add class active on a LI element when
 * its A child element is clicked or on page load. Active class
 * is removed from all other LI element.
 * Follow the same principle as nav's in Bootstrap.
 *
 * @Example:
 * 	<ul set-active>
 * 		<li>
 * 			<a href="a1">link 1</a>
 * 		</li>
 * 		<li>
 * 			<a href="a">link 2</a>
 * 		</li>
 * 	</ul>
 */
@Directive({ selector: 'a' })
class Link {
  constructor (private _elRef: ElementRef) {}
  get href(): string {
    // Rely on the DOM until there is a better option.
    // The problem is that the href attribute is generated by router-link
    // directive which is instantiated after this one. href is then not
    // available at that time.
    return this._elRef.nativeElement.getAttribute('href');
  }
}

@Directive({ selector: 'li' })
class ListItem {
  className = 'active';
  constructor(@Query(Link) public links: QueryList<Link>,
              @Inject(Location) public location: Location,
              private _elRef: ElementRef,
              private _renderer: Renderer) {}
  toggleClass() {
    console.log(this.linkHref);
    if (this.linkHref === this.location.path()) {
      this._renderer.setElementClass(this._elRef, this.className, true);
    } else {
      this._renderer.setElementClass(this._elRef, this.className, false);
    }
  }
  get linkHref(): string {
    return this.links.first.href;
  }
}

@Directive({ selector: '[set-active]', host: { '(click)': 'setActive()' } })
class List {
  _href;
  constructor(@Query(ListItem) private _items: QueryList<ListItem>) {
    // _items is populated later on as it's refers to child classes.
    // So we wait for changes.
    // TODO: Figure out the changes needed here to make this work again
    this._items.changes.observer(_ => {
      this.setActive();
    });
  }
  setActive(): void {
    this._items.map(item => {
      item.toggleClass();
    });
  }
}

export var SetActive = [List, ListItem, Link];
