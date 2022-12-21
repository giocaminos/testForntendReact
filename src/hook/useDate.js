import { useEffect, useState } from "react";

export const useDate = (date) => {

  const [formatDate, setformatDate] = useState(new Date(date).toLocaleDateString('en-US', { year: "numeric", month: "numeric", day: 'numeric' }));

  useEffect(() => {

  }, [formatDate])
  

  const dateToNumberWeek = (date = new Date) => {
    Date.prototype.getWeekNumber = () => {
      let d = new Date(+this);
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() + 4 - (d.getDay() || 7));
      return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
    };
    setformatDate(date.getWeekNumber());
  }

  const dateToLocalDate = (date = new Date) => {
    setformatDate(new Date(date).toLocaleDateString('en-US', { year: "numeric", month: "numeric", day: 'numeric' }));
  }

  const dateToFormatDate = (format = 'short', date = new Date) => {
    const inicio = date;
    const formateador = new Intl.DateTimeFormat('es-MX', { dateStyle: format, });
    setformatDate(formateador.format(inicio));
  }

  return {
    formatDate,
    dateToNumberWeek,
    dateToLocalDate,
    dateToFormatDate
  }
}

