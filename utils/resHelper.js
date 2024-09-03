export const sendResponse = (status, data) => {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const handleError = (status, message) => {
    return sendResponse(status, {
        error: message
    })
}