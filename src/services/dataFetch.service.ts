class DataFetchService {
    baseUrl: string;

    constructor() {
        this.baseUrl = './apiMocks/';
    }

    async fetch<T>(endpoint: string) {
        const url = `${this.baseUrl}${endpoint}.json`;

        try {
            const response = await fetch(url);
            return response.json ? (await response.json()) : response as T;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}

export default new DataFetchService();
