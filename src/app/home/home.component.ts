import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  biodata=[
    {
      Title:'Hi, My Name is',
      Name:'iEveEra Pvt. Ltd.',
      Profile:'I build things for the web.',
      Details:'I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.',
    },
  ]
  data=[
    {
      About:'About',
      paragraph:'Hello! My name is Brittany and I enjoy creating things that live on the internet.My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.',
      language:'Here are a few technologies I’ve been working with recently:',
    }
  ]

  exp=[{
    exp1:'Core Java'
  },
  {
    exp1:'Angular'
  },
  {
    exp1:'TypeScript'
  },
  {
    exp1:'Html'
  },
  {
    exp1:'Css'
  },
  {
    exp1:'FireBase'
  }
]
cards=[
  {
    title:'Web Developer',
    company:'ievEera pvt ltd.',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects '
  },
  {
    title:'Web Developer',
    company:'ievEera pvt ltd.',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects '
  },
  {
    title:'Web Developer',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects ',
    company:'ievEera pvt ltd.'
  },
  {
    title:'Web Developer',
    company:'ievEera pvt ltd.',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects '
  },
  {
    title:'Web Developer',
    company:'ievEera pvt ltd.',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects '
  },
  {
    title:'Web Developer',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects ',
    company:'ievEera pvt ltd.'
  },
  {
    title:'Web Developer',
    company:'ievEera pvt ltd.',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects '
  },
  {
    title:'Web Developer',
    expercience:'Write modern, performant, maintainable code for a diverse array of client and internal projects ',
    company:'ievEera pvt ltd.'
  },
]

}
