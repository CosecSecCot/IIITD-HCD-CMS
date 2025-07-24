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
    DisplayText: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResearchPagesDepartmentProjectCard
  extends Struct.ComponentSchema {
  collectionName: 'components_research_pages_department_project_cards';
  info: {
    displayName: 'Department Project Card';
    icon: 'briefcase';
  };
  attributes: {
    department_project: Schema.Attribute.Relation<
      'oneToOne',
      'api::department-project.department-project'
    >;
    ShortDescription: Schema.Attribute.String;
  };
}

export interface ResearchPagesLabCard extends Struct.ComponentSchema {
  collectionName: 'components_research_pages_lab_cards';
  info: {
    displayName: 'Lab Card';
    icon: 'apps';
  };
  attributes: {
    DisplayColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    Faculty: Schema.Attribute.Relation<'oneToOne', 'api::faculty.faculty'>;
    LabLogo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    LabName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    LabType: Schema.Attribute.Enumeration<['Research', 'Teaching']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Research'>;
    LongDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    ShortDescription: Schema.Attribute.String & Schema.Attribute.Required;
    WebsiteLink: Schema.Attribute.String;
  };
}

export interface ResearchPagesPublicationCard extends Struct.ComponentSchema {
  collectionName: 'components_research_pages_publication_cards';
  info: {
    displayName: 'Publication Card';
    icon: 'file';
  };
  attributes: {
    Faculty: Schema.Attribute.Relation<'oneToOne', 'api::faculty.faculty'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.duration': ComponentsDuration;
      'components.link': ComponentsLink;
      'research-pages.department-project-card': ResearchPagesDepartmentProjectCard;
      'research-pages.lab-card': ResearchPagesLabCard;
      'research-pages.publication-card': ResearchPagesPublicationCard;
    }
  }
}
