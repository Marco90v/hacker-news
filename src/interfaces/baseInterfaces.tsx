export interface Item{
	author: string,
	story_title: string,
	story_url: string,
	created_at: string,
	objectID: string,
	fave:boolean
}
export interface Hits{
	hits: Array<Item>
}
