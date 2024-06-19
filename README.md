* useExpense contextAPI
* ManageData contextAPI
  
1.Dashboard
2.Wallet Balance
3.Expenses Balance
4.Transactions 
5.Expense cards
6.Pagination
7.Pie Chart
8.Bar Chart
9.Notistack
10.Responsiveness

* useExpense contextAPI
Wallet balance is 5000 by default.
Expense is an array of expense objects.
Both balance and expense array are updated on refresh and onchange of expense array.
Localstorage for data persistance.

* ManageData contextAPI
Expense object have category namely Entertainment, Food, Travel.
Category arrays for seperation of data, which is calculated and updated onchange of expense list.
Calculated category arrays are fed as array of objects to Pie chart and Bar chart.

1. Dashboard 
   Home and only page, includes two sections.
   a. First section includes Wallet balance card, Total expense card, Pie chart.
   b. Second section includes Transaction history and Barchart.

2. Wallet Balance
   Add balance button to top up or update wallet balance through add balance form.
   Notistack pops success avriant upon updating wallet.

3. Expenses Balance
   Add expense button to add expenses through add expense form.
   Notistack success pops if expense is less than balance, allowed.
   Notistack warning pops if expense is more than balance, restricted.

4. Transactions
   Populates list of cards from expense array.
   Each transaction can populate 3 cards at a time due to pagination.
   Navigation buttons to move across pages.

5. Expense Cards
   Each card has expense data title, amount, category, date (expense form).
   Delete and edit buttons to delete and update expense cards.
   Notistack error pops upon deleting card.

6. Pagination
   Populate 3 cards at a time.
   Cuurent page, navigation buttons to move across pages i.e Prev and Next.

7. Pie Chart
   -> recharts
   
8. Bar Chart
   -> recharts
   Sorted by top expenses everytime expense array changes

9. Notistack
   -> Notistack

10. Responsiveness
    Supports all types of devices from large screens to mobile screens
