import { Component, Input, ViewChild, ViewContainerRef, EventEmitter, Output, AfterViewInit, OnInit, OnDestroy, ComponentRef, Injector } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-slideout',
  templateUrl: './slideout.component.html',
  styleUrls: ['./slideout.component.scss'],
  animations: [
    trigger('slideoutAnimate', [
      state('in', style({ 
        transform: '{{ enterPosition }}'
      }),
        {
          params:
          { 
            enterPosition: '',
            leavePosition: ''
          }
        }),
      state('out', style({ 
        transform: '{{ leavePosition }}', 
      }),
        {
          params:
          { 
            enterPosition: '',
            leavePosition: ''
          }
        }
      ),
      transition(':enter', [
        style({ 
          transform: '{{ leavePosition }}', 
        }),
        animate('350ms ease', style({ 
          transform: '{{ enterPosition }}',
        })
      ),
    ]),
      transition('in => out', [
        animate('250ms ease-out')
      ])
    ]
  )]
})

export class SlideoutComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() childComponentType: any;
  @Output() closeSlideout = new EventEmitter<void>();
  @ViewChild('slideoutContent', { read: ViewContainerRef, static: false }) slideoutContent!: ViewContainerRef;
  @Input() title = '';
  @Input() confirmText = 'Apply';
  @Input() type: 'nav' | 'content' = 'nav';
  @Input() position: 'left' | 'right' = 'left';
  @Input() topPosition: 'top' | 'below' = 'top';
  @Input() hasHeader: true;
  @Input() hasFooter: false;
  @Input() showTitle: true;
  @Input() hasBackdrop: true;

  slideoutType = '';
  slideoutPosition = '';
  endPosition = '';
  animationState: 'in' | 'out' = 'in';
  private componentRef!: ComponentRef<any>;

  public get classes(): string[] {
    return [`slideout--${this.type}`, `slideout--${this.position}`, `slideout--${this.topPosition}`];
  }
  
  constructor(private injector: Injector) {}

  ngOnInit(): void {
    this.slideoutType = this.type.toString(); 
    this.slideoutPosition = this.position.toString(); 
  }

  ngAfterViewInit(): void {
    this.loadChildComponent();
  }

  ngOnDestroy(): void {
    if (this.slideoutContent) {
      this.slideoutContent.clear();
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private loadChildComponent(): void {
    if (this.slideoutContent) {
      try {
        console.log('slideoutContent is defined');
        this.slideoutContent.clear();
        this.componentRef = this.slideoutContent.createComponent(this.childComponentType, {
          injector: this.injector
        });
        Object.assign(this.componentRef.instance);
      } catch (error) {
        console.error('Error creating dynamic component:', error);
      }
    } else {
      console.error('slideoutContent is not defined.');
    }
  }

  closeSlideoutInstance(): void {
    this.close();
  }

  close(): void {
    this.animationState = 'out';
  }

  onAnimationDone(event: AnimationEvent): void {
    if (event.toState === 'out') {
      this.closeSlideout.emit();
    }
  }

}