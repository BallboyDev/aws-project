const res = {
    200: (data: string) => {
        return {
            code: 200,
            data: data
        }
    },
    500: () => {
        return {
            code: 500,
            message: 'server error'
        }
    }
}

export default res