function errorFunction(message = "We are unfortunately not able to retrieve your request due to an issue with the API") {
    return `<div class="error">${message}</div>`
}