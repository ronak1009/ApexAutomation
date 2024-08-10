const utils = {
    shortenString : (fullString) => {
        if (fullString.length < 20) return fullString;
        return fullString.slice(0, 20) + "...";

    }
}

export default utils;