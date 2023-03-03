import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../model/project';
import { Category } from '../model/category';
import { Tag } from '../model/tag';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  projects: Project[] = [];
  getProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }
  getProjectsByCategory(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByCategory(slug)
      .subscribe((projects) => (this.projects = projects));
    console.log(this.projects);
  }

  getProjectsByTag(): void {
    const slug = String(this.route.snapshot.paramMap.get('slug'));
    this.projectService
      .getProjectsByTag(slug)
      .subscribe((projects) => (this.projects = projects));
    console.log(this.projectService);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        this.getProjectsByCategory();
      } else if (segment === 'tags') {
        this.getProjectsByTag();
      } else {
        this.getProjects();
      }
    });
  }
}
