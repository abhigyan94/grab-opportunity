import { HighlightResult } from './highlightResult.model';

export interface Posts {
    created_at: string;
    title: string,
    url: string;
    author: string;
    points: number;
    story_text?: string;
    comment_text: string;
    num_comments: number;
    story_id: string;
    story_title: string;
    story_url: string;
    parent_id: string;
    created_at_i: number;
    tags: string[];
    objectID: string;
    _highlightResult?: HighlightResult
}


