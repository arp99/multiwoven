import Form from '@rjsf/chakra-ui';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

import ObjectFieldTemplate from '@/components/JSONSchemaForm/rjsf/ObjectFieldTemplate';
import TitleFieldTemplate from '@/components/JSONSchemaForm/rjsf/TitleFieldTemplate';
import FieldTemplate from '@/components/JSONSchemaForm/rjsf/FieldTemplate';
import BaseInputTemplate from '@/components/JSONSchemaForm/rjsf/BaseInputTemplate';
import DescriptionFieldTemplate from '@/components/JSONSchemaForm/rjsf/DescriptionFieldTemplate';
import { FormProps } from '@rjsf/core';

type JSONSchemaFormProps = {
  schema: RJSFSchema;
  uiSchema: Record<string, string>;
  onSubmit: (formData: FormData) => void;
  onChange?: (formData: FormData) => void;
  children?: JSX.Element;
  formData?: unknown;
};

const JSONSchemaForm = ({
  schema,
  uiSchema,
  onSubmit,
  onChange,
  children,
  formData,
}: JSONSchemaFormProps): JSX.Element => {
  const templateOverrides: FormProps<any, RJSFSchema, any>['templates'] = {
    ObjectFieldTemplate: ObjectFieldTemplate,
    TitleFieldTemplate: TitleFieldTemplate,
    FieldTemplate: FieldTemplate,
    BaseInputTemplate: BaseInputTemplate,
    DescriptionFieldTemplate: DescriptionFieldTemplate,
  };
  return (
    <Form
      //  TODO: Removed Hardcoded UI Schema
      // uiSchema={
      //   connectorSchema.title ? uiSchemas[connectorSchema.title.toLowerCase()] : undefined
      // }
      uiSchema={uiSchema}
      schema={schema}
      validator={validator}
      templates={templateOverrides}
      formData={formData}
      onSubmit={({ formData }) => onSubmit(formData)}
      onChange={({ formData }) => onChange?.(formData)}
    >
      {children}
    </Form>
  );
};

export default JSONSchemaForm;
