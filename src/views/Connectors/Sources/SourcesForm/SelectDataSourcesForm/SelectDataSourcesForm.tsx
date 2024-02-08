import { useContext } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { SteppedFormContext } from "@/components/SteppedForm/SteppedForm";
import { getConnectorsDefintions } from "@/services/connectors";
import { useQuery } from "@tanstack/react-query";
import { DatasourceType } from "@/views/Connectors/types";
import { useUiConfig } from "@/utils/hooks";

const SelectDataSourcesForm = (): JSX.Element => {
  const { state, stepInfo, handleMoveForward } = useContext(SteppedFormContext);
  const { maxContentWidth } = useUiConfig();

  const { currentForm } = state;
  const { data } = useQuery({
    queryKey: ["datasources", "source"],
    queryFn: () => getConnectorsDefintions("source"),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    gcTime: Infinity,
  });

  const datasources = data?.data ?? [];

  const handleOnClick = (datasource: DatasourceType) => {
    if (stepInfo?.formKey) {
      handleMoveForward(stepInfo.formKey, datasource.name);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        display={{ base: "block", md: "grid" }}
        gridTemplateColumns="1fr 1fr"
        gap="20px"
        marginBottom="20px"
        paddingY="10px"
        maxWidth={maxContentWidth}
        width="100%"
      >
        {datasources.map((datasource) => (
          <Box
            key={datasource.name}
            padding="20px"
            width="100%"
            borderRadius="8px"
            borderWidth="thin"
            borderColor="gray.400"
            marginRight="10px"
            marginBottom="10px"
            cursor="pointer"
            display="flex"
            alignItems="center"
            onClick={() => handleOnClick(datasource)}
          >
            <Box>
              <Image src={datasource.icon} height="8" w="min" mr={3} />
            </Box>
            <Box display="flex" alignItems="center">
              <Box
                height="40px"
                width="40px"
                marginRight="10px"
                borderWidth="thin"
                padding="5px"
                borderRadius="8px"
              >
                <Image
                  src={datasource.icon}
                  alt="source icon"
                  maxHeight="100%"
                />
              </Box>
              <Text fontWeight='bold'>{datasource.name}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SelectDataSourcesForm;
