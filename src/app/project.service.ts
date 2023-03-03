import { Injectable } from '@angular/core';
import { Project } from './model/project';
import { PROJECTS } from './data/projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }
  getProject(id: number): Observable<Project> {
    const project = PROJECTS.find((p) => p.id === id)!;
    return of(project);
  }
  getProjectsByCategory(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => p.category?.slug === slug)!;
    console.log(projects);
    return of(projects);
  }

  getProjectsByTag(slug: string): Observable<Project[]> {
    const projects = PROJECTS.filter((p) => {
      if (p.tags.some((t: { slug: string }) => t.slug === slug)) {
        return true;
      } else {
        return false;
      }
    })!;
    return of(projects);
  }
}
