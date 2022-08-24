import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '', // ruta básica por ejemplo: localhost:4200,
        component: PorPaisComponent, // qué componente quiero mostrar en la ruta
        pathMatch: 'full' /* esto hace que cuando se seleccione esta ruta cuando hay strings 
        vacios pero con otra ruta. Por ejemplo localhost:4200/pais/ también tiene string vacio,
        pero como ponemos pathMatch: 'full', vendrá solamente PorPaisComponent*/

    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', // lo que está a la derecha de 'pais' es dinámico, por los dos puntos :
        component: VerPaisComponent
    },
    {
        path: '**', //cualquier otro path ingresado que no coincida con los ya listados
        redirectTo: '' // lo redirecciona al path ''
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}