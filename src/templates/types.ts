import { ReplaceComponentRendererArgs } from 'gatsby';

export type ITemplateProps<T> = ReplaceComponentRendererArgs['props'] & {
    pageContext: {
        isCreatedByStatefulCreatePages: boolean;
    } & T;
};

export type IPostTemplateProps = ITemplateProps<{
    html: string;
    createdAt: string;
    title: string;
    subTitle: string;
    tags: string[];
}>;

export type TLatestPostListQueryFilter = {
    ne?: String;
    eq?: String;
};
