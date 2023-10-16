import InputsReminder from "./components/input-form/InputsReminder"
import ListAllReminders from "./components/list-reminders/ListAllReminders"
import './style/app.css'

function App() {
  return (
    <div className="app-container">
        <InputsReminder />
        <ListAllReminders />
    </div>
  )
}

export default App
