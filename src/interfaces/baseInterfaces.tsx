export interface Item{
	author: string,
	story_title: string,
	story_url: string,
	created_at: string
}
export interface Hits{
	hits: Array<Item>
}
