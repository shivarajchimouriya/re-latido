import 'dayjs/plugin/utc'; // Import the UTC plugin for dayjs
import dayjs from "dayjs";

export const dateToMonthAndDay = (date: string) => {
    const dateToFormat = dayjs(date);
    const formattedDate = dateToFormat.format('MMM D');
    return formattedDate;
}

export const dateToMonthDayYear = (date: string) => {
    const dateToFormat = dayjs(date);
    const formattedDate = dateToFormat.format('MMM D, YYYY');
    return formattedDate;
}



export const formatDateForSearch = (incomingDate: Date) => {
    const date = dayjs(incomingDate);
    const formattedDate = date.format('YYYY-MM-DD');
    return formattedDate
}

export const isDateVaild = (incomingDate: string) => {

    return dayjs(incomingDate).isValid()

}