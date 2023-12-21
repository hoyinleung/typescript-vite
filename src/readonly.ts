// Readonly
type BlogPost={
	title:string
	content:string
	summary:string
	wordCount:number
}

/* type PublishedBlogPost = {
	readonly title:string
	readonly content:string
	readonly summary:string
	readonly wordCount:number
} */

type PublishedBlogPost = Readonly<BlogPost>

const blogPost = {
	title:'如何學習typescript',
	content:'Typescript有點難，有點麻煩，但有用和＄＄＄',
	summary:'Typescript是甚麼',
	wordCount:556
} as const