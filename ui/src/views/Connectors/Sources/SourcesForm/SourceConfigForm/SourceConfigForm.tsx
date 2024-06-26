import { useQuery } from '@tanstack/react-query';

import { SteppedFormContext } from '@/components/SteppedForm/SteppedForm';
import { getConnectorDefinition } from '@/services/connectors';
import { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import SourceFormFooter from '@/views/Connectors/Sources/SourcesForm/SourceFormFooter';

import Loader from '@/components/Loader';
import { processFormData } from '@/views/Connectors/helpers';
import ContentContainer from '@/components/ContentContainer';
import { RJSFSchema } from '@rjsf/utils';
import { generateUiSchema } from '@/utils/generateUiSchema';
import JSONSchemaForm from '@/components/JSONSchemaForm';

/**
 * TODO: Discuss with backend team and move this to backend
 */
export const uiSchemas: Record<string, RJSFSchema> = {
  'amazon redshift': {
    'ui:order': ['host', 'port', 'database', 'credentials', 'schema'],
    'ui:layout': {
      //? Specify that we must follow grid layout
      display: 'grid',
      //? Specify the number of columns
      cols: 2,
      //? This can be read as the number of columns that each item
      //? in the grid should take (similar to in css). Its applied according to what is
      //? specified in the ui:order
      colspans: [2, 1, 1, 2, 2],
    },
    host: {
      'ui:placeholder': 'redshift-host.us-east-1.redshift.amazonaws.com',
    },
    credentials: {
      'ui:layout': {
        display: 'grid',
        cols: 2,
        colspans: [1, 1],
      },
      auth_type: {
        'ui:widget': 'hidden',
      },
    },
  },
};

const SourceConfigForm = (): JSX.Element | null => {
  const { state, stepInfo, handleMoveForward } = useContext(SteppedFormContext);
  const { forms } = state;
  const selectedDataSource = forms.find(({ stepKey }) => stepKey === 'datasource');
  const datasource = selectedDataSource?.data?.datasource as string;

  if (!datasource) return null;

  const { data, isLoading } = useQuery({
    queryKey: ['connector_definition', datasource],
    queryFn: () => getConnectorDefinition('source', datasource),
    enabled: !!datasource,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loader />;

  const handleFormSubmit = async (formData: FormData) => {
    const processedFormData = processFormData(formData);
    handleMoveForward(stepInfo?.formKey as string, processedFormData);
  };

  const connectorSchema = data?.data?.connector_spec?.connection_specification;
  if (!connectorSchema) return null;

  const generatedSchema = generateUiSchema(connectorSchema);

  return (
    <Box display='flex' justifyContent='center' marginBottom='80px'>
      <ContentContainer>
        <Box backgroundColor='gray.200' padding='24px' borderRadius='8px'>
          <JSONSchemaForm
            schema={connectorSchema}
            uiSchema={generatedSchema}
            onSubmit={(formData: FormData) => handleFormSubmit(formData)}
          >
            <SourceFormFooter
              ctaName='Continue'
              ctaType='submit'
              isContinueCtaRequired
              isDocumentsSectionRequired
              isBackRequired
            />
          </JSONSchemaForm>
        </Box>
      </ContentContainer>
    </Box>
  );
};

export default SourceConfigForm;
