import { ReplaceComponentRendererArgs } from 'gatsby';

export type TemplateProps<T> = ReplaceComponentRendererArgs['props'] & {
    pageContext: {
        isCreatedByStatefulCreatePages: boolean;
    } & T;
};

export type PostTemplateProps = TemplateProps<{
    html: string;
    createdAt: string;
    title: string;
    description: string;
    tags: string[];
    previousPost: previousNextPost;
    nextPost: previousNextPost;
}>;

export type TagTemplateProps = TemplateProps<{
    tag: string;
}> & { data: any };

type previousNextPost = {
    path: string;
    title: string;
};
