import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from './material';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './header/toolbar/navbar/navbar.component';
import {ToolbarComponent} from './header/toolbar/toolbar.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {CalcEpoxyComponent} from './projects/calc-epoxy/calc-epoxy.component';
import {FormsModule} from '@angular/forms';
import {ContactFormComponent} from './contact/contact-form/contact-form.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SnakeComponent} from './projects/snake/snake.component';
import {TestfieldComponent} from './testfield/testfield.component';
import {TestComponent} from './test/test.component';
import {PostsColumnComponent} from './testfield/posts-column/posts-column.component';
import {PostComponent} from './testfield/post/post.component';
import {PostService} from './testfield/post/postservice.service';
import {TextService} from './textservice.service';
import {CurriculumvitaeService} from './curriculum-vitae/curriculumvitaeservice.service';
import {CurriculumVitaeComponent} from './curriculum-vitae/curriculum-vitae.component';
import {Curriculumvitae2Service} from './curriculum-vitae/curriculumvitae2service.service';
import {NgxGalleryModule} from 'ngx-gallery';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {SnakeTextService} from './projects/snake/snaketextservice.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'test', component: TestComponent},
  {path: 'Curriculum Vitae', component: CurriculumVitaeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'snake', component: SnakeComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ToolbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    CalcEpoxyComponent,
    ContactFormComponent,
    SnakeComponent,
    TestfieldComponent,
    TestComponent,
    PostsColumnComponent,
    PostComponent,
    CurriculumVitaeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    NgxGalleryModule,
    CarouselModule.forRoot(),
  ],
  providers: [
    PostService,
    TextService,
    CurriculumvitaeService,
    Curriculumvitae2Service,
    SnakeTextService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
