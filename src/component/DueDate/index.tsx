import './styles.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DueDateProps {
    date: Date
    handleDate: (e: Date) => void
}

function DueDate(props: DueDateProps) {
    const { date, handleDate } = props

    return (
        <div className="date-container">
            <div className="date-title">Due Date</div>
            <DatePicker
                className="date-select"
                selected={date}
                onChange={(date: Date) => handleDate(date)}
            />
        </div>
    )
}

export default DueDate
