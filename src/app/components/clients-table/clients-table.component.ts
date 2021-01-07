import { Component, OnInit, Input } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
@Component({
  selector: 'clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css'],
})
export class ClientsTable {
  @Input() company: string;
  public clients: Array<any> = [];
  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService
      .getCompany(this.company)
      .subscribe((response: any) => {
        this.clients = response;
      });
  }
}
