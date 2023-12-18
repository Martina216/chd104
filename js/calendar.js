/*日曆*/
const currentDate = new Date();
const twoDaysAfter = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = [
  '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
];

function renderCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  document.getElementById('currentMonthYear').textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const daysDiv = document.querySelector('.days');
    daysDiv.innerHTML = '';

    const today = new Date(); 

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysDiv.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        
        const date = new Date(currentYear, currentMonth, i);

        /*無法選擇已過日期*/
        if (date <= twoDaysAfter) {
            dayDiv.classList.add('past-day');
        }
        daysDiv.appendChild(dayDiv);
    }
}

document.getElementById('prevMonth').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

renderCalendar();
