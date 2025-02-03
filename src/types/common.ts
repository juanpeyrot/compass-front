export interface ListResponse<T> {
	totalResults: number;
	results: T[];
}

export interface TPagination {
	offset: number;
	limit: number;
	totalResults: number;
}