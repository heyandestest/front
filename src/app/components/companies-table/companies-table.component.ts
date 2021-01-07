import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css'],
})
export class CompaniesTable implements OnInit {
  public companies: Array<any> = [];
  constructor(
    private companiesService: CompaniesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.companiesService.getCompanies().subscribe((response: any) => {
      this.companies = response;
    });
  }

  ngOnInit() {}

  sortData(sort) {
    this.companies = this.companies.sort((a, b) => {
      switch (sort) {
        case 'name':
          return a.nameAgency < b.nameAgency ? -1 : 1;
        case 'sales':
          return a.total_sales < b.total_sales ? -1 : 1;
        default:
          return 0;
      }
    });
  }

  goToCompany(company: string) {
    this.router.navigate(['empresas', company]);
  }
}
