import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppService } from '../../app.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
    host: {
        'class': 'sidebar'
    },
    animations: [
        trigger('toggleSubMenu', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class SidebarComponent implements OnInit {
    /* Main Menu

     * title: Main menu title
     * icon: Menu icon from material-design-iconic-fonts. Please refer 'Icons' page for more details
     * route: Router link for page
     * sub: Sub menus
     * visibility: Property for animation. 'inactive' means the sub menu is hidden by default.

     */
    mainMenu: Array<any> = [];
    menu: Array<any> = [
        {
            title: 'Inicio',
            icon: 'home',
            rol: '',
            //rol:0,
            route: '/home'
        },
        {
            title: 'Administrador',
            icon: 'view-list',
            rol: 'Admin',
            //rol:1,
            sub: [
                {
                    title: 'Usuarios',
                    route: '/usuarios'
                },
                {
                    title: 'Profesores',
                    route: '/profesores'
                },
                {
                    title: 'Programas',
                    route: '/programas'
                },
                {
                    title: 'Cursos',
                    route: '/cursos'
                },
                {
                    title: 'Estudiantes',
                    route: '/estudiantes'
                },
                {
                    title: 'Noticias',
                    route: '/noticias'
                },
                {
                    title: 'Empresas',
                    route: '/empresas'
                }
            ],
            visibility: 'inactive'
        },
        {
            title: 'Profesores',
            icon: 'collection-text',
            rol: 'Profesor',
            //rol:2,
            sub: [
                {
                    title: 'Listas de Clase',
                    route: '/listas-de-clase'
                },
                {
                    title: 'Diario de clase',
                    route: '/diario-de-clase'
                },
                {
                    title: 'Inscripciones',
                    route: '/alumnos'
                }
            ],
            visibility: 'inactive'
        },
        {
            title: 'Acudientes',
            icon: 'swap-alt',
            rol: 'Acudiente',
            //rol:3,
            sub: [
                {
                    title: 'Inscripciones',
                    route: '/alumnos'
                },
            ],
            visibility: 'inactive'
        }
    ];


    // Toggle sub menu
    toggleSubMenu(i) {
        this.mainMenu[i].visibility = (this.mainMenu[i].visibility === 'inactive' ? 'active' : 'inactive');
    }

    constructor(private service: AppService, public loginService: LoginService) {
        this.menuAuthorized();

    }

    ngOnInit() {

    }
    menuAuthorized() {
        this.mainMenu = this.menu.filter((menu) => {
            return this.loginService.isAuthorized(menu.rol);
        })
    }
}