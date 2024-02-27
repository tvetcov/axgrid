class DataService {
    baseUrl: string;

    constructor() {
        this.baseUrl = './apiMocks/';
    }

    async fetch<T>(endpoint: string) {
        const url = `${this.baseUrl}${endpoint}.json`;

        try {
            const response = await fetch(url);
            return await response.json() as T;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export default new DataService();
