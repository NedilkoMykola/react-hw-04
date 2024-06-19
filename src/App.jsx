import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const salaries1 = {
   Manager: { salary: 1000, tax: "10%" },
   Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
}

const team1 = [
   { name: "Misha", specialization: "Manager" },
   { name: "Max", specialization: "Designer" },
   { name: "Vova", specialization: "Designer"},
  { name: "Leo", specialization: "Artist" },]


const calculateTeamFinanceReport = (salaries1, team1) => {

  const sallary = Object.entries(salaries1).map(salary => {
    const salaryWithTax  = (salary[1].salary + salary[1].salary*(parseInt(salary[1].tax)/100))
    const sallary = salary[0]; 
    return [sallary, salaryWithTax]
  })



  // console.log(sallary)

  }



  /* see in console
{
   "totalBudgetTeam":4590, // total budget does not match the sum of specializations due to truncation of the fractional part
   "totalBudgetManager":1111,
   "totalBudgetDesigner":1714,
   "totalBudgetArtist":1764,
}
*/
const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
