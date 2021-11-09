import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { GoogleLoginProvider,SocialLoginModule, AuthServiceConfig, AuthService, FacebookLoginProvider } from 'angular-6-social-login';
import {AppService} from './app.service'
import {AppComponent} from './app.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {SearchComponent} from './layout/header/search/search.component';
import {LogoComponent} from './layout/header/logo/logo.component';
import {NavigationTriggerComponent} from './layout/header/navigation-trigger/navigation-trigger.component';
import {UserComponent} from './layout/sidebar/user/user.component';
import {PageLoaderComponent} from './layout/page-loader/page-loader.component';

import {Layout1Component} from './layout/layouts/layout-1/layout.component';
import {Layout2Component} from './layout/layouts/layout-2/layout.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {AppRoutingModule} from './app-routing.module';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { AcudienteComponent } from './components/acudiente/acudiente.component';
import { UsuariosComponent } from './components/administrador/usuarios/usuarios.component';
import { CursosComponent } from './components/administrador/cursos/cursos.component';
import { ProfesoresComponent } from './components/administrador/profesores/profesores.component';
import { EstudiantesComponent } from './components/administrador/estudiantes/estudiantes.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { CursosAdultosComponent } from './components/administrador/cursos-adultos/cursos-adultos.component';
import {MatStepperModule} from '@angular/material/stepper';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
// import { MatTableExporterModule } from 'mat-table-exporter';

import {MatInputModule} from '@angular/material/input';
import { AlumnosComponent } from './components/acudiente/alumnos/alumnos.component';
import { ProgramasComponent } from './components/administrador/programas/programas.component';
import { ListasclasesComponent } from './components/profesor/listasclases/listasclases.component';
import { DiarioclasesComponent } from './components/profesor/diarioclases/diarioclases.component';
import { EstudianteService } from './services/estudiante.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CalificacionComponent } from './components/profesor/calificacion/calificacion.component';
import { EntrenamientoComponent } from './components/profesor/diarioclases/entrenamiento/entrenamiento.component';
import { LoginComponent } from './components/login/login/login.component';
import { NoticiasComponent } from './components/administrador/noticias/noticias.component';
import { TokenInterceptor } from './services/login.interceptor';
import { ObjetivosCursoComponent } from './components/profesor/objetivos-curso/objetivos-curso.component';
import { ListasComponent } from './components/profesor/listasclases/listas/listas.component';
import { AuthGuard } from './components/login/auth.guard';
import { ProgramasDetalleComponent } from './components/pages/programas-detalle/programas-detalle.component';
import { VerifyEmailComponent } from '../app/components/login/verify-email/verify-email.component';
import { PasswordForgotComponent } from './components/login/password-forgot/password-forgot.component';
import { PasswordResetComponent } from './components/login/password-reset/password-reset.component';
import { EmpresasComponent } from './components/administrador/empresas/empresas.component';
export function socialConfigs() {  
    const config = new AuthServiceConfig(  
      [  
        {  
          id: GoogleLoginProvider.PROVIDER_ID,  
          provider: new GoogleLoginProvider('711080038826-cjs2gv4pnllch3j9cqbkg7o5hu2ul3v4.apps.googleusercontent.com')  
        },
        {  
          id: FacebookLoginProvider.PROVIDER_ID,  
          provider: new FacebookLoginProvider('2412108689044227')  
        }
      ]  
    );  
    return config;  
  }  
@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        Layout1Component,
        Layout2Component,
        SearchComponent,
        LogoComponent,
        NavigationTriggerComponent,
        UserComponent,
        PageLoaderComponent,
        AdministradorComponent,
        ProfesorComponent,
        EstudianteComponent,
        AcudienteComponent,
        UsuariosComponent,
        CursosComponent,
        ProfesoresComponent,
        EstudiantesComponent,
        CursosAdultosComponent,
        AlumnosComponent,
        ProgramasComponent,
        ListasclasesComponent,
        DiarioclasesComponent,
        CalificacionComponent,
        EntrenamientoComponent,
        LoginComponent,
        NoticiasComponent,
        ObjetivosCursoComponent,
        ListasComponent,
        ProgramasDetalleComponent,
        VerifyEmailComponent,
        PasswordForgotComponent,
        PasswordResetComponent,
        EmpresasComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        NgScrollbarModule,
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        ReactiveFormsModule,
        NgbModule, 
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        NgbModule,
        DropzoneModule,
        MatStepperModule,
        A11yModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        PortalModule,
        ScrollingModule,
        HttpClientModule        
    ],
    providers: [AppService, EstudianteService, AuthService,  
        {  
          provide: AuthServiceConfig,  
          useFactory: socialConfigs  
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        },AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
