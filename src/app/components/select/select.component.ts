import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit{

  @Input() placeHolder: string = "";
  @Input() optionsList: string[] = [""];
  @Output() selectedOption: string = "";

  resultList:string[]=[""];
  boxOpen:boolean = false;
  pesquisa:string="";

  ngOnInit(): void {
    this.resultList = this.optionsList.filter((option) =>  option !== undefined && option !== "").map((option: any) => option.value);
  }

  realizarPesquisaPaciente(value: string) {
    this.resultList = this.optionsList.filter(
      (option: any) => option.value.toLowerCase().includes(value.toLowerCase())
    ).map((option: any) => option.value);
    this.boxOpen = true;
  }

  openBox(){
    this.boxOpen = !this.boxOpen;
  }
}
