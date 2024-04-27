import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message= '';

  constructor() {
    // NO ASYNC
    // Before render
    // One time only run
    console.log('constructor');
    console.log('-'.repeat(10));    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration']
    if(duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));    
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit() {
    // after render
    // componentes child was rendered or painting
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
  doSomething() {
    console.log('Change duration');
    // async
  }
}
// constructor
// ngOnChanges
// ngOnInit
// ngDoCheck
//   ngAfterContentInit
//   ngAfterContentChecked
//   ngAfterViewInit
//   ngAfterViewCheck
// ngOnDestroy