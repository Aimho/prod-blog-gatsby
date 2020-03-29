import { ReplaceComponentRendererArgs } from 'gatsby';

export type ITemplateProps<T> = ReplaceComponentRendererArgs['props'] & {
    pageContext: {
        isCreatedByStatefulCreatePages: boolean;
    } & T;
};

export type IPostTemplateProps = ITemplateProps<{
    html: string;
    title: string;
}>;

export type TLatestPostListQueryFilter = {
    ne?: String;
    eq?: String;
};
