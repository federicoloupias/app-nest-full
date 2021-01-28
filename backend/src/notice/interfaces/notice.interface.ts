import { Document } from 'mongoose';

export interface Notice extends Document{
    readonly story_title : string;
    readonly title: string;
    readonly author: string;
    readonly story_url: string;
    readonly url: string;
    readonly created_at: string;
    readonly _id: string;
    readonly isRemoved: Boolean;
}