const dateParser = (dateString) => {
    const date = new Date(dateString);
    const optsDate = {
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    const optsTime = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }

    const formattedDate = date.toLocaleString('en-EN', optsDate)
    const formattedTime = date.toLocaleString('en-EN', optsTime)
    return { date: formattedDate, time: formattedTime };
}

export default dateParser;