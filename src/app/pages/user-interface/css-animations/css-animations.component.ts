import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-animations',
  templateUrl: './css-animations.component.html',
  styleUrls: ['./css-animations.component.scss']
})

export class CssAnimationsComponent implements OnInit {
  pageTitle: string = 'CSS Animations';
  pageSubTitle: string = 'animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.';

  animationDuration: number = 0;

  animationClasses: any = {
    AttentionSeekers: '',
    BouncingEntrances: '',
    BouncingExits: '',
    FadingEntrances: '',
    FadingExits: '',
    Flippers: '',
    LightSpeed: '',
    RotatingEntrances: '',
    RotatingExits: '',
    SlidingEntrances: '',
    SlidingExits: '',
    ZoomEntrances: '',
    ZoomExits: '',
    Specials: ''
  };

  animations: Array<any> = [
    {
      title: 'Attention Seekers',
      header: '1.png',
      group: 'BouncingEntrances',
      types: [
          'bounce',
          'flash',
          'pulse',
          'rubberBand',
          'shake',
          'swing',
          'tada',
          'wobble',
          'jello',
          'heartBeat'
      ]
    },
    {
      title: 'Bouncing Entrances',
      header: '2.png',
      group: 'BouncingEntrances',
      types: [
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp'
      ]
    },
    {
      title: 'Bouncing Exits',
      header: '3.png',
      group: 'BouncingExits',
      types: [
        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp'
      ]
    },
    {
      title: 'Fading Entrances',
      header: '4.png',
      group: 'FadingEntrances',
      types: [
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig'
      ]
    },
    {
      title: 'Fading Exits',
      header: '5.png',
      group: 'FadingExits',
      types: [
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig'
      ]
    },
    {
      title: 'Flippers',
      header: '6.png',
      group: 'Flippers',
      types: [
        'flip',
        'flipInX',
        'flipInY',
        'flipOutX',
        'flipOutY'
      ]
    },
    {
      title: 'Light Speed',
      header: '7.png',
      group: 'LightSpeed',
      types: [
        'lightSpeedIn',
        'lightSpeedOut'
      ]
    },
    {
      title: 'Rotating Entrances',
      header: '8.png',
      group: 'RotatingEntrances',
      types: [
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight'
      ]
    },
    {
      title: 'Rotating Exits',
      header: '9.png',
      group: 'RotatingExits',
      types: [
        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight'
      ]
    },
    {
      title: 'Sliding Entrances',
      header: '1.png',
      group: 'SlidingEntrances',
      types: [
        'slideInUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight'
      ]
    },
    {
      title: 'Sliding Exits',
      header: '2.png',
      group: 'SlidingExits',
      types: [
        'slideOutUp',
        'slideOutDown',
        'slideOutLeft',
        'slideOutRight'
      ]
    },
    {
      title: 'Zoom Entrances',
      header: '3.png',
      group: 'ZoomEntrances',
      types: [
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp'
      ]
    },
    {
      title: 'Zoom Exits',
      header: '4.png',
      group: 'ZoomExits',
      types: [
        'zoomOut',
        'zoomOutDown',
        'zoomOutLeft',
        'zoomOutRight',
        'zoomOutUp'
      ]
    },
    {
      title: 'Specials',
      header: '5.png',
      group: 'Specials',
      types: [
        'hinge',
        'rollIn',
        'rollOut',
        'jackInTheBox'
      ]
    }
  ];

  setAnimationClass(animationGroup, animationClass) {
    this.animationClasses[animationGroup] = animationClass;
    this.animationDuration = animationClass === 'hinge' ? 2100 : 1200;

    setTimeout(() => {
      this.animationClasses[animationGroup] = ''
    }, this.animationDuration)
  }

  constructor() { }

  ngOnInit() {
  }

}
