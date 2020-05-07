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
    subTitle: string;
    tags: string[];
}>;

export type TagTemplateProps = TemplateProps<{
    tag: string;
}> & { data: any };
