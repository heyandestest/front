import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../services/companies.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  public company = '';
  private clients = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companiesService: CompaniesService
  ) {}

  ngOnInit(): void {
    this.company = this.route.snapshot.paramMap.get('company');
    this.companiesService
      .getCompany(this.company)
      .subscribe((response: any) => {
        this.clients = response;
      });
  }

  goToCompanies() {
    this.router.navigate(['empresas']);
  }
}
