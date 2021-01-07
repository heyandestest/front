import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompaniesTable } from './components/companies-table/companies-table.component';
import { ClientsTable } from './components/clients-table/clients-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  {
    path: 'empresas',
    component: CompaniesComponent,
  },
  {
    path: 'empresas/:company',
    component: CompanyComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CompaniesTable,
    ClientsTable,
    DashboardComponent,
    CompaniesComponent,
    CompanyComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
