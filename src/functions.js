const date = {
    getDiffDays: (d1, d2) => {
        const date1 = new Date(d1);
        const date2 = new Date(d2);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    },
    getDay : (d) =>{
        const date = new Date(d);
        const day = date.getDate();
        return day;  
    },
    getMonth : (d) =>{
        const date = new Date(d);
        const month = date.toLocaleString('default', { month: 'short' });
        return month;
    },
    getDayName : (d) =>{
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(d);
        const dayName = days[date.getDay()];
        return dayName;
    }
}
export {date};