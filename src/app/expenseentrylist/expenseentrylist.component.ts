import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
//import { ExpenseEntryComponent } from '../expense-entry/expense-entry.component';

@Component({
  selector: 'app-expenseentrylist',
  templateUrl: './expenseentrylist.component.html',
  styleUrls: ['./expenseentrylist.component.scss']
})
export class ExpenseentrylistComponent implements OnInit {
  title!: string;
expenseEntries!: ExpenseEntry[]

getExpenseEntries() : ExpenseEntry[] {
  let mockExpenseEntries : ExpenseEntry[] = [
  { id: 1,
  item: "Pizza",
 amount: Math.floor((Math.random() * 10) + 1),
 category: "Food",
 location: "Mcdonald",
 spendOn: new Date(2020, 4, Math.floor((Math.random() * 
 30) + 1), 10, 10, 10),
  createdOn: new Date(2020, 4, Math.floor((Math.random() 
 * 30) + 1), 10, 10, 10) },
  { id: 1,
  item: "Pizza",
 amount: Math.floor((Math.random() * 10) + 1),
 category: "Food",
 location: "KFC",
 spendOn: new Date(2020, 4, Math.floor((Math.random() * 
 30) + 1), 10, 10, 10),
  createdOn: new Date(2020, 4, Math.floor((Math.random() 
 * 30) + 1), 10, 10, 10) },
  { id: 1,item: "Pizza",
  amount: Math.floor((Math.random() * 10) + 1),
 category: "Food",
 location: "Mcdonald",
 spendOn: new Date(2020, 4, Math.floor((Math.random() * 
 30) + 1), 10, 10, 10),
  createdOn: new Date(2020, 4, Math.floor((Math.random() 
 * 30) + 1), 10, 10, 10) },
  { id: 1,
  item: "Pizza",
  amount: Math.floor((Math.random() * 10) + 1),
 category: "Food",
 location: "KFC",
 spendOn: new Date(2020, 4, Math.floor((Math.random() * 
 30) + 1), 10, 10, 10),
  createdOn: new Date(2020, 4, Math.floor((Math.random() 
 * 30) + 1), 10, 10, 10) },
  { id: 1,
  item: "Pizza",
 amount: Math.floor((Math.random() * 10) + 1),
 category: "Food",
 location: "KFC",
 spendOn: new Date(2020, 4, Math.floor((Math.random() * 
 30) + 1), 10, 10, 10),
  createdOn: new Date(2020, 4, Math.floor((Math.random() 
 * 30) + 1), 10, 10, 10) },
  ];
  return mockExpenseEntries;
 } 
constructor() { }
ngOnInit() {
 this.title = "Expense Entry List";
 this.expenseEntries = this.getExpenseEntries();
}

}

