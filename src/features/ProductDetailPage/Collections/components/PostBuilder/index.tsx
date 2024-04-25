import React from "react";
import { TODO } from "../../../../../../global";
import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import AppImage from "@/components/AppImage";

export default function PostBuilder({ data: mainData }: { data: TODO }) {
  const Column = (props: any) => {
    const { data } = props;
    const myData = mainData.filter((d: any) => d.parentId === data.id);
    return (
      <Grid>
        {myData.length > 1 ? (
          <MyRow data={data} />
        ) : (
          <Box>
            <AppImage
              alt="banner"
              rounded="0"
              height={500}
              width={500}
              src={data?.url}
            />
          </Box>
        )}
      </Grid>
    );
  };

  const MyRow = (props: any) => {
    const { data } = props;
    const myData = mainData.filter((d: any) => d.parentId === data.id);
    return (
      <Flex gap="0.8rem" alignItems="stretch">
        {myData &&
          myData.length > 0 &&
          myData.map((columns: any, i: any) => {
            return <Column key={i} data={columns} />;
          })}
      </Flex>
    );
  };
  return (
    <Container w="100%" display="grid" placeItems="center">
      <Grid gap={"0.8rem"}>
        {mainData &&
          mainData
            .filter((d: any) => !d.hasOwnProperty("parentId"))
            .map((rows: any, i: any) => {
              return <MyRow key={i} data={rows} />;
            })}
      </Grid>
    </Container>
  );
}
