import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  public top_seller = '';
  public top_seller_amount = '';
  public top_month = 'ENERO';
  private months = [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SETIEMBRE',
    'OCTURBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
  ];
  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService.topCompany().subscribe((response: any) => {
      this.top_seller = response.nameAgency;
      this.top_seller_amount = `$${response.total_sales}`;
    });

    this.companiesService.topMonth().subscribe((response: any) => {
      this.top_month = this.months[response.month - 1];
    });
  }
}
