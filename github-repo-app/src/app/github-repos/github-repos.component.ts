// github-repos.component.ts
import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent {
  username: string = '';
  repos: any[] = [];

  constructor(private githubService: GithubService) { }

  searchUserRepos() {
    this.githubService.getUserRepos(this.username).subscribe(
      (repos) => {
        this.repos = repos;
      },
      (error) => {
        console.log('Error fetching repositories: ', error);
      }
    );
  }
}

