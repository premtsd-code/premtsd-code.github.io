import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Prem Palanisamy');
  protected readonly currentTitle = signal('Software Development Engineer');
  
  private titles = [
    'Software Engineer',
    'Backend Developer', 
    'Java Developer',
    'Software Development Engineer',
    'Software Developer',
    'Springboot Developer'
  ];
  private currentIndex = 0;
  private intervalId?: number;
  
  ngOnInit() {
    console.log('Component initialized, starting animation...');
    console.log('Initial title:', this.currentTitle());
    this.startTitleAnimation();
  }
  
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  private startTitleAnimation() {
    console.log('Animation started with titles:', this.titles);
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      console.log('Changing to index:', this.currentIndex, 'Title:', this.titles[this.currentIndex]);
      this.currentTitle.set(this.titles[this.currentIndex]);
    }, 3000);
  }
  
  protected readonly experiences: Experience[] = [
    {
      company: 'Oracle',
      position: 'Analyst',
      duration: 'Dec 2020 - May 2024',
      location: 'Bengaluru, India',
      achievements: [
        'Improved shipping efficiency by 80% implementing parallelized transactions in order processing system',
        'Optimized 10,000+ batch jobs (30min → 2.5min) with SQL tuning and indexing',
        'Developed integrations processing 100k+ records/day using Oracle Fusion and REST APIs',
        'Identified and fixed recurring order failure bug, eliminating 100% of related production tickets'
      ]
    },
    {
      company: 'Infosys',
      position: 'System Engineer Intern',
      duration: 'Jan 2020 - Mar 2020',
      location: 'Mysore, India',
      achievements: [
        'Built a MEAN stack flight booking app with secure REST APIs and JWT auth',
        'Developed responsive UI and admin dashboard with end-to-end booking flow'
      ]
    }
  ];

  protected readonly projects: Project[] = [
    {
      title: 'Scalable Microservices Architecture',
      description: 'LinkedIn-style social platform with user profiles, connections, and notifications',
      technologies: ['Spring Boot', 'Kafka', 'Docker', 'PostgreSQL', 'REST APIs'],
      githubUrl: 'https://github.com/premtsd-code/LinkedIn',
      liveUrl: 'https://linkedin-clone-prem.herokuapp.com'
    },
    {
      title: 'Takeaway Food Ordering System',
      description: 'Full-stack food ordering platform with real-time updates and payment integration',
      technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/premtsd-code/LittleIndiaTakeaway',
      liveUrl: 'https://little-india-takeaway.netlify.app'
    }
  ];

  protected readonly skills = {
    languages: [
      { name: 'Java', level: 95, icon: '☕', color: '#f89820' },
      { name: 'JavaScript', level: 90, icon: '🟨', color: '#f7df1e' },
      { name: 'Python', level: 85, icon: '🐍', color: '#3776ab' },
      { name: 'SQL', level: 90, icon: '🗃️', color: '#336791' },
      { name: 'TypeScript', level: 80, icon: '🔷', color: '#3178c6' }
    ],
    frameworks: [
      { name: 'Spring Boot', level: 95, icon: '🍃', color: '#6db33f' },
      { name: 'Node.js', level: 85, icon: '🟢', color: '#339933' },
      { name: 'Express.js', level: 80, icon: '⚡', color: '#000000' },
      { name: 'Angular', level: 75, icon: '🅰️', color: '#dd0031' },
      { name: 'React', level: 70, icon: '⚛️', color: '#61dafb' }
    ],
    databases: [
      { name: 'Oracle DB', level: 90, icon: '🔴', color: '#f80000' },
      { name: 'PostgreSQL', level: 85, icon: '🐘', color: '#336791' },
      { name: 'MongoDB', level: 80, icon: '🍃', color: '#47a248' },
      { name: 'Neo4j', level: 75, icon: '🔗', color: '#008cc1' },
      { name: 'Redis', level: 70, icon: '🔥', color: '#dc382d' }
    ],
    tools: [
      { name: 'Docker', level: 90, icon: '🐳', color: '#2496ed' },
      { name: 'Kubernetes', level: 75, icon: '☸️', color: '#326ce5' },
      { name: 'GitHub Actions', level: 85, icon: '🚀', color: '#2088ff' },
      { name: 'Jenkins', level: 80, icon: '🔧', color: '#d33833' },
      { name: 'ELK Stack', level: 75, icon: '📊', color: '#005571' },
      { name: 'Kafka', level: 85, icon: '📨', color: '#231f20' }
    ],
    cloud: [
      { name: 'Oracle Cloud', level: 90, icon: '☁️', color: '#f80000' },
      { name: 'AWS', level: 80, icon: '🟠', color: '#ff9900' },
      { name: 'Azure', level: 70, icon: '🔵', color: '#0078d4' }
    ],
    architecture: [
      { name: 'Microservices', level: 95, icon: '🏗️', color: '#2563eb' },
      { name: 'REST APIs', level: 95, icon: '🔌', color: '#10b981' },
      { name: 'Event-driven', level: 85, icon: '⚡', color: '#f59e0b' },
      { name: 'Domain-driven Design', level: 80, icon: '🎯', color: '#8b5cf6' },
      { name: 'CQRS', level: 75, icon: '🔄', color: '#ef4444' }
    ]
  };
}
