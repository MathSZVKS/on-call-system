import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  weeks: { day: number; currentMonth: boolean }[][] = [];
  currentDate: Date = new Date();
  selected: boolean = false;
  selectedDates: { day: number; month: string; year: string }[] = [];

  @Input() quantityDaySelect: number = 1;
  @Output() selectedDatesChange: EventEmitter<{ day: number; month: string }[]> =
    new EventEmitter();

  constructor() {
    this.generateCalendar();
  }

  get month(): string {
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    return `${month + 1}`;
  }

  get year(): string {
    const year = this.currentDate.getFullYear() + '';
    const part = year.split('0');
    return `${part[1]} `;
  }

  get yearMonth(): string {
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    return `${year} ${month + 1}`;
  }

  generateCalendar(): void {
    this.weeks = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    let dayCount = 1;
    let week: { day: number; currentMonth: boolean; month: number }[] = [];

    // Preencher os dias dos meses anteriores
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      week.push({
        day: prevMonthLastDay - i,
        currentMonth: false,
        month: this.currentDate.getMonth() - 1,
      });
    }

    // Preencher os dias do mês atual
    for (let i = 1; i <= lastDay; i++) {
      week.push({ day: i, currentMonth: true, month: this.currentDate.getMonth() });
      if (week.length === 7) {
        this.weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push({ day: dayCount, currentMonth: false, month: this.currentDate.getMonth() + 1 });
        dayCount++;
      }
      this.weeks.push(week);
    }
  }

  isCurrentDay(day: number): boolean {
    const today = new Date();
    return (
      this.currentDate.getFullYear() === today.getFullYear() &&
      this.currentDate.getMonth() === today.getMonth() &&
      day === today.getDate()
    );
  }

  isCurrentMonth(day: number): boolean {
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    const selectedDate = new Date(year, month, day);
    return selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  selectDate(day: any) {
    if (this.selectedDates.length < this.quantityDaySelect) {
      if (day.currentMonth) {
        const index = this.selectedDates.findIndex((date) => date.day === day.day);
        if (index !== -1) {
          this.selectedDates.splice(index, 1); // Remove o objeto 'day' da matriz 'selectedDates'
        } else {
          this.selectedDates.push({ day: day.day, month: this.month, year: this.year }); // Adiciona o objeto 'day' à matriz 'selectedDates'
        }
        this.selectedDatesChange.emit(this.selectedDates);
      }
    }
  }

  isSelected(day: any) {
    if (
      this.selectedDates.some(
        (date) => date.day === day.day && this.month == date.month && day.currentMonth == true
      )
    ) {
      return true;
    }
    return false;
  }
}
