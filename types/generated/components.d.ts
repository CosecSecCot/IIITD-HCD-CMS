import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsDuration extends Struct.ComponentSchema {
  collectionName: 'components_components_durations';
  info: {
    displayName: 'Duration';
    icon: 'clock';
  };
  attributes: {
    From: Schema.Attribute.Date & Schema.Attribute.Required;
    To: Schema.Attribute.Date;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    DisplayText: Schema.Attribute.String;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsPublicationAuthor extends Struct.ComponentSchema {
  collectionName: 'components_components_publication_authors';
  info: {
    displayName: 'PublicationAuthor';
    icon: 'write';
  };
  attributes: {
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface ComponentsTag extends Struct.ComponentSchema {
  collectionName: 'components_components_tags';
  info: {
    displayName: 'Tag';
    icon: 'hashtag';
  };
  attributes: {
    Tag: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.duration': ComponentsDuration;
      'components.link': ComponentsLink;
      'components.publication-author': ComponentsPublicationAuthor;
      'components.tag': ComponentsTag;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
