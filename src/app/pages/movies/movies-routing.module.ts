import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CreatingMovieComponent } from './creating-movie/creating-movie.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: MovieCatalogComponent },
  { path: 'detail/:id', canActivate: [AuthGuard], component: MovieDetailComponent },
  { path: 'create', canActivate: [AuthGuard], component: CreatingMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
